
import { useEffect, useState } from "react";
import type { LeaderType } from "../../../types/leaders"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import type { ManPower } from "../../../types/manPower"
import TryAgainModal from "../../shared/tryAgainModal"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import seeme from "../../../assets/seeme.png"
import alliez from "../../../assets/alliez.png"
import deadBody from "../../../assets/deadBody.png"
import { ButtonDescription } from "../../buttonDescription"

import MissionLeaders from "./missionLeaders"
import Powers from "./powers";
export default function Attacked({ selectedLeaders, changePowers, changeFlowState, setFeedBack }: propTypes) {
    const [powerModal, setPowerModal] = useState(false)
    const [tryAgain, setTryAgain] = useState(false)
    const [selectedLeadersJobs, setSelectedLeadersJobs] = useState<LeaderType[]>([])
    const [doneJobs, setDoneJobs] = useState<number[]>([])
    const [selectedJobIndex, setSelectedJobIndex] = useState(-1)
    const { t } = useTranslation()
    // const notify = () =>
    //     toast(t("please_Select_leader_Jobs"), {
    //         progress: 0,
    //         theme: "dark",
    //         autoClose: 1500,
    //         position: "top-center"
    //     })

    useEffect(() => {
        if (doneJobs?.length == 3)
            setTimeout(() => {
                changeFlowState(FLOW_ENUM.CANNON_ATTACK)
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
                        {t("attacked_building")}
                    </p>
                    <p className="font-trajan w-full text-center font-bold xl:text-base">
                        {t("attacked_building1")}
                    </p>
                    <div className="flex w-full flex-col items-center justify-center gap-6">
                        <ButtonDescription
                            description={`No retreat, no hesitation. We push forward, even if it costs us.`}
                            description2={`The warriors to apply this tactic are brave & highly skilled yet low-commitment warriors who possess the expertise to fight but need a leader who can ignite their commitment.`}
                            icon={deadBody}
                            onClick={() => {
                                // setSelectedSubLeaders(null)
                                // changeFlowState(FLOW_ENUM.OVER_MY_DEAD_BODY)
                                setSelectedJobIndex(0)
                            }}
                            text={t("dead_body")}
                            small
                            isSelected={false}
                            isDone={doneJobs?.includes(0)}
                        />

                        <ButtonDescription
                            description={`Let them see what I want them to see. Confuse the enemy, control the battlefield.`}
                            description2={`These warriors are loyal and eager, yet in need of coaching and tactical guidance.`}
                            icon={seeme}
                            onClick={() => {
                                // setSelectedSubLeaders(null)
                                // changeFlowState(FLOW_ENUM.SEE_ME)
                                setSelectedJobIndex(1)
                            }}
                            text={t("see_me")}
                            small
                            isSelected={false}
                            isDone={doneJobs?.includes(1)}
                        />
                        <ButtonDescription
                            description={`We don’t have time. Half the resources, double the speed — get it done.`}
                            description2={`Builders require direct, authoritative command to succeed`}
                            icon={alliez}
                            onClick={() => {
                                setSelectedJobIndex(2)

                                // changePowers({ money: -7, army: -7, people: -1 })
                                // setSelectedSubLeaders(null)
                                // changeFlowState(FLOW_ENUM.CANNON_ATTACK)
                            }}
                            text={t("allez")}
                            isDone={doneJobs?.includes(2)}
                            small
                            isSelected={false}
                        />
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
                    setFeedBack={setFeedBack}
                    changePowers={changePowers}
                    icon={selectedJobIndex == 0 ? deadBody : selectedJobIndex == 1 ? seeme : alliez}
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
    setFeedBack: React.Dispatch<
        React.SetStateAction<{
            people: string | null
            army: string | null
            money: string | null
            info: string | null
        }>
    >
}

