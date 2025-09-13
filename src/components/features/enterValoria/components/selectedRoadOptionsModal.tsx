import { useEffect, useMemo, useRef, useState } from "react";
import { ModalWrapper } from "./modalWrapper"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import type { UserProgressType } from "../../../../types/UserProgress"
import type { LeaderType } from "../../../../types/leaders"
import changePlan from "../../../../assets/icons/changePlan.png"
import gates_test from "../../../../assets/icons/tesst.png"
import keep_gates from "../../../../assets/icons/attack.png"
import burnWood from "../../../../assets/icons/forest/burnWood.png"
import ground from "../../../../assets/icons/forest/ground.png"
import infff from "../../../../assets/info.png"
import table from "../../../../assets/table2.png"
import send_spy from "../../../../assets/icons/forest/send_spy.png"
import { useTranslation } from "react-i18next";
import { ButtonDescription } from "../../../buttonDescription";
import BorderButton from "../../../shared/borderButton";
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import type { FeedbackType } from "../../../../types/manPower";
export const SelectedRoadOptions = ({
    setProgress,
    selectedWay,
    setFlow,
    selectedBefore,
    setFeedBack
}: propTypes) => {
    const { t ,i18n} = useTranslation()
    const [step, setStep] = useState(0)
    const [showTable, setShowTable] = useState(false)
                const mapRef = useRef<HTMLDivElement>(null)

    const modalData = useMemo(() => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST)
            return {
                head: t("traps_hidden"),
                actionIcon: send_spy,
                alternativeButtonIcon: burnWood,
                actionText: t("keep_attacking_forest"),
                alternativeButtonText: t("burn_them_all"),
                alternateSecondButtonText: t("send_spy_option"),
                alternateSecondButtonIcon: changePlan,
                desc: ["woodDesc1", "woodDesc2", "woodDesc3"]
            }
        else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES)
            return {
                head: t("not_easy_to_attack"),
                actionText: t("keep_fighting"),
                alternativeButtonText: t("sieging_city"),
                alternateSecondButtonText: t("send_spy_option"),
                actionIcon: keep_gates,
                alternativeButtonIcon: gates_test,
                alternateSecondButtonIcon: changePlan,
                desc: ["gateDesc1", "gateDesc2", "gateDesc3"]
            }
        else
            return {
                head: t("traps_hidden_river"),
                actionIcon: ground,
                alternativeButtonIcon: gates_test,
                actionText: t("send_spy_option"),
                alternativeButtonText: t("keep_attacking_river"),
                alternateSecondButtonText: t("get_out_river_fight"),
                alternateSecondButtonIcon: changePlan,
                desc: ["riverDesc1", "riverDesc2", "riverDesc3"]
            }
    }, [selectedWay])
     useEffect(() => {
         const handleClickOutside = (event: MouseEvent) => {
             console.log("event", event)
             if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
                 setShowTable(false)
             }
         }

         if (showTable) {
             document.addEventListener("mousedown", handleClickOutside)
         }

         return () => {
             document.removeEventListener("mousedown", handleClickOutside)
         }
     }, [showTable])
    const onSelectOthers = (index: number) => {
        setProgress(prev => {
            return {
                ...prev,
                manPower: {
                    money: prev?.manPower?.money + (index ? -1 : -3),
                    people: prev?.manPower?.people + (index ? -1 : -3),
                    army: prev?.manPower?.army + (index ? -1 : -3)
                }
            }
        })
         setFeedBack({
             army: `army_decreaseXX${index ? "1" : "3"}`,
             people: `people_decreaseXX${index ? "1" : "3"}`,
             money: `money_decreaseXX${index ? "1" : "3"}`,
             info: "selectingOption",
         })
        setFlow(VALORIA_ROAD_ENUM.ENTERED)
    }
    const onSelectRightChoice = () => {
        setFlow(VALORIA_ROAD_ENUM.ENTERED)
    }


            console.log("modalData?.desc[2]?",modalData?.desc[2])
       
    return (
        <>
            <ModalWrapper
                parentClass="!w-full !justify-center "
                classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !relative px-20 !gap-4 xl:px-[80px]"
            >
                <div className="relative flex w-full items-center gap-2">
                    <p
                        className={`font-trajan w-full max-w-[98%] text-center text-xl font-bold ${step == 0 ? "xl:text-xl" : "xl:text-3xl"}`}
                    >
                        {step == 0
                            ? i18n?.language == "ar"
                                ? '"ليس من السهل التغلب على هذه المشكلة، اختر الخيار الأمثل باستخدام شجرة القرارات والجدول المُعطى."'
                                : "It’s not easy to conquer, choose the best option using the decision tree and given table."
                            : t("chooseBest")}
                    </p>
                    {step != 0 ? (
                        <img
                            src={infff}
                            onClick={() => {
                                setShowTable(true)
                            }}
                            width={40}
                            height={40}
                            className="absolute end-0 cursor-pointer"
                        />
                    ) : null}
                </div>
                {step == 0 ? (
                    <>
                        <div className="flex w-full flex-col items-center gap-2">
                            <div
                                className={`flex flex-col ${i18n?.language == "ar" ? "items-end" : "items-start"} gap-1`}
                            >
                                {modalData.desc?.map(item => (
                                    <p className="text-sm">
                                        {i18n?.language == "en" ? "●" : ""} {t(item)}{" "}
                                        {i18n?.language == "ar" ? "●" : ""}
                                    </p>
                                ))}
                            </div>
                            <div className="flex w-full justify-center">
                                <Zoom>
                                    <img src={table} className="h-[330px] w-[550px]" />
                                </Zoom>
                            </div>
                            <p className="w-full text-center text-lg">
                                {t("tablee")}
                                <a
                                    target="_blank"
                                    href={"https://www.youtube.com/watch?v=ydvnVw80I_8"}
                                    className="mx-1 cursor-pointer"
                                >
                                    {t("linkk")}
                                </a>
                            </p>
                            <div className="flex w-full justify-center pt-5">
                                <BorderButton
                                    onClick={() => {
                                        setStep(1)
                                    }}
                                    size="xs"
                                    text={t("next_button")}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex w-full flex-col items-center justify-center gap-9">
                        <ButtonDescription
                            icon={modalData.actionIcon}
                            onClick={() => {
                                onSelectOthers(0)
                            }}
                            text={modalData.actionText}
                            isSelected={false}
                            description={t(modalData?.desc[0])?.split("(")?.[1]?.replace(")", "")}
                        />

                        <ButtonDescription
                            description={t(modalData?.desc[1])?.split("(")?.[1]?.replace(")", "")}
                            isSelected={false}
                            icon={modalData.alternativeButtonIcon}
                            onClick={() => {
                                onSelectOthers(1)
                            }}
                            text={modalData.alternativeButtonText}
                        />
                        {selectedBefore?.length == 2 ? null : (
                            <ButtonDescription
                                description={t(
                                    t(modalData?.desc[2])?.split("(")?.[1]?.replace(")", "")
                                )}
                                icon={modalData.alternateSecondButtonIcon}
                                isSelected={false}
                                onClick={onSelectRightChoice}
                                text={modalData.alternateSecondButtonText}
                            />
                        )}
                    </div>
                )}
            </ModalWrapper>
            {showTable ? (
                <div className="absolute z-[10000] flex h-screen w-screen items-center justify-center bg-black/50">
                    <div ref={mapRef}>
                        <Zoom
                            zoomMargin={40} // optional: spacing around zoomed image
                            classDialog="z-[9999]" // ensure above your modal/backdrop
                        >
                            <img
                                src={table}
                                alt="Decision matrix"
                                className="max-h-[600px] cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                </div>
            ) : null}
        </>
    )
}

type propTypes = {
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
    setSelectedWay: React.Dispatch<React.SetStateAction<VALORIA_ROAD_METHOD_ENUM | null>>
    selectedWay: VALORIA_ROAD_METHOD_ENUM | null
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
    setFlow: React.Dispatch<React.SetStateAction<VALORIA_ROAD_ENUM | undefined>>
    selectedBefore: VALORIA_ROAD_METHOD_ENUM[]
    setSelectedBefore: React.Dispatch<React.SetStateAction<VALORIA_ROAD_METHOD_ENUM[]>>
    setFeedBack: React.Dispatch<React.SetStateAction<FeedbackType>>
}