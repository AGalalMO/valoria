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
import valoriaMap from '../../../assets/valoriaMap.png'
import spyy from "../../../assets/spyy.png"
import framText from "../../../assets/framText.png"
export default function Home() {
    const [loading, setLoading] = useState(true)
    const [selectedLeaders, setSelectedLeaders] = useState<LeaderType[]>([])

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


    return (
        <div className="relative flex h-screen w-screen flex-col justify-between">
            {!loading ? (
                <div className="flex w-full justify-end p-10">
                    <UserPowers powers={progress.manPower} />
                </div>
            ) : null}
            {!loading ? (
                progress.currentFlow == FLOW_ENUM.START_GAME ? (
                    <div className="flex w-full justify-center">
                        <BorderButton
                            text="START GAME"
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
                    <div className="flex h-screen w-screen flex-col items-center justify-start">
                        <div className="relative h-[80%] w-[80%]">
                            <img src={valoriaMap} className="h-full w-full" />
                            <div className="absolute -bottom-10 -left-20 flex w-full items-center flex-row">
                                <img src={spyy} className="z-50" width={230} height={230} />
                                <div
                                    style={{
                                        backgroundImage: `url(${framText})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "right"
                                                        }}
                                                        className="-ms-10 h-[170px] flex flex-col justify-center"
                                >
                                    <p className="ps-20 text-[24px] font-bold text-[#DBBD51] uppercase">
                                        message from spy
                                    </p>
                                    <p className="ps-20 text-[24px] !w-[77vw] font-bold">
                                        be aware that they put a trap bombs in the bridge the bridge{" "}
                                        <br />
                                        is 500 meters away from you
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            ) : null}
        </div>
    )
}
