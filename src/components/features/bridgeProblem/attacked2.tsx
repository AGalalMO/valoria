
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
export default function AttackedSECOND({
    selectedLeaders,
    changePowers,
    changeFlowState,
    setFeedBack
}: propTypes) {
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

                    <div className="flex w-full flex-col items-center justify-center gap-6">
                        <ButtonDescription
                            description={t("dead_body_description")}
                            description2={t("dead_body_description2")}
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
                            description={t("see_me_description")}
                            description2={t("see_me_description2")}
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
                            description={t("allez_description")}
                            description2={t("allez_description2")}
                            icon={alliez}
                            onClick={() => {
                                setSelectedJobIndex(2)
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
                    title={
                        selectedJobIndex == 0
                            ? t("dead_body")
                            : selectedJobIndex == 1
                              ? t("see_me")
                              : t("allez")
                    }
                    changePowers={changePowers}
                    setFeedBack={setFeedBack}
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

