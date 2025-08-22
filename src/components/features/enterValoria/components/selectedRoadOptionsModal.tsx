import { useMemo, useState } from "react";
import { ModalWrapper } from "./modalWrapper"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import type { UserProgressType } from "../../../../types/UserProgress"
import type { LeaderType } from "../../../../types/leaders"
import changePlan from "../../../../assets/icons/changePlan.png"
import gates_test from "../../../../assets/icons/tesst.png"
import keep_gates from "../../../../assets/icons/attack.png"
import burnWood from "../../../../assets/icons/forest/burnWood.png"
import ground from "../../../../assets/icons/forest/ground.png"
import table from "../../../../assets/scrren2.png"
import send_spy from "../../../../assets/icons/forest/send_spy.png"
import { useTranslation } from "react-i18next";
import { ButtonDescription } from "../../../buttonDescription";
import BorderButton from "../../../shared/borderButton";
export const SelectedRoadOptions = ({
    setProgress,
    selectedWay,
     setFlow,
    selectedBefore,
}: propTypes) => {
    const { t } = useTranslation()
    const [step,setStep]=useState(0)
    const modalData = useMemo(() => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST)
            return {
                actionIcon: burnWood,
                alternativeButtonIcon: send_spy,
                actionText: "Keep attacking through forest",
                alternativeButtonText: "Burn them all",
                alternateSecondButtonText: `Send Spy`,
                alternateSecondButtonIcon: changePlan
            }
        else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES)
            return {
                head: t("not_easy_to_attack"),
                actionText: "Keep fighting",
                alternativeButtonText: "Sieging the city",
                alternateSecondButtonText: `Send Spy`,
                actionIcon: keep_gates,
                alternativeButtonIcon: gates_test,
                alternateSecondButtonIcon: changePlan,



            }
             
        else
             return {
                 head: t("traps_hidden_river"),
                 actionIcon: ground,
                 alternativeButtonIcon: gates_test,
                 actionText: "Send Spy",
                 alternativeButtonText: "Keep attacking through the river",
                 alternateSecondButtonText: `Get out of the river & fight`,
                 alternateSecondButtonIcon: changePlan
             }
    }, [selectedWay])
    
    // const onChangePlan = () => {
    //     setProgress(prev => {
    //         return {
    //             ...prev,
    //             manPower: {
    //                 army: prev?.manPower?.army - 6,
    //                 people: prev?.manPower?.people - 6,
    //                 money: prev?.manPower?.money - 3
    //             }
    //         }
    //     })
    //     setSelectedBefore(prev => [...prev, selectedWay as VALORIA_ROAD_METHOD_ENUM])
    //     setSelectedSubLeaders([])
    //     setSelectedWay(null)
    //     setFlow(VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA)
    // }

    // const onAttackOrSendSpy = (attack = false) => {
    //     if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST) {
    //         setProgress(prev => {
    //             return {
    //                 ...prev,
    //                 manPower: {
    //                     money: prev?.manPower?.money + (attack ? -5 : -8),
    //                     people: prev?.manPower?.people + (attack ? 1 : -4),
    //                     army: prev?.manPower?.army + (attack ? -6 : -3)
    //                 },
    //                 currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA_INTRO
    //             }
    //         })
    //     } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES) {
    //         setProgress(prev => {
    //             return {
    //                 ...prev,
    //                 manPower: {
    //                     money: prev?.manPower?.money + (attack ? -7 : -8),
    //                     people: prev?.manPower?.people + (attack ? 1 : -4),
    //                     army: prev?.manPower?.army + (attack ? -10 : -5)
    //                 },
    //                 currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA_INTRO
    //             }
    //         })
    //     } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER) {
    //         setProgress(prev => {
    //             return {
    //                 ...prev,
    //                 manPower: {
    //                     money: prev?.manPower?.money + (attack ? -6 : -8),
    //                     people: prev?.manPower?.people + (attack ? 1 : -4),
    //                     army: prev?.manPower?.army + (attack ? -9 : -3)
    //                 },
    //                 currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA_INTRO
    //             }
    //         })
    //     }
    // }


    const onSelectOthers = (index:number) => {
         setProgress(prev => {
             return {
                 ...prev,
                 manPower: {
                     money: prev?.manPower?.money + (index ? -1 : -3),
                     people: prev?.manPower?.people + (index ? -1 : -3),
                     army: prev?.manPower?.army + (index ? -1 : -3)
                 },
             }
         })
    setFlow(VALORIA_ROAD_ENUM.ENTERED)

    
    }
    const onSelectRightChoice = () => {
        setFlow(VALORIA_ROAD_ENUM.ENTERED)
    }
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !relative px-20 xl:px-[80px]"
        >
            <p className="font-trajan w-full max-w-[80%] text-center text-2xl font-bold xl:text-[30px]">
                {modalData?.head}
            </p>
            {step == 0 ? (
                <>
                    <img src={table} />
                    <BorderButton
                        onClick={() => {
                            setStep(1)
                        }}
                        size="sm"
                        text="NEXT"
                    />
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
                        description={""}
                    />

                    <ButtonDescription
                        description={""}
                        isSelected={false}
                        icon={modalData.alternativeButtonIcon}
                        onClick={() => {
                            onSelectOthers(1)
                        }}
                        text={modalData.alternativeButtonText}
                    />
                    {selectedBefore?.length == 2 ? null : (
                        <ButtonDescription
                            description=""
                            icon={modalData.alternateSecondButtonIcon}
                            isSelected={false}
                            onClick={onSelectRightChoice}
                            text={modalData.alternateSecondButtonText}
                        />
                    )}
                </div>
            )}
        </ModalWrapper>
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
}