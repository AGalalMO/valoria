import { useState } from "react"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import type { LeaderType } from "../../../../types/leaders"
import type { UserProgressType } from "../../../../types/UserProgress"
import BorderButton from "../../../shared/borderButton"
import ImageButtonDoubleAuctions from "../../../shared/imageButton/doubleActions"
import { ModalWrapper } from "./modalWrapper"
import LeaderPowers from "../../controlValoria/LeaderPowers"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

export const SelectSuitableLeader = ({
    setSelectedSubLeaders,
    selectedLeaders,
    selectedSubLeaders,
    setFlow,
    setProgress,
    headText,
    selectedWay = VALORIA_ROAD_METHOD_ENUM?.BRIDGE
}: propTypes) => {
    const [powerModal, setPowerModal] = useState<LeaderType | null>(null)
    const { t } = useTranslation()
    const notify = () =>
        toast(t("please_Select_leader"), {
            progress: 0,
            theme: "dark",
            autoClose: 1500,
            position: "top-center"
        })
    const selectSubLeaderHandler = () => {
        if (selectedSubLeaders?.length == 0 || (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES && selectedSubLeaders?.length<2)) {
            notify()
            return
        }
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
        } else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER) {
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

        setFlow(VALORIA_ROAD_ENUM.SHOW_VIDEO)
    }
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90]  !relative"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                {headText ? (
                    headText
                ) : (
                    <>
                        {selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES
                            ? t("select_two_leader_gates")
                            : selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER
                              ? t("select_one_leader_river")
                              : t("select_one_leader_woods")}
                    </>
                )}
            </p>

            <div className="mb-5 grid grid-cols-3 justify-items-center gap-x-2 gap-y-8 xl:!grid-cols-5 xl:gap-x-4">
                {selectedLeaders?.map(item => {
                    const isSelected = selectedSubLeaders?.findIndex(
                        leader => leader?.name == item?.name
                    )
                    return (
                        <ImageButtonDoubleAuctions
                            icon={item?.icon}
                            selected={isSelected >= 0 ? true : false}
                            onClickImage={() => {
                                setPowerModal(item)
                            }}
                            onClickButton={() => {
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
                            text={t(item?.name)}
                        />
                    )
                })}
            </div>
            <BorderButton size="sm" onClick={selectSubLeaderHandler} text={t("open_valoria")} />
            {powerModal ? (
                <LeaderPowers
                    closeModal={() => {
                        setPowerModal(null)
                    }}
                    leader={powerModal}
                    onClickButton={() => {
                         const isSelected = selectedSubLeaders?.findIndex(
                             leader => leader?.name == powerModal?.name
                         )
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

                                setSelectedSubLeaders([...subleads, powerModal])
                            } else {
                                setSelectedSubLeaders(prev => [...prev, powerModal])
                            }
                        setPowerModal(null)
                    }}
                />
            ) : null}
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
    headText?: string
}
