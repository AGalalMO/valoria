import { useState } from "react";
import { FLOW_ENUM } from "../../../../types/FLowEnum";
import type { LeaderType } from "../../../../types/leaders"
import BorderButton from "../../../shared/borderButton"
import { ModalWrapper } from "./modalWrapper"
import LeaderPowers from "../../controlValoria/LeaderPowers";
import ImageButtonDoubleAuctions from "../../../shared/imageButton/doubleActions";
import { useTranslation } from "react-i18next";

export const SelectSuitableLeaderToBuildBridge = ({
    setSelectedSubLeaders,
    selectedLeaders,
    selectedSubLeaders,
    selectedOption,
    onClick
}: propTypes) => {
    const [powerModal, setPowerModal] = useState<LeaderType | null>(null)
    const {t}=useTranslation()
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                {selectedOption == FLOW_ENUM.BUILD_ANOTHER_BRIDGE ? (
                    <> {t("choose_leader_bridge")}</>
                ) : selectedOption == FLOW_ENUM.SEE_ME ||
                  selectedOption == FLOW_ENUM.OVER_MY_DEAD_BODY ? (
                    <>{t("choose_leader_")}</>
                ) : selectedOption == FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON ? (
                    <>{t("select_one_leader_cannon")}</>
                ) : (
                    <>{t("select_two_leader_pass_gates")}</>
                )}
            </p>
            <div className="mb-5 grid grid-cols-3 justify-items-center gap-x-2 gap-y-8 xl:!grid-cols-5 xl:gap-x-4">
                {selectedLeaders?.map(item => {
                    const isSelected = selectedSubLeaders?.name == item?.name
                    return (
                        <ImageButtonDoubleAuctions
                            icon={item?.icon}
                            selected={isSelected ? true : false}
                            onClickImage={() => {
                                setPowerModal(item)
                            }}
                            onClickButton={() => {
                              
                                if (isSelected) {
                                        setSelectedSubLeaders(null)
                                    } else {
                                        setSelectedSubLeaders(item)
                                    }
                            }}
                            text={t(item?.name)}
                        />
                    )
                })}
            </div>
            <BorderButton
                size="sm"
                onClick={() => {
                    if (!selectedSubLeaders) return
                    else onClick()

                }}
                text={
                    selectedOption == FLOW_ENUM.BUILD_ANOTHER_BRIDGE
                        ? t("build_bridge")
                        : selectedOption == FLOW_ENUM.RACE_FOR_TIME
                          ? t("race_for_time")
                          : selectedOption == FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON
                            ? t("hit_enemy")
                            : t("select_your_leader")
                }
            />
            {powerModal ? (
                <LeaderPowers
                    closeModal={() => {
                        setPowerModal(null)
                    }}
                    leader={powerModal}
                />
            ) : null}
        </ModalWrapper>
    )
}
type propTypes = {
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType|null>>
    selectedLeaders: LeaderType[]
    selectedSubLeaders: LeaderType|null
    selectedOption: FLOW_ENUM
    onClick:VoidFunction
}

