import { useMemo, useState } from "react";
import type { LeaderType } from "../../../types/leaders"
import BorderButton from "../../shared/borderButton"
import ImageButtonDoubleAuctions from "../../shared/imageButton/doubleActions"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import LeaderPowers from "./LeaderPowers"
import LeaderJobs from "./leaderJobs"
import { RightLeaders } from "../enterValoria/leaderData"
import type { ManPower } from "../../../types/manPower"
import TryAgainModal from "../../shared/tryAgainModal"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next";

export default function ControlValoria({
    selectedLeaders,
    changePowers,
    changeFlowState
}: propTypes) {
    const [powerModal,setPowerModal]=useState<LeaderType|null>(null)
    const [jobModal, setJobModal] = useState<LeaderType | null>(null)
    const [tryAgain, setTryAgain] = useState(false)
    const [selectedJobs, setSelectedJobs] = useState<SelectedJobsType[]>([])
    const { t } = useTranslation()

const leaders = useMemo(() => {
    const newLeaders: LeaderType[] = []
    
    const jobs: SelectedJobsType[] = []
    selectedLeaders?.map((item) => {
            if (RightLeaders?.includes(item?.name))
            {
                newLeaders.push(item)
                jobs?.push({ index: null, leader: item })
            }
          
    })
    setSelectedJobs(jobs )
        return newLeaders
}, [])


    const controlValoria = () => {
        let rightCount = 0;
        const isNotCompleted = selectedJobs?.filter((item) => item?.index == null)?.[0]
        if (isNotCompleted)
            return;
      
          selectedJobs?.map((item) => {
                if (item?.leader?.rightJobIndex == item.index)
                   { rightCount=rightCount+1}
            })
            if (rightCount == selectedJobs?.length)
            {
               
                const minusPower = 5 - rightCount
                const powers = {
                    army:( -2 * minusPower)+2,
                    people:( -3 * minusPower)+2,
                    money: (-2 * minusPower)+2
                }
                changePowers(powers)
                changeFlowState(FLOW_ENUM.FINISH)
             }
            else
            {
                changePowers({ army: -4, money: -4, people: -4 })
                setTryAgain(true)
                }

    }
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
                    <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
                        {t("finally_we_entered_valoria")}
                    </p>
                    <div className="mb-5 flex flex-wrap justify-center gap-x-8 gap-y-8">
                        {leaders?.map(item => {
                            return (
                                <>
                                    <ImageButtonDoubleAuctions
                                        icon={item?.icon}
                                        onClickButton={() => {
                                            setJobModal(item)
                                        }}
                                        onClickImage={() => {
                                            setPowerModal(item)
                                        }}
                                        text={t(item?.name)}
                                    />
                                </>
                            )
                        })}
                    </div>
                    <BorderButton size="sm" onClick={controlValoria} text={t("control_valoria")} />
                </>
            )}
            {powerModal ? (
                <LeaderPowers
                    closeModal={() => {
                        setPowerModal(null)
                    }}
                    leader={powerModal}
                    key={`leaderModal ${powerModal?.name}`}
                />
            ) : null}
            {jobModal ? (
                <LeaderJobs
                    selectJob={index => {
                        const jobs = selectedJobs
                        const leadIndex = jobs?.findIndex(
                            item => item?.leader?.name == jobModal?.name
                        )
                        jobs[leadIndex] = { ...jobs?.[leadIndex], index: index }
                        setSelectedJobs([...jobs])
                    }}
                    selectedJobs={selectedJobs}
                    closeModal={() => {
                        setJobModal(null)
                    }}
                    leader={jobModal}
                    key={`leaderModal ${jobModal?.name}`}
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


type SelectedJobsType =
    { index: number | null; leader: LeaderType }