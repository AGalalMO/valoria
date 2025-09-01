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
import table from "../../../../assets/table2.png"
import send_spy from "../../../../assets/icons/forest/send_spy.png"
import { useTranslation } from "react-i18next";
import { ButtonDescription } from "../../../buttonDescription";
import BorderButton from "../../../shared/borderButton";
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
export const SelectedRoadOptions = ({
    setProgress,
    selectedWay,
    setFlow,
    selectedBefore,
    setFeedBack
}: propTypes) => {
    const { t } = useTranslation()
    const [step, setStep] = useState(0)
    const modalData = useMemo(() => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST)
            return {
                head: t("traps_hidden"),
                actionIcon: burnWood,
                alternativeButtonIcon: send_spy,
                actionText: t("keep_attacking_forest"),
                alternativeButtonText: t("burn_them_all"),
                alternateSecondButtonText: t("send_spy_option"),
                alternateSecondButtonIcon: changePlan
            }
        else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES)
            return {
                head: t("not_easy_to_attack"),
                actionText: t("keep_fighting"),
                alternativeButtonText: t("sieging_city"),
                alternateSecondButtonText: t("send_spy_option"),
                actionIcon: keep_gates,
                alternativeButtonIcon: gates_test,
                alternateSecondButtonIcon: changePlan
            }
        else
            return {
                head: t("traps_hidden_river"),
                actionIcon: ground,
                alternativeButtonIcon: gates_test,
                actionText: t("send_spy_option"),
                alternativeButtonText: t("keep_attacking_river"),
                alternateSecondButtonText: t("get_out_river_fight"),
                alternateSecondButtonIcon: changePlan
            }
    }, [selectedWay])

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
             info: "dueTo"
         })
        setFlow(VALORIA_ROAD_ENUM.ENTERED)
    }
    const onSelectRightChoice = () => {
        setFlow(VALORIA_ROAD_ENUM.ENTERED)
    }
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !relative px-20 !gap-4 xl:px-[80px]"
        >
            <p className="font-trajan w-full max-w-[80%] text-center text-2xl font-bold xl:text-[30px]">
                {modalData?.head}
            </p>
            {step == 0 ? (
                <>
                    <Zoom>
                        <img src={table} />
                    </Zoom>
                    <BorderButton
                        onClick={() => {
                            setStep(1)
                        }}
                        size="sm"
                        text={t("next_button")}
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
    setFeedBack: React.Dispatch<
        React.SetStateAction<{
            people: string | null
            army: string | null
            money: string | null
            info: string | null
        }>
    >
}