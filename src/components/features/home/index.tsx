import { useEffect, useState } from "react"
import BorderButton from "../../shared/borderButton"
import UserPowers from "../../shared/userPowers"
import Modal from "../../shared/modal"
import ImageButton from "../../shared/imageButton"
import allie from "../../../assets/icons/allie.svg"
import spy from "../../../assets/icons/spy.svg"
import attack from "../../../assets/icons/attack.svg"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { Way_IN } from "../../../types/Enums"
import type { ManPower } from "../../../types/manPower"
import { InteractiveMap } from "../interactiveMap"
import type { UserProgressType } from "../../../types/UserProgress"
import { EnterValoriaFlow } from "../enterValoria"
export default function Home() {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState<UserProgressType>({
        currentFlow: FLOW_ENUM.CHOOSE_FIVE_LEADERS,
        selectedWayIn: null,
        manPower: { army: 90, money: 90, people: 90 }
    })
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const onSelectWayIn = (way: Way_IN) => {
        const newPowers = calculateManPower(way, progress.manPower)

        setProgress(prev => {
            return {
                ...prev,
                manPower: newPowers,
                selectedWayIn: way,
                currentFlow: FLOW_ENUM.SELECT_ROAD
            }
        })
    }
    const calculateManPower = (way: Way_IN, currentPower: ManPower) => {
        let result: ManPower = currentPower
        switch (way) {
            case Way_IN.SPY:
                result = { money: 88, people: 88, army: 92 }
                break
            case Way_IN.ALLIE:
                result = { money: 90, people: 88, army: 91 }
                break
            case Way_IN.ATTACK:
                result = { money: 85, people: 92, army: 90 }
                break
            default:
                break
        }
        return result
    }

    return (
        <div className="relative flex h-screen w-screen flex-col justify-between p-10">
            {!loading ? (
                <div className="flex w-full justify-end">
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
                    <Modal>
                        <div className="flex max-w-[900px] flex-col items-center gap-8">
                            <p className="font-trajan w-full text-center text-[30px] font-bold">
                                to start the war you need to get the map of valoria choose the best
                                way to get it
                            </p>
                            <div className="flex items-center gap-8">
                                <ImageButton
                                    onClick={() => {
                                        onSelectWayIn(Way_IN.SPY)
                                    }}
                                    icon={spy}
                                    text="SEND SPY"
                                />
                                <ImageButton
                                    onClick={() => {
                                        onSelectWayIn(Way_IN.ALLIE)
                                    }}
                                    icon={allie}
                                    text="favour from allie"
                                />
                                <ImageButton
                                    onClick={() => {
                                        onSelectWayIn(Way_IN.ATTACK)
                                    }}
                                    icon={attack}
                                    text="Attack Now"
                                />
                            </div>
                        </div>
                    </Modal>
                ) : progress.currentFlow == FLOW_ENUM.SELECT_ROAD ||
                  progress.currentFlow == FLOW_ENUM.CHANGE_ROAD ? (
                    <Modal noBackground>
                        <InteractiveMap
                            selectedWayIn={progress.selectedWayIn}
                            setProgress={setProgress}
                        />
                    </Modal>
                ) : progress.currentFlow == FLOW_ENUM.SHOW_VAL_MAP ||
                                progress.currentFlow == FLOW_ENUM.SELECT_ROAD_TO_VALORILA ||
                                progress.currentFlow==FLOW_ENUM.CHOOSE_FIVE_LEADERS
                  ? (
                    <EnterValoriaFlow
                        currentFlow={progress.currentFlow}
                        
                    setProgress={setProgress}
                    />
                ) : null
            ) : null}
        </div>
    )
}
