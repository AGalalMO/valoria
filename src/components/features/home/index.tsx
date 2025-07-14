import { useEffect, useState } from "react"
import BorderButton from "../../shared/borderButton"
import UserPowers from "../../shared/userPowers"
import Modal from "../../shared/modal"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { InteractiveMap } from "../interactiveMap"
import type { UserProgressType } from "../../../types/UserProgress"
import { EnterValoriaFlow } from "../enterValoria"
import type { LeaderType } from "../../../types/leaders"
import { SolveLeadersConflict } from "../enterValoria/components/solveLeadersConflict"
import { SelectValoriaWayIn } from "../enterValoria/selectValoriaWayIn"
import InValoriaMap from "../inValoriaMap"
import { SelectSuitableLeaderToBuildBridge } from "../enterValoria/components/SelectSuitableLeaderToBuildBridge"
import type { ManPower } from "../../../types/manPower"
import FireCannon from "../cannon"
import HowToPass from "../bridgeProblem/howToPass"
import RaceTimeFailed from "../bridgeProblem/raceTimeFailed"
import IsTrustEngineer from "../bridgeProblem/isTrustEngineer"
import EngineersFailed from "../bridgeProblem/engineersFailed"
import Attacked from "../bridgeProblem/attacked"
import CannonAttack from "../cannon/components/attackedByCannon"
import ControlValoria from "../controlValoria"
import { useTranslation } from "react-i18next"
import TheEnd from "../theEnd"
export default function Home() {

    const [loading, setLoading] = useState(true)
    const [selectedLeaders, setSelectedLeaders] = useState<LeaderType[]>([])
    const [selectedSubLeaders, setSelectedSubLeaders] = useState<LeaderType | null>(null)
           const { t } = useTranslation()

    const [progress, setProgress] = useState<UserProgressType>({
        currentFlow: FLOW_ENUM.START_GAME,
        selectedWayIn: null,
        manPower: { army: 90, money: 90, people: 90 }
    })

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const changeFlowState = (flow:FLOW_ENUM) => {
        setProgress((prev)=>({...prev,currentFlow:flow}))
    }

    const ChooseSubLeader = () => {
        if (progress.currentFlow == FLOW_ENUM.BUILD_ANOTHER_BRIDGE) {
            if (selectedSubLeaders?.name == "AWS") changePowers({ money: -1, army: -2, people: 1 })
            else changePowers({ money: -4, army: -4, people: -2 })

            changeFlowState(FLOW_ENUM.GOT_ATTACKED)
        } else if (progress.currentFlow == FLOW_ENUM.RACE_FOR_TIME)
        {
            if (selectedSubLeaders?.name == "DRAR") changePowers({ money: -1, army: 1, people: 1 })
            else changePowers({ money: -3, army: -2, people: -2 })
            changeFlowState(FLOW_ENUM.RACE_FOR_TIME_FAILED)
        } else if (progress.currentFlow == FLOW_ENUM.SEE_ME) {
            if (selectedSubLeaders?.name == "SLAM") changePowers({ money: -3, army: -3, people: 2 })
            else changePowers({ money: -4, army: -5, people: -1 })
             setSelectedSubLeaders(null)
            changeFlowState(FLOW_ENUM.CANNON_ATTACK)
        } else if (progress.currentFlow == FLOW_ENUM.OVER_MY_DEAD_BODY) {
            if (selectedSubLeaders?.name == "SABET")
                changePowers({ money: -4, army: -5, people: 1 })
            else changePowers({ money: -6, army: -7, people: -2 })
             setSelectedSubLeaders(null)
            changeFlowState(FLOW_ENUM.CANNON_ATTACK)
        } else if (progress.currentFlow == FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON) {
            if (selectedSubLeaders?.name == "AWS") changePowers({ money: -1, army: 0, people: 2 })
            else changePowers({ money: -3, army: -2, people: -2 })
            changeFlowState(FLOW_ENUM.FIRE_CANNON)
        }
        
       

    }
    
    const changePowers = (powers: ManPower) => {
        setProgress((prev) => {
            return {
                ...prev,
                manPower: {
                    army: prev?.manPower?.army + powers.army,
                    people: prev?.manPower?.people + powers.people,
                    money: prev?.manPower?.money + powers.money
                }
            }
        })
    }

 
    
    return (
        <div className="relative flex h-screen w-screen flex-col justify-between">
            {!loading && progress.currentFlow != FLOW_ENUM.FINISH ? (
                <div className="flex w-full justify-end p-10">
                    <UserPowers isTheEnd={false} powers={progress.manPower} />
                </div>
            ) : null}
            {!loading ? (
                progress.currentFlow == FLOW_ENUM.START_GAME ? (
                    <div className="mb-12 flex w-full justify-center">
                        <BorderButton
                            text={t("start_game")}
                            onClick={() => {
                                setProgress(prev => ({
                                    ...prev,
                                    currentFlow: FLOW_ENUM.SELECT_WAY_IN
                                }))
                            }}
                        />
                    </div>
                ) : progress.currentFlow == FLOW_ENUM.SELECT_WAY_IN ? (
                    <SelectValoriaWayIn progress={progress} setProgress={setProgress} />
                ) : progress.currentFlow == FLOW_ENUM.SELECT_ROAD ||
                  progress.currentFlow == FLOW_ENUM.CHANGE_ROAD ? (
                    <Modal noBackground>
                        <InteractiveMap
                            selectedWayIn={progress.selectedWayIn}
                            setProgress={setProgress}
                        />
                    </Modal>
                ) : progress.currentFlow == FLOW_ENUM.SHOW_VALORIA_MAP ||
                  progress.currentFlow == FLOW_ENUM.SELECT_ROAD_TO_VALORILA ||
                  progress.currentFlow == FLOW_ENUM.CHOOSE_FIVE_LEADERS ? (
                    <EnterValoriaFlow
                        currentFlow={progress.currentFlow}
                        setProgress={setProgress}
                        selectedLeaders={selectedLeaders}
                        setSelectedLeaders={setSelectedLeaders}
                    />
                ) : progress.currentFlow == FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA ? (
                    <SolveLeadersConflict setProgress={setProgress} />
                ) : progress.currentFlow === FLOW_ENUM.NOW_WE_ARE_IN_VALORIA ? (
                    <InValoriaMap changeState={changeFlowState} />
                ) : progress.currentFlow === FLOW_ENUM.HOW_TO_PASS_BRIDGE ? (
                    <HowToPass
                        changeFlowState={changeFlowState}
                        setSelectedSubLeaders={setSelectedSubLeaders}
                    />
                ) : progress.currentFlow == FLOW_ENUM.BUILD_ANOTHER_BRIDGE ||
                  progress.currentFlow == FLOW_ENUM.RACE_FOR_TIME ||
                  progress.currentFlow == FLOW_ENUM.OVER_MY_DEAD_BODY ||
                  progress.currentFlow == FLOW_ENUM.SEE_ME ||
                  progress.currentFlow == FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON ? (
                    <SelectSuitableLeaderToBuildBridge
                        selectedLeaders={selectedLeaders}
                        selectedOption={progress.currentFlow}
                        selectedSubLeaders={selectedSubLeaders}
                        setSelectedSubLeaders={setSelectedSubLeaders}
                        onClick={ChooseSubLeader}
                    />
                ) : progress.currentFlow == FLOW_ENUM.RACE_FOR_TIME_FAILED ? (
                    <RaceTimeFailed
                        changeFlowState={changeFlowState}
                        changePowers={changePowers}
                        setSelectedSubLeaders={setSelectedSubLeaders}
                    />
                ) : progress.currentFlow == FLOW_ENUM.IS_TRUST_ENGINEERS ? (
                    <IsTrustEngineer changeFlowState={changeFlowState} />
                ) : progress.currentFlow == FLOW_ENUM.ENGINEERS_FAILED ? (
                    <EngineersFailed
                        changeFlowState={changeFlowState}
                        changePowers={changePowers}
                    />
                ) : progress?.currentFlow == FLOW_ENUM.GOT_ATTACKED ? (
                    <Attacked
                        changeFlowState={changeFlowState}
                        changePowers={changePowers}
                        setSelectedSubLeaders={setSelectedSubLeaders}
                    />
                ) : progress?.currentFlow == FLOW_ENUM.CANNON_ATTACK ? (
                    <CannonAttack changeFlowState={changeFlowState} />
                ) : progress?.currentFlow == FLOW_ENUM.FIRE_CANNON ? (
                    <FireCannon changePowers={changePowers} changeFlowState={changeFlowState} />
                ) : progress?.currentFlow == FLOW_ENUM.CONTROL_VALORIA ? (
                    <ControlValoria
                        changeFlowState={changeFlowState}
                        selectedLeaders={selectedLeaders}
                        changePowers={changePowers}
                    />
                ) : progress?.currentFlow == FLOW_ENUM.FINISH ? (
                 <TheEnd progress={progress}/>
                ) : null
            ) : null}
        </div>
    )
}
