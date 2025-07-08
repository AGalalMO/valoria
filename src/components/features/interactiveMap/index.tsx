/* eslint-disable @typescript-eslint/no-explicit-any */
import intersect from '../../../assets/maps/intesect.png';
import danger from "../../../assets/maps/danger.png"
import checked from "../../../assets/maps/checked.svg"
import { Way_IN } from "../../../types/Enums";
import MapModal from "./MapModal";
import type { InteractiveMapPropsType } from "../../../types/InteractiveMap";
import { useInteractiveValeriaMap } from "./useInteractiveValeriaMap";


export const InteractiveMap = ({ selectedWayIn, setProgress }: InteractiveMapPropsType) => {
   const {
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
   } = useInteractiveValeriaMap({ selectedWayIn, setProgress })
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

