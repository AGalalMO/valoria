/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useMemo, useState } from "react"
import { MAP_MODAL_TYPE, Way_IN } from "../../../types/Enums"
import type { RoadCheckPointType, RoadPhasesType, RoadType } from "../../../types/RoadTypes"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { InteractiveMapPropsType, ModalOptionType } from "../../../types/InteractiveMap"
import { JourneyMapBlueprint } from "./JourneyMapBlueprint"

export const useInteractiveValeriaMap = ({
    setProgress,
    selectedWayIn
}: InteractiveMapPropsType) => {
    //#region  STATES
    const roadZone = useMemo(() => {
        if (selectedWayIn == Way_IN.SPY) return JourneyMapBlueprint.Spy
        if (selectedWayIn == Way_IN.ALLIE) return JourneyMapBlueprint.Allie
        if (selectedWayIn == Way_IN.ATTACK) return JourneyMapBlueprint.Attack
    }, [selectedWayIn])
    const [selectedRoad, setSelectedRoad] = useState<RoadType | null>()
    const [alternate, setAlternate] = useState<RoadPhasesType | null>(null)
    const [roadPhase, setRoadPhase] = useState(0)
    const [completedRoad, setCompletedRoads] = useState<any>([])
    const [modalOptions, setModalOptions] = useState<ModalOptionType>({
        isOpen: false,
        modalType: null
    })
    //#endregion

    //#region effects

    useEffect(() => {
        if ((roadPhase == 7 && selectedRoad?.index == 0) || roadPhase == 8) {
            setProgress(prev => ({ ...prev, currentFlow: FLOW_ENUM.SHOW_VAL_MAP }))
        }
    }, [roadPhase])
    //#endregion

    //change route like from cliff to slik handler
    const onClickChangeRoute = () => {
        onSelectRoad(alternate?.alternateIndex as number, roadPhase, true)
    }

    //cancel Change Route
    const onClickCancelChangeRoute = () => {
        setModalOptions({ isOpen: false, modalType: null })
        setAlternate(null)
        const intersection = selectedRoad?.intersections?.filter(item => item?.phase == roadPhase)
        setCompletedRoads((prev: any) => [...prev, intersection?.[0]])
        onSelectRoad(selectedRoad?.index as number, roadPhase + 1, false)
    }

    //#region main journey handler
    // main function responsible for all phase changing and start the journey
    const onSelectRoad = (index: number, phase: number, isChange?: boolean) => {
        if (isChange) {
            setModalOptions({ isOpen: false, modalType: null })
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
                                (item: any) =>
                                    item?.phase == (alternate?.alternatePhase as number) - 1
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
                                                prev?.manPower?.army + (item?.advantage?.army ?? 0),
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
                if (!alternates?.length) {
                    if (haveEnemies) {
                        setTimeout(() => {
                            setModalOptions({
                                isOpen: true,
                                modalType: MAP_MODAL_TYPE.INCREASE_SOLDIERS
                            })
                        }, 1000)
                    } else {
                        changePhase(phase + 1, roadZone?.roads?.[index])
                    }
                } else {
                    setTimeout(() => {
                        setAlternate(alternates?.[0])
                        setModalOptions({ isOpen: true, modalType: MAP_MODAL_TYPE.CHANGE_ROUTE })
                    }, 1000)
                }
            }, 2000)
        }
    }

    //sub function for main function to check if there an army or intersection with another road
    const changePhase = (phase: number, currentRoad: any) => {
        setRoadPhase(phase)
        const alternates = currentRoad?.phases?.filter((item: any) => item?.id == phase)
        const enemies = currentRoad?.road?.filter(
            (item: RoadCheckPointType) => item?.phase == phase && item?.id?.includes("enemy")
        )
        if (alternates?.length) {
            setTimeout(() => {
                setAlternate(alternates?.[0])
                setModalOptions({ isOpen: true, modalType: MAP_MODAL_TYPE.CHANGE_ROUTE })
            }, 1000)
            return
        }
        if (enemies?.length) {
            setTimeout(() => {
                setModalOptions({ isOpen: true, modalType: MAP_MODAL_TYPE.INCREASE_SOLDIERS })
            }, 1000)
        }
    }
    //#endregion
    //#region army power handlers
    //handler For click the desired power for start army
    const selectArmyPower = (index: number) => {
        setModalOptions({
            isOpen: true,
            modalType: MAP_MODAL_TYPE.SOLIDER_PERCENTAGE,
            index: index
        })
    }

    // function executes to set the power of the army started
    const onSelectSoliderPercentage = (percentage: number) => {
        if (percentage == 70) {
            setProgress(prev => ({
                ...prev,
                manPower: {
                    army: prev?.manPower?.army - 3,
                    people: prev?.manPower?.people - 4,
                    money: prev?.manPower?.money - 7
                }
            }))
        } else if (percentage == 60) {
            setProgress(prev => ({
                ...prev,
                manPower: {
                    army: prev?.manPower?.army - 2,
                    people: prev?.manPower?.people - 3,
                    money: prev?.manPower?.money - 5
                }
            }))
        } else {
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

    //#endregion


    //#region check if need to more men handlers
    const askForMen = () => {
        const enemy = selectedRoad?.road?.filter(
            item => item?.phase == roadPhase && item?.id?.includes("enemy")
        )?.[0]
        setProgress(prev => ({
            ...prev,
            manPower: {
                army: prev?.manPower?.army,
                people: prev?.manPower?.people - 3,
                money: prev?.manPower?.money - 5
            }
        }))

        setTimeout(() => {
            setModalOptions({ isOpen: false, modalType: null })
            setCompletedRoads((prev: any) => [...prev, enemy])
            onSelectRoad(selectedRoad?.index as number, (enemy?.phase as number) + 1)
        }, 1000)
    }
    const continueWithoutMoreMen = () => {
        const enemy = selectedRoad?.road?.filter(
            item => item?.phase == roadPhase && item?.id?.includes("enemy")
        )?.[0]
        const isKnown = enemy?.id === "enemy" ? true : false
        setProgress(prev => ({
            ...prev,
            manPower: {
                army: prev?.manPower?.army - (isKnown ? 3 : 5),
                people: prev?.manPower?.people - (isKnown ? 0 : 2),
                money: prev?.manPower?.money - 2
            }
        }))
        setTimeout(() => {
            setModalOptions({ isOpen: false, modalType: null })
            setCompletedRoads((prev: any) => [...prev, enemy])

            onSelectRoad(selectedRoad?.index as number, (enemy?.phase as number) + 1)
        }, 1000)
    }
    //#endregion
    return {
        completedRoad,
        onClickChangeRoute,
        onClickCancelChangeRoute,
        selectArmyPower,
        onSelectSoliderPercentage,
        askForMen,
        continueWithoutMoreMen,
        roadZone,
        selectedRoad,
        modalOptions,
        roadPhase
    }
}

