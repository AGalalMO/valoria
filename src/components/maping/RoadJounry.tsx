/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/InteractiveValoriaMap.jsx
import { useMemo, useState } from "react";
import intersect from '../../assets/maps/intesect.png'
import danger from "../../assets/maps/danger.png"
import checked from '../../assets/maps/checked.svg'
import { Way_IN,  MAP_MODAL_TYPE} from "../../types/Enums"
import { journeyMaps } from "./JournyMap"
import type { RoadCheckPointType, RoadPhasesType, RoadType } from "../../types/RoadTypes"
import MapModal from "./modal";
import type { UserProgressType } from "../../types/UserProgress";


export const InteractiveValeriaMap = ({
    selectedWayIn,
    setProgress
}: {
    selectedWayIn: Way_IN | null
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
}) => {
    const roadZone = useMemo(() => {
        if (selectedWayIn == Way_IN.SPY) return journeyMaps.Spy
        if (selectedWayIn == Way_IN.ALLIE) return journeyMaps.Allie
        if (selectedWayIn == Way_IN.ATTACK) return journeyMaps.Attack
    }, [selectedWayIn])
    const [selectedRoad, setSelectedRoad] = useState<RoadType | null>()

    const [alternate, setAlternate] = useState<RoadPhasesType|null>(null)

    const [roadPhase, setRoadPhase] = useState(0)
    console.log("ROAD PH", roadPhase)

    const [modalOptions, setModalOptions] = useState<{
        isOpen: boolean
        modalType: MAP_MODAL_TYPE | null
        index?: number
    }>({
        isOpen: false,
        modalType: null
    })
    const [completedRoad, setCompletedRoads] = useState<any>([])
    const onClickChangeRoute = () => {
        onSelectRoad(alternate?.alternateIndex as number, roadPhase , true)
    }
    const onClickCancelChangeRoute = () => {
        setModalOptions({ isOpen: false, modalType: null })
        setAlternate(null)
        const intersection=selectedRoad?.intersections?.filter((item)=>item?.phase==roadPhase)
        setCompletedRoads((prev:any) => [...prev, intersection?.[0]])
        onSelectRoad(selectedRoad?.index as number, roadPhase+1 , false)
    }

    const onSelectRoad = (index: number, phase: number, isChange?: boolean) => {       
        if (isChange) {
            setModalOptions({isOpen:false,modalType:null})
            setTimeout(() => {
                setCompletedRoads((prev: any) => [
                    ...prev,
                    {
                        id: "road3",
                        style: {
                            ...selectedRoad?.intersections?.filter(
                                (item: any) => item?.phase == roadPhase
                            )?.[0]?.style
                        },
                        phase: 2,
                        visible: false
                    },
                    {
                        id: "road4",
                        style: {
                            ...roadZone?.roads?.[index]?.intersections?.filter(
                                (item: any) => item?.phase == (alternate?.alternatePhase as number)-1
                            )?.[0]?.style
                        },
                        phase: 2,
                        visible: false
                    }
                ])
                setSelectedRoad(roadZone?.roads?.[index])
                changePhase(alternate?.alternatePhase as number, roadZone?.roads?.[index])
                setAlternate(null)
            }, 2000)
        } else {
            setSelectedRoad(roadZone?.roads?.[index])
            setTimeout(() => {
                setRoadPhase(phase)
                let roads: any = []
                let haveEnemies = false
                 roadZone?.roads?.[index]?.intersections?.map((item: any) => {
                     if (item?.phase == phase) {
                         roads.push(item)
                     }
                 })
                const alternates = roadZone?.roads?.[index]?.phases?.filter(
                    item => item?.id == phase
                )
              
                 if (!alternates?.length) {
                     roadZone?.roads?.[index]?.road?.map((item: RoadCheckPointType) => {
                         if (item?.phase == phase && !item?.id?.includes("enemy")) {
                             {
                                 roads.push(item)
                                 if (item?.advantage) {
                                     setProgress(prev => ({
                                         ...prev,
                                         manPower: {
                                             army:
                                                 prev?.manPower?.army +
                                                 (item?.advantage?.army ?? 0),
                                             money:
                                                 prev?.manPower?.money +
                                                 (item?.advantage?.money ?? 0),
                                             people:
                                                 prev?.manPower?.people +
                                                 (item?.advantage?.people ?? 0)
                                         }
                                     }))
                                 }
                             }
                         } else if (item?.phase == phase && item?.id?.includes("enemy")) {
                             haveEnemies = true
                         }
                     })
                 }
                setCompletedRoads((prev: any) => [...prev, ...roads])
                if (!alternates?.length)
                {
                     if (haveEnemies) {
                         setTimeout(() => {
                             setModalOptions({ isOpen: true, modalType:MAP_MODAL_TYPE.INCREASE_SOLDIERS })
                         }, 1000)
                     } else {
                         changePhase(phase + 1, roadZone?.roads?.[index])
                     }
                }
                else
                {
                    setTimeout(() => {
                          setAlternate(alternates?.[0])
                         setModalOptions({ isOpen: true, modalType: MAP_MODAL_TYPE.CHANGE_ROUTE })
                     }, 1000)
                    }
               
                
            }, 2000)
        }
    }
    const selectArmyPower = (index: number) => {
        setModalOptions({
            isOpen: true,
            modalType: MAP_MODAL_TYPE.SOLIDER_PERCENTAGE,
            index: index
        })
    }
    const changePhase = (phase: number, currentRoad: any) => {
        setRoadPhase(phase)
        const alternates = currentRoad?.phases?.filter((item: any) => item?.id == phase)
        const enemies = currentRoad?.road?.filter(
            (item: RoadCheckPointType) => item?.phase == phase && item?.id?.includes("enemy")
        )
        if (alternates?.length) {
            setTimeout(() => {
                setAlternate(alternates?.[0])
                setModalOptions({isOpen:true,modalType:MAP_MODAL_TYPE.CHANGE_ROUTE})
            }, 1000)
            return;
        }
        if (enemies?.length)
        {
             setTimeout(() => {
                 setModalOptions({ isOpen: true, modalType: "INCREASE_SOLDIERS" })
             }, 1000)
        }

    }

    const onSelectSoliderPercentage = (percentage: number) => {
        if (percentage == 70) 
        {
            setProgress(prev => ({
            ...prev,
            manPower: {
                army: prev?.manPower?.army - 3,
                people: prev?.manPower?.people - 4,
                money: prev?.manPower?.money - 7
            }
        }))
        }
        else if (percentage == 60)
        {
            setProgress(prev => ({
                ...prev,
                manPower: {
                    army: prev?.manPower?.army - 2,
                    people: prev?.manPower?.people - 3,
                    money: prev?.manPower?.money - 5
                }
            }))
        }
        else
        {
              setProgress(prev => ({
                  ...prev,
                  manPower: {
                      army: prev?.manPower?.army - 2,
                      people: prev?.manPower?.people - 2,
                      money: prev?.manPower?.money - 4
                  }
              }))
        }
         onSelectRoad(modalOptions?.index as number, 1)
         setModalOptions({ isOpen: false, modalType: null })
            
    }

    const askForMen = () => {
        const enemy = selectedRoad?.road?.filter(
            item => item?.phase == roadPhase && item?.id?.includes("enemy")
        )?.[0]
           setProgress(prev => ({
               ...prev,
               manPower: {
                   army: prev?.manPower?.army ,
                   people: prev?.manPower?.people - 3,
                   money: prev?.manPower?.money - 5
               }
           }))
        
        setTimeout(() => {
            setModalOptions({ isOpen: false, modalType: null })
             setCompletedRoads((prev: any) => [...prev, enemy])
             onSelectRoad(selectedRoad?.index as number,(enemy?.phase as number) + 1)
        },1000)
    }
    const continueWithoutMoreMen = () => {
         const enemy = selectedRoad?.road?.filter(
            item => item?.phase == roadPhase && item?.id?.includes("enemy")
        )?.[0]
        const isKnown = enemy?.id === 'enemy' ? true : false
         setProgress(prev => ({
             ...prev,
             manPower: {
                 army: prev?.manPower?.army -(isKnown?3:5),
                 people: prev?.manPower?.people - (isKnown?0:2),
                 money: prev?.manPower?.money - 2
             }
         }))
          setTimeout(() => {
              setModalOptions({ isOpen: false, modalType: null })
             setCompletedRoads((prev: any) => [...prev, enemy])

           onSelectRoad(selectedRoad?.index as number, (enemy?.phase as number) + 1)
          }, 1000)
    }
    return (
        <div
            style={{
                position: "relative",
                width: "800px",
                maxWidth: "800px",
                minWidth: "800px",
                margin: "0 auto"
            }}
        >
            {/* Background Image */}
            <img
                src={roadZone?.map}
                alt="Valoria Map"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
            />

            {selectedWayIn == Way_IN.ATTACK ? null : (
                <div
                    key={"start"}
                    className="rounded-full"
                    style={{
                        position: "absolute",
                        top: "27.5%",
                        right: "2%",
                        width: "32px",
                        height: "32px",
                        zIndex: 500
                    }}
                >
                    <img src={checked} width={40} height={40} />
                </div>
            )}
            {/* Clickable Zones */}
            {roadZone?.roads.map((zone, index) => (
                <>
                    {/* road labels */}
                    {selectedRoad ? null : (
                        <div
                            key={zone.id}
                            onClick={() => selectArmyPower(index)}
                            className="flex h-[10%] w-20 items-center justify-center rounded-md border-[2px] border-solid border-[#DC8E2F] bg-black/50 p-3 hover:!bg-black/80"
                            style={{
                                position: "absolute",
                                cursor: "pointer",
                                ...zone.style
                            }}
                            title={zone.label}
                        >
                            <p className="font-trajan text-base font-bold text-white">
                                {zone?.label}
                            </p>
                        </div>
                    )}

                    {/* hidden Enemies */}
                    {selectedRoad
                        ? selectedRoad?.road?.map(item => {
                              if (item.id.includes("hidden") && item?.phase >= roadPhase)
                                  return (
                                      <div
                                          key={item.id}
                                          className="rounded-full"
                                          style={{
                                              position: "absolute",
                                              ...item.style
                                          }}
                                      >
                                          <img src={danger} width={32} height={32} />
                                      </div>
                                  )
                          })
                        : null}

                    {zone?.intersections?.map(item => (
                        <div
                            key={item.id}
                            className="z-[500] h-8 w-8 rounded-full hover:!bg-white/50"
                            style={{
                                position: "absolute",
                                cursor: "pointer",
                                ...item.style
                            }}
                        >
                            <img src={intersect} width={40} height={40} />
                        </div>
                    ))}
                </>
            ))}

            {completedRoad?.map((item: any) => (
                <>
                    {item?.id?.includes("hidden") && item?.phase >= roadPhase ? null : (
                        <div
                            key={item.id}
                            className="rounded-full"
                            style={{
                                position: "absolute",
                                ...item.style
                            }}
                        >
                            <img src={checked} width={32} height={32} />
                        </div>
                    )}
                </>
            ))}
            {selectedWayIn == Way_IN.ATTACK ? null : (
                <div
                    key={"start"}
                    className="rounded-full"
                    style={{
                        position: "absolute",
                        top: "30%",
                        right: "78%"
                    }}
                >
                    <img src={intersect} width={40} height={40} />
                </div>
            )}
            {/* Selection Display */}
            {/* {selectedRoad && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        borderRadius: "8px"
                    }}
                >
                    🚀 You selected: <strong>{selectedRoad}</strong>
                </div>
            )} */}
            <MapModal
                modalOptions={modalOptions}
                onClickCancelChangeRoute={onClickCancelChangeRoute}
                onClickChangeRoute={onClickChangeRoute}
                onSelectSoliderPercentage={onSelectSoliderPercentage}
                askForMen={askForMen}
                continueWithoutMoreMen={continueWithoutMoreMen}
            />
        </div>
    )
}
