import Modal from "../../shared/modal"
import mapVAL from "../../../assets/valoria.png"
import { useEffect, useState } from "react"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import ImageButton from "../../shared/imageButton"
import forstBg from "../../../assets/icons/forest.svg"
import bridgeBG from "../../../assets/icons/bridge.png"
import homesBg from "../../../assets/icons/home.svg"
import modalBg from "../../../assets/backgrounds/modal.png"
import { leaders } from "./leaderData"
import BorderButton from "../../shared/borderButton"
import type { LeaderType } from "../../../types/leaders"
import type { ManPower } from "../../../types/manPower"
import type { UserProgressType } from "../../../types/UserProgress"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_WAY_ENUM } from "../../../types/Enums"

export const EnterValoriaFlow = ({currentFlow,setProgress}:{currentFlow:FLOW_ENUM,setProgress:React.Dispatch<React.SetStateAction<UserProgressType>>}) => {
    useEffect(() => {
        if (currentFlow == FLOW_ENUM.SHOW_VAL_MAP)
        {

            setTimeout(() => {
                setProgress(prev => ({
                                ...prev,
                                currentFlow: FLOW_ENUM.CHOOSE_FIVE_LEADERS
                            }))
            }, 15000)
        }
    }, [])
    const [selectedLeaders, setSelectedLeaders] = useState<LeaderType[]>([])
    const [selectedSubLeaders, setSelectedSubLeaders] = useState<LeaderType[]>([])
    const [selectWay, setSelectedWay] = useState<VALORIA_ROAD_WAY_ENUM | null>(null)
   const [flow, setFlow] = useState<VALORIA_ROAD_ENUM>()
    console.log("selectWay", selectWay)
    const openValoriaHandler = () => {   
        if(selectedLeaders?.length<5)return
        let advantage:ManPower={army:0,money:0,people:0}
        selectedLeaders?.map((item) => {
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
            currentFlow:FLOW_ENUM.SELECT_ROAD_TO_VALORILA
        }))

    }

    const selectWayHandler = (way:VALORIA_ROAD_WAY_ENUM) => {
        setSelectedWay(way)
        setFlow(VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER)
    }

    return (
        <Modal
            background={
                currentFlow == FLOW_ENUM.CHOOSE_FIVE_LEADERS ||
                flow == VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER
                    ? undefined
                    : mapVAL
            }
        >
            <div
                className={`justify-center ${currentFlow == FLOW_ENUM.CHOOSE_FIVE_LEADERS || flow == VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER ? "mx-w-[90%] " : "min-h-[600px] min-w-[900px] border-5 border-[#DC8E2F] p-8"} `}
            >
                {currentFlow == FLOW_ENUM.SHOW_VAL_MAP ? (
                    <></>
                ) : currentFlow == FLOW_ENUM.CHOOSE_FIVE_LEADERS ? (
                    <div
                        className={`flex min-h-[400px] flex-col items-center justify-center gap-8`}
                    >
                        <p className="font-trajan w-full text-center text-[30px] font-bold">
                            choose five leaders from your army
                            <br />
                            to help you enter valoria
                        </p>

                        <div className="mb-5 grid grid-cols-5 justify-items-center gap-y-8">
                            {leaders?.map(item => {
                                const isSelected = selectedLeaders?.findIndex(
                                    leader => leader?.name == item?.name
                                )
                                return (
                                    <ImageButton
                                        icon={item?.icon}
                                        selected={isSelected >= 0 ? true : false}
                                        onClick={() => {
                                            if (isSelected >= 0) {
                                                const newLeaders = selectedLeaders
                                                newLeaders?.splice(isSelected, 1)
                                                setSelectedLeaders([...newLeaders])
                                            } else if (selectedLeaders?.length == 5) {
                                                const slice = selectedLeaders?.slice(0, 4)
                                                setSelectedLeaders([...slice, item])
                                            } else {
                                                setSelectedLeaders(prev => [...prev, item])
                                            }
                                        }}
                                        text={item?.name}
                                    />
                                )
                            })}
                        </div>
                        <BorderButton
                            size="md"
                            onClick={openValoriaHandler}
                            text={"OPEN VALORIA"}
                        />
                    </div>
                ) : currentFlow == FLOW_ENUM.SELECT_ROAD_TO_VALORILA ? (
                    <>
                        (
                        {flow == VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA ? (
                            <div
                                className={`flex h-[500px] w-full flex-col items-center justify-center gap-10 border-5 border-[#DC8E2F]`}
                                style={{
                                    backgroundImage: `url('${modalBg}')`,
                                    backgroundPosition: "center"
                                }}
                            >
                                <p className="font-trajan w-full text-center text-[30px] font-bold">
                                    choose way to enter valoria
                                </p>
                                <div className="flex w-full items-center justify-between px-7">
                                    <ImageButton
                                        icon={homesBg}
                                        onClick={() => {
                                            selectWayHandler(VALORIA_ROAD_WAY_ENUM.RIVER)
                                        }}
                                        text="RIVER"
                                    />
                                    <ImageButton
                                        icon={forstBg}
                                        onClick={() => {
                                            selectWayHandler(VALORIA_ROAD_WAY_ENUM.FOREST)
                                        }}
                                        text="FOREST"
                                    />
                                    <ImageButton
                                        icon={bridgeBG}
                                        onClick={() => {
                                            selectWayHandler(VALORIA_ROAD_WAY_ENUM.GATES)
                                        }}
                                        text="GATES"
                                    />
                                </div>
                            </div>
                        ) : flow == VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER ? (
                            <div
                                className={`flex min-h-[300px] flex-col items-center justify-center gap-8`}
                            >
                                <p className="font-trajan w-full text-center text-[30px] font-bold">
                                    choose {selectWay==VALORIA_ROAD_WAY_ENUM.GATES?'two':'one'} leaders from your army<br/>to help you enter valoria’s
                                    gates
                                </p>

                                <div className="mb-5 grid grid-cols-5 justify-items-center gap-y-8">
                                    {selectedLeaders?.map(item => {
                                        const isSelected = selectedSubLeaders?.findIndex(
                                            leader => leader?.name == item?.name
                                        )
                                        return (
                                            <ImageButton
                                                icon={item?.icon}
                                                selected={isSelected >= 0 ? true : false}
                                                onClick={() => {
                                                    if (isSelected >= 0) {
                                                        const newLeaders = selectedSubLeaders
                                                        newLeaders?.splice(isSelected, 1)
                                                        setSelectedSubLeaders([...newLeaders])
                                                    }
                                                    else if (
                                                        (selectWay ==
                                                            VALORIA_ROAD_WAY_ENUM
                                                                .GATES &&selectedSubLeaders?.length==
                                                        2)||(selectedSubLeaders.length==1&& selectWay !==VALORIA_ROAD_WAY_ENUM.GATES)
                                                    ) {
                                                        const subleads = selectedSubLeaders
                                                        subleads.pop()
                                                      
                                                        setSelectedSubLeaders([...subleads, item])
                                                    } else {
                                                        setSelectedSubLeaders(prev => [...prev, item])
                                                    }
                                                }}
                                                text={item?.name}
                                            />
                                        )
                                    })}
                                </div>
                                <BorderButton
                                    size="sm"
                                    onClick={openValoriaHandler}
                                    text={"OPEN VALORIA"}
                                />
                            </div>
                        ) : null}
                        )
                    </>
                ) : null}
            </div>
        </Modal>
    )
}
