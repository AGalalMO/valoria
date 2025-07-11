import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import type { LeaderType } from "../../../../types/leaders"
import type { UserProgressType } from "../../../../types/UserProgress"
import BorderButton from "../../../shared/borderButton"
import ImageButton from "../../../shared/imageButton"
import { ModalWrapper } from "./modalWrapper"

export const SelectSuitableLeader = ({
    setSelectedSubLeaders,
    selectedLeaders,
    selectedSubLeaders,
    setFlow,
    setProgress,
    headText,
    selectedWay = VALORIA_ROAD_METHOD_ENUM?.BRIDGE
}: propTypes) => {
    const selectSubLeaderHandler = () => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES) {
            const names = [selectedSubLeaders?.[0]?.name, selectedSubLeaders?.[1]?.name]
            if (names?.includes("DRAR") && names?.includes?.("SABET")) {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 4,
                            people: prev?.manPower?.people - 3,
                            army: prev?.manPower?.army - 7
                        }
                    }
                })
            } else if (names?.includes("DRAR") || names?.includes?.("SABET")) {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 5,
                            people: prev?.manPower?.people - 4,
                            army: prev?.manPower?.army - 8
                        }
                    }
                })
            } else {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 6,
                            people: prev?.manPower?.people - 5,
                            army: prev?.manPower?.army - 10
                        }
                    }
                })
            }
        } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST) {
            if (selectedSubLeaders?.[0]?.name == "SLAM") {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 4,
                            people: prev?.manPower?.people - 4,
                            army: prev?.manPower?.army - 5
                        }
                    }
                })
            } else {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 7,
                            people: prev?.manPower?.people - 6,
                            army: prev?.manPower?.army - 10
                        }
                    }
                })
            }
        } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER)
        {
            if (selectedSubLeaders?.[0]?.name == "BOTHER") {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 6,
                            people: prev?.manPower?.people - 3,
                            army: prev?.manPower?.army - 5
                        }
                    }
                })
            } else {
                setProgress?.(prev => {
                    return {
                        ...prev,
                        manPower: {
                            money: prev?.manPower?.money - 8,
                            people: prev?.manPower?.people - 6,
                            army: prev?.manPower?.army - 10
                        }
                    }
                })
            }
        }
       

        setFlow(VALORIA_ROAD_ENUM.SELECT_OPTION_TO_CONTINUE)
    }

    return (
        <ModalWrapper classes="!justify-between">
            <p className="font-trajan w-full text-center text-[30px] font-bold">
                {headText ? (
                    headText
                ) : (
                    <>
                        choose {selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES ? "two" : "one"}{" "}
                        leaders from your army
                        <br />
                        to help you enter valoria’s gates
                    </>
                )}
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
                                } else if (
                                    (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES &&
                                        selectedSubLeaders?.length == 2) ||
                                    (selectedSubLeaders.length == 1 &&
                                        selectedWay !== VALORIA_ROAD_METHOD_ENUM.GATES)
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
            <BorderButton size="sm" onClick={selectSubLeaderHandler} text={"OPEN VALORIA"} />
        </ModalWrapper>
    )
}
type propTypes = {
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
    selectedLeaders: LeaderType[]
    selectedSubLeaders: LeaderType[]
    setFlow: React.Dispatch<React.SetStateAction<VALORIA_ROAD_ENUM | undefined>>
    setProgress?: (value: React.SetStateAction<UserProgressType>) => void
    selectedWay?: VALORIA_ROAD_METHOD_ENUM | null
    headText?:string
}