import { useState,  } from "react"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import type { LeaderType } from "../../../../types/leaders"
import type { UserProgressType } from "../../../../types/UserProgress"
import BorderButton from "../../../shared/borderButton"
import { ModalWrapper } from "./modalWrapper"
import LeaderPowers from "../../controlValoria/LeaderPowers"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { ButtonDescription } from "../../../buttonDescription"
import type { FeedbackType } from "../../../../types/manPower"

export const SelectSuitableLeader = ({
    setSelectedSubLeaders,
    selectedLeaders,
    selectedSubLeaders,
    setFlow,
    setProgress,
    headText,
    selectedWay = VALORIA_ROAD_METHOD_ENUM?.BRIDGE,
    setFeedBack
}: propTypes) => {
    const [powerModal, setPowerModal] = useState<LeaderType | null>(null)
    const [wrongChoices, setWrongChoices] = useState<LeaderType[]>([])

    const { t } = useTranslation()
    const notify = () =>
        toast(t("please_Select_leader"), {
            progress: 0,
            theme: "dark",
            autoClose: 1500,
            position: "top-center"
        })
    
    
    const haveWrongChoices = () => {
        if (selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES && selectedSubLeaders?.[0]?.name == "SABET")
        {
            // setProgress?.(prev => {
            //     return {
            //         ...prev,
            //         manPower: {
            //             money: prev?.manPower?.money - 4,
            //             people: prev?.manPower?.people - 4,
            //             army: prev?.manPower?.army - 5
            //         }
            //     }
            // })
            //  setFeedBack({
            //      army: `army_decreaseXX5`,
            //      people: `people_decreaseXX4`,
            //      money: `money_decreaseXX4`,
            //      info: "not_easy_to_attackFeed"
            //  })
        }
        else if (selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST && selectedSubLeaders?.[0]?.name == "SLAM")
        {
//    setProgress?.(prev => {
//        return {
//            ...prev,
//            manPower: {
//                money: prev?.manPower?.money - 4,
//                people: prev?.manPower?.people - 4,
//                army: prev?.manPower?.army - 5
//            }
//        }

//    })
//              setFeedBack({
//                  army: `army_decreaseXX5`,
//                  people: `people_decreaseXX4`,
//                  money: `money_decreaseXX4`,
//                  info: "traps_hiddenFeed"
//              })
        }
        else if (
            selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER &&
            selectedSubLeaders?.[0]?.name == "BEHER"
        ) {
            // setProgress?.(prev => {
            //     return {
            //         ...prev,
            //         manPower: {
            //             money: prev?.manPower?.money - 6,
            //             people: prev?.manPower?.people - 3,
            //             army: prev?.manPower?.army - 5
            //         }
            //     }
            // })
            // setFeedBack({
            //     army: `army_decreaseXX5`,
            //     people: `people_decreaseXX3`,
            //     money: `money_decreaseXX6`,
            //     info: "traps_hidden_riverFeed"
            // })
        }
        else {
            setSelectedSubLeaders([])
            setWrongChoices(prev => [...prev, selectedSubLeaders?.[0]])
            setProgress?.(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money - 1,
                        people: prev?.manPower?.people - 1,
                        army: prev?.manPower?.army - 1
                    }
                }
            })
            setFeedBack({
                army: `army_decreaseXX1`,
                people: `people_decreaseXX1`,
                money: `money_decreaseXX1`,
                info: "wrongLeader"
            })
            return true
        }
    }
    const selectSubLeaderHandler = () => {
        if (selectedSubLeaders?.length == 0 ) {
            notify()
            return
        }
        const choices = haveWrongChoices()
                console.log("choices", choices)

        if (choices)return
        else
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
            <div>
            </div>
            <div className="mb-5 flex w-full flex-col gap-2">
                {selectedLeaders?.map(item => {
                    const isSelected = selectedSubLeaders?.findIndex(
                        leader => leader?.name == item?.name
                    )
                    return (
                        <ButtonDescription
                            icon={item?.icon}
                            isSelected={isSelected >= 0 ? true : false}
                            isWrong={wrongChoices?.findIndex(lead => lead?.name == item?.name) >= 0}
                            onClick={() => {
                                if (isSelected >= 0) {
                                    const newLeaders = selectedSubLeaders
                                    newLeaders?.splice(isSelected, 1)
                                    setSelectedSubLeaders([...newLeaders])
                                } else if (selectedSubLeaders.length > 0) {
                                    const subleads = selectedSubLeaders
                                    subleads.pop()

                                    setSelectedSubLeaders([...subleads, item])
                                } else {
                                    setSelectedSubLeaders(prev => [...prev, item])
                                }
                            }}
                            text={t(item?.name)}
                            description={t(item?.desc)}
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
                    isSelected={selectedSubLeaders?.findIndex(
                        leader => leader?.name == powerModal?.name
                    )}
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
    setFeedBack: React.Dispatch<React.SetStateAction<FeedbackType>>
}
