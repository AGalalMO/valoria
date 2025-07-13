import { useMemo } from "react";
import { ModalWrapper } from "./modalWrapper"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import type { UserProgressType } from "../../../../types/UserProgress"
import type { LeaderType } from "../../../../types/leaders"
import { FLOW_ENUM } from "../../../../types/FLowEnum"
import changePlan from "../../../../assets/icons/gates/changePlan.png"
import gates_test from "../../../../assets/icons/gates/gates_test.png"
import keep_gates from "../../../../assets/icons/gates/keep_gates.png"
import burnWood from "../../../../assets/icons/forest/burnWood.png"
import send_spy from "../../../../assets/icons/forest/send_spy.png"
import riverAttack from "../../../../assets/icons/river/riverAttack.png"
import ImageButton from "../../../shared/imageButton"
import { useTranslation } from "react-i18next";

export const SelectedRoadOptions = ({
    setProgress,
    selectedWay,
    setSelectedWay,
    setSelectedSubLeaders,
    setFlow,
    selectedBefore,
    setSelectedBefore
}: propTypes) => {
const {t}=useTranslation()
    const modalData = useMemo(() => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST)
            return {
                head: t("traps_hidden"),
                actionIcon: burnWood,
                actionText: t("burn_wood"),
                alternativeButtonIcon: send_spy,
                alternativeButtonText: t("cap_traps")
            }
        else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES)
            return {
                head: t("not_easy_to_attack"),
                actionIcon: keep_gates,
                actionText: t("keep_attacking"),
                alternativeButtonIcon: gates_test,
                alternativeButtonText: t("text_durability")
            }
             
        else
             return {
                 head: t("traps_hidden_river"),
                 actionIcon: riverAttack,
                 actionText: t("attack_on_ground"),
                 alternativeButtonIcon: gates_test,
                 alternativeButtonText: t("cap_traps")
             }
    }, [selectedWay])
    
    const onChangePlan = () => {
        setProgress(prev => {
            return {
                ...prev,
                manPower: {
                    army: prev?.manPower?.army - 6,
                    people: prev?.manPower?.people - 6,
                    money: prev?.manPower?.money - 3
                }
            }
        })
        setSelectedBefore(prev => [...prev, selectedWay as VALORIA_ROAD_METHOD_ENUM])
        setSelectedSubLeaders([])
        setSelectedWay(null)
        setFlow(VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA)
    }

    const onAttackOrSendSpy = (attack = false) => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money + (attack ? -5 : -8),
                        people: prev?.manPower?.people + (attack ? 1 : -4),
                        army: prev?.manPower?.army + (attack ? -6 : -3)
                    },
                    currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA
                }
            })
        } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money + (attack ? -7 : -8),
                        people: prev?.manPower?.people + (attack ? 1 : -4),
                        army: prev?.manPower?.army + (attack ? -10 : -5)
                    },
                    currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA
                }
            })
        } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money + (attack ? -6 : -8),
                        people: prev?.manPower?.people + (attack ? 1 : -4),
                        army: prev?.manPower?.army + (attack ? -9 : -3)
                    },
                    currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA
                }
            })
        }
    }



    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !relative px-20 lg:px-[80px]"
        >
            <p className="font-trajan w-full max-w-[80%] text-center text-2xl font-bold lg:text-[30px]">
                {modalData?.head}
            </p>
            <div className="flex w-full items-center justify-center gap-9">
                {selectedBefore?.length == 2 ? null : (
                    <ImageButton
                        size={"normal"}
                        icon={changePlan}
                        onClick={onChangePlan}
                        text={t("change_plan")}
                    />
                )}

                <ImageButton
                    size={"normal"}
                    icon={modalData.actionIcon}
                    onClick={() => onAttackOrSendSpy(true)}
                    text={modalData.actionText}
                />
                <ImageButton
                    size={"lg"}
                    icon={modalData.alternativeButtonIcon}
                    onClick={onAttackOrSendSpy}
                    text={modalData.alternativeButtonText}
                />
            </div>
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