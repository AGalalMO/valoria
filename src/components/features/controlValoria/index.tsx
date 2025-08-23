import { useEffect, useState } from "react"
import type { LeaderType } from "../../../types/leaders"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import type { ManPower } from "../../../types/manPower"
import TryAgainModal from "../../shared/tryAgainModal"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import { ButtonDescription } from "../../buttonDescription"

import MissionLeaders from "./missionLeaders"
import Powers from "./powers"
export default function ControlValoria({ selectedLeaders, changePowers, changeFlowState }: propTypes) {
    const [powerModal, setPowerModal] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    const [selectedLeadersJobs, setSelectedLeadersJobs] = useState<LeaderType[]>([])
    const [doneJobs, setDoneJobs] = useState<number[]>([])
    const [selectedJobIndex, setSelectedJobIndex] = useState(-1)
    const { t } = useTranslation()
        const jobs = [
            t("the_warden"),
            t("the_marshal"),
            t("architect"),
            t("overseer"),
            t("commander")
        ]


    
    useEffect(() => {
        if (doneJobs?.length == 5)
            setTimeout(() => {
                changeFlowState(FLOW_ENUM.THE_END)
            }, 500)
    }, [doneJobs])
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            {tryAgain ? (
                <TryAgainModal
                    buttonText={t("control_valoria")}
                    closeModal={() => {
                        setTryAgain(false)
                    }}
                    headerText1={t("wrong_selection")}
                    headerText2={t("try_again")}
                />
            ) : (
                <>
                    <p className="font-trajan w-full text-center text-lg font-bold xl:text-2xl">
                        {t("finally_we_entered_valoria")}
                    </p>
                    <p className="font-trajan w-full text-center font-bold xl:text-base">
                        {t("finally_we_entered_valoria1")}
                    </p>
                    <div className="flex w-full flex-col  items-center justify-center gap-6">
                        {jobs?.map((item,index) => {
                            return (
                                <ButtonDescription
                                    index={(index + 1) as number}
                                    onClick={() => {
                                    
                                        setSelectedJobIndex(index)
                                    }}
                                    text={""}
                                    description={item}
                                    small
                                    isSelected={false}
                                    isDone={doneJobs?.includes(index)}
                                />
                            )
                        })}
                    </div>
                </>
            )}
            {powerModal ? (
                <Powers
                    closeModal={() => {
                        setPowerModal(false)
                    }}
                    leaders={selectedLeaders}
                />
            ) : null}
            {selectedJobIndex >= 0 ? (
                <MissionLeaders
                    selectedLeadersJobs={selectedLeadersJobs}
                    changePowers={changePowers}
                    
                    closeModal={() => {
                        setSelectedJobIndex(-1)
                    }}
                    onSelectLeader={(leader: LeaderType) => {
                        setSelectedLeadersJobs(prev => [...prev, leader])
                        setDoneJobs(prev => [...prev, selectedJobIndex])
                        setSelectedJobIndex(-1)
                    }}
                    openLeaderPowers={() => {
                        setPowerModal(true)
                    }}
                    selectedJobIndex={selectedJobIndex}
                    leaders={selectedLeaders}
                />
            ) : null}
        </ModalWrapper>
    )
}
type propTypes = {
    selectedLeaders: LeaderType[]
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
}
