/* eslint-disable @typescript-eslint/no-explicit-any */
import intersect from '../../../assets/maps/intesect.png';
import checked from "../../../assets/footstep.png"
import { Way_IN } from "../../../types/Enums";
import danger from "../../../assets/hidden.png"
import water from "../../../assets/lako.png"
import food from "../../../assets/maps/food.png"
import enemy from "../../../assets/maps/enemy.png"
import change from "../../../assets/turning.png"

import MapModal from "./MapModal";
import type { InteractiveMapPropsType } from "../../../types/InteractiveMap";
import { useInteractiveValeriaMap } from "./useInteractiveValeriaMap";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';


export const InteractiveMap = ({ selectedWayIn, setProgress, setFeedBack }: InteractiveMapPropsType) => {
    const { t } = useTranslation()
    const {
        completedRoad,
        onClickChangeRoute,
        onClickCancelChangeRoute,
        selectArmyPower,
        askForMen,
        continueWithoutMoreMen,
        roadZone,
        selectedRoad,
        modalOptions,
        roadPhase,
        onCloseModal,
        onSacrifice,
        visible,
        disabled
    } = useInteractiveValeriaMap({ selectedWayIn, setProgress, setFeedBack })

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    return (
        <div className="relative">
            <div className="max-w-[900px] min-w-[550px]">
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: "100%",
                        minWidth: "100%",
                        margin: "0 auto"
                    }}
                >
                    {/* Background Image */}
                    <img
                        src={roadZone?.map}
                        alt="Valoria Map"
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "block",
                            objectFit: "cover"
                        }}
                    />

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
                        <img src={checked} className="rotate-[300deg]" width={40} height={40} />
                    </div>
                    {/* Clickable Zones */}
                    {roadZone?.roads.map((zone, index) => (
                        <>
                            {/* road labels */}
                            {selectedRoad ? null : (
                                <div
                                    key={zone.id}
                                    onClick={() => {
                                        if (!disabled) selectArmyPower(index)
                                    }}
                                    className={`flex h-[10%] w-20 items-center justify-center rounded-md border-[2px] border-solid border-[#DC8E2F] bg-black/50 p-3 ${disabled ? "" : "hover:!bg-black/80"}`}
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
                                                  <img src={danger} width={55} height={55} />
                                              </div>
                                          )
                                  })
                                : visible
                                  ? zone?.road?.map(item => {
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
                                                    <img src={danger} width={55} height={55} />
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
                                    <img
                                        src={change}
                                        className="!w-[60px] !rounded-[20px]"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            ))}
                        </>
                    ))}

                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        {completedRoad?.map((item: any, index: number) => {
                            if (item?.id?.includes("hidden") && item?.phase >= roadPhase)
                                return null

                            return (
                                <motion.div
                                    key={item.id}
                                    className="rounded-full"
                                    style={{
                                        position: "absolute",
                                        ...item?.style
                                    }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.4 }}
                                >
                                    <img
                                        src={checked}
                                        className="rotate-[300deg]"
                                        width={32}
                                        height={32}
                                    />
                                </motion.div>
                            )
                        })}
                    </motion.div>
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
                        // onSelectSoliderPercentage={onSelectSoliderPercentage}

                        onCloseModal={onCloseModal}
                        onSacrifice={onSacrifice}
                        askForMen={askForMen}
                        continueWithoutMoreMen={continueWithoutMoreMen}
                    />
                </div>
            </div>
            <div className="absolute -start-1.5 -bottom-[100px] flex h-[120px] w-[101.3%] flex-row items-center justify-between border-[3px] border-[#844501] bg-[#f5ddaa] px-2">
                <div className="flex flex-col items-center gap-1">
                    <img src={food} width={80} height={80} />
                    <p className="font-sans font-bold text-black"> {t("farm")} </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src={water} width={80} height={80} />
                    <p className="font-sans font-bold text-black"> {t("lake")} </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src={change} width={60} height={60} className="rounded-[50px]" />
                    <p className="font-sans font-bold text-black">{t("changeRoad")} </p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src={danger} width={80} height={80} />
                    <p className="font-sans font-bold text-black"> {t("hiddenEnemy")}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <img src={enemy} width={50} height={70} />
                    <p className="font-sans font-bold text-black"> {t("enemy")}</p>
                </div>
            </div>
        </div>
    )
}

