import type { LeaderType } from "../../../types/leaders"
import bg from "../../../assets/backgrounds/modal.png"
import closeModalIcon from "../../../assets/closeModal.png"
import { useTranslation } from "react-i18next"
import { useState } from "react";
import BorderButton from "../../shared/borderButton"
import type { FeedbackType, ManPower } from "../../../types/manPower"
import infoIcon from "../../../assets/info.png"

import TryAgainModal from "../../shared/tryAgainModal"
import { ButtonDescription } from "../../buttonDescription"
import { Tooltip as ReactTooltip } from "react-tooltip"

export default function MissionLeaders({
    leaders,
    icon,
    closeModal,
    openLeaderPowers,
    selectedLeadersJobs,
    changePowers,
    selectedJobIndex,
    onSelectLeader,
    setFeedBack
}: {
    leaders: LeaderType[]
    closeModal: VoidFunction
    openLeaderPowers: VoidFunction
    icon?: string
    selectedLeadersJobs: LeaderType[]
    changePowers: (powers: ManPower) => void
    selectedJobIndex: number
    onSelectLeader: (leader: LeaderType) => void
    setFeedBack: React.Dispatch<React.SetStateAction<FeedbackType>>
}) {
    const { t, i18n } = useTranslation()
    const [selectedLeader, setSelectedLeader] = useState<LeaderType | null>(null)
    const [wrongAnswers, setWrongAnswers] = useState<LeaderType[]>([])
    const [tryAgain, setTryAgain] = useState(false)
    const onSelect = () => {
        if (selectedJobIndex == 0 && selectedLeader?.name == "DRAR") {
            onSelectLeader(selectedLeader)
        } else if (selectedJobIndex == 1 && selectedLeader?.name == "SABET") {
            onSelectLeader(selectedLeader)
        } else if (selectedJobIndex == 2 && selectedLeader?.name == "SLAM") {
            onSelectLeader(selectedLeader)
        } else if (selectedJobIndex == 3 && selectedLeader?.name == "BEHER") {
            onSelectLeader(selectedLeader)
        } else if (selectedJobIndex == 4 && selectedLeader?.name == "AWS") {
            onSelectLeader(selectedLeader)
        } else {
            setWrongAnswers(prev => [...prev, selectedLeader as LeaderType])
            setSelectedLeader(null)
            changePowers({ army: -1, money: -1, people: -1 })
            setFeedBack({
                army: `army_decreaseXX1`,
                people: `people_decreaseXX1`,
                money: `money_decreaseXX1`,
                info: "wrongLeader"
            })
            setTryAgain(true)
        }
    }
    return (
        <div
            className="absolute start-5 top-5 z-50 flex h-[90%] w-[90%] flex-col justify-center overflow-x-hidden overflow-y-auto border-5 border-[#DC8E2F] p-4 py-5 xl:py-10"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center"
            }}
        >
            {tryAgain ? (
                <TryAgainModal
                    buttonText={t("chooseLeader")}
                    closeModal={() => {
                        setTryAgain(false)
                    }}
                    headerText1={t("wrong_selection")}
                    headerText2={t("try_again")}
                />
            ) : (
                <>
                    <div
                        className="relative -me-6 -mt-6 flex justify-end md:!mt-0 xl:!-mt-12"
                        dir={i18n?.language == "ar" ? "rtl" : "ltr"}
                    >
                        <img
                            src={closeModalIcon}
                            height={50}
                            width={50}
                            className="cursor-pointer"
                            onClick={closeModal}
                        />
                    </div>
                    <div className="flex h-full flex-col justify-between">
                        <div>
                            <div
                                className="flex flex-col gap-3"
                                dir={i18n?.language == "ar" ? "rtl" : "ltr"}
                            >
                                <div className="flex w-full items-center justify-end">
                                    <BorderButton
                                        text={t("showJobs")}
                                        onClick={openLeaderPowers}
                                        bottomBorder={false}
                                        size="xxs"
                                    />
                                </div>
                                <div className="flex w-full justify-end">
                                    <img
                                        src={infoIcon}
                                        className="cursor-pointer"
                                        width={32}
                                        height={32}
                                        data-tooltip-id="my-tooltip-xx"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-3">
                                    {icon ? <img src={icon} width={100} height={100} /> : null}

                                    <p className="my-3 text-center text-lg font-bold text-white xl:text-xl">
                                        {t("chooseLeader")}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap justify-center gap-2">
                                {leaders?.map(item => {
                                    if (selectedLeadersJobs?.includes(item)) return
                                    return (
                                        <div className="w-[45%] lg:!w-[32%]">
                                            <ButtonDescription
                                                icon={item?.icon}
                                                small
                                                isWrong={wrongAnswers?.includes(item)}
                                                onClick={() => {
                                                    setSelectedLeader(item)
                                                }}
                                                isSelected={selectedLeader == item}
                                                text={t(item?.name)}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="mt-5 flex w-full justify-center">
                            <BorderButton onClick={onSelect} text={t("select")} size="sm" />
                        </div>
                    </div>
                </>
            )}
            <ReactTooltip
                id="my-tooltip-xx"
                place="bottom-end"
                variant="dark"
                content={t("referTo")}
            />
        </div>
    )
}
