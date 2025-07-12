import Modal from "../../shared/modal"
import mapVAL from "../../../assets/valoria-min.png"
import { useEffect, useState } from "react"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { LeaderType } from "../../../types/leaders"
import type { ManPower } from "../../../types/manPower"
import type { UserProgressType } from "../../../types/UserProgress"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../types/Enums";
import { SelectedRoadOptions } from "./components/selectedRoadOptionsModal"
import { ChooseFiveLeaders } from "./components/selectLeaders"
import { EnterValoriaMethod } from "./components/enterValoriaWay"
import { SelectSuitableLeader } from "./components/selectSuitableLeader"


export const EnterValoriaFlow = ({ currentFlow, setProgress ,selectedLeaders,setSelectedLeaders}: propTypes) => {
    const [selectedSubLeaders, setSelectedSubLeaders] = useState<LeaderType[]>([])
    const [selectedBefore, setSelectedBefore] = useState<VALORIA_ROAD_METHOD_ENUM[]>([])
    const [selectedWay, setSelectedWay] = useState<VALORIA_ROAD_METHOD_ENUM | null>(null)
    const [flow, setFlow] = useState<VALORIA_ROAD_ENUM>()

    useEffect(() => {
        if (currentFlow == FLOW_ENUM.SHOW_VALORIA_MAP) {
            setTimeout(() => {
                setProgress(prev => ({
                    ...prev,
                    currentFlow: FLOW_ENUM.CHOOSE_FIVE_LEADERS
                }))
            }, 15000)
        }
    }, [])

    const openValoriaHandler = () => {
        if (selectedLeaders?.length < 5) return
        let advantage: ManPower = { army: 0, money: 0, people: 0 }
        selectedLeaders?.map(item => {
            advantage = {
                army: advantage.army + item?.advantage?.army,
                people: advantage.people + item?.advantage?.people,
                money: advantage.money + item?.advantage?.money
            }
        })
        setFlow(VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA)
        setProgress(prev => ({
            ...prev,
            manPower: {
                army: advantage.army + prev?.manPower?.army,
                people: advantage.people + prev?.manPower?.people,
                money: advantage.money + prev?.manPower?.money
            },
            currentFlow: FLOW_ENUM.SELECT_ROAD_TO_VALORILA
        }))
    }

    const selectWayHandler = (way: VALORIA_ROAD_METHOD_ENUM) => {
        setSelectedWay(way)
        setFlow(VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER)
    }


    return (
        <>
            {currentFlow == FLOW_ENUM.SHOW_VALORIA_MAP ? (
                <Loader />
            ) : currentFlow == FLOW_ENUM.CHOOSE_FIVE_LEADERS ? (
                <ChooseFiveLeaders
                    selectedLeaders={selectedLeaders}
                    setSelectedLeaders={setSelectedLeaders}
                    openValoriaHandler={openValoriaHandler}
                />
            ) : currentFlow == FLOW_ENUM.SELECT_ROAD_TO_VALORILA ? (
                <>
                    {flow == VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA ? (
                        <EnterValoriaMethod
                            selectWayHandler={selectWayHandler}
                            selectedBefore={selectedBefore}
                        />
                    ) : flow == VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER ? (
                        <SelectSuitableLeader
                            setFlow={setFlow}
                            setProgress={setProgress}
                            selectedLeaders={selectedLeaders}
                            selectedSubLeaders={selectedSubLeaders}
                            selectedWay={selectedWay}
                            setSelectedSubLeaders={setSelectedSubLeaders}
                        />
                    ) : flow == VALORIA_ROAD_ENUM.SELECT_OPTION_TO_CONTINUE ? (
                        <SelectedRoadOptions
                            selectedWay={selectedWay}
                            setFlow={setFlow}
                            setProgress={setProgress}
                            setSelectedSubLeaders={setSelectedSubLeaders}
                            setSelectedWay={setSelectedWay}
                            selectedBefore={selectedBefore}
                            setSelectedBefore={setSelectedBefore}
                        />
                    ) : null}
                </>
            ) : null}
        </>
    )
}

const Loader = () => {
    return (
        <Modal background={mapVAL}>
            <div
                className={`justify-center ${"min-h-[500px] min-w-[800px] border-5 border-[#DC8E2F] p-8"} `}
            ></div>
        </Modal>
    )
}

type propTypes = {
    currentFlow: FLOW_ENUM
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
    selectedLeaders: LeaderType[]
    setSelectedLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
}