import mapVAL from "../../../assets/mapping.png";
import { useEffect, useState } from "react"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { LeaderType } from "../../../types/leaders"
import type { FeedbackType, ManPower } from "../../../types/manPower"
import type { UserProgressType } from "../../../types/UserProgress"
import { VALORIA_ROAD_ENUM, VALORIA_ROAD_METHOD_ENUM } from "../../../types/Enums"
import { SelectedRoadOptions } from "./components/selectedRoadOptionsModal"
import { ChooseFiveLeaders } from "./components/selectLeaders"
import { EnterValoriaMethod } from "./components/enterValoriaWay"
import { SelectSuitableLeader } from "./components/selectSuitableLeader"
import riverEn from "../../../assets/videos/en/river.webm"
import riverAr from "../../../assets/videos/ar/river.webm"
import getesEn from "../../../assets/videos/en/gates.webm"
import gatesAr from "../../../assets/videos/ar/gates.webm"
import woodsAr from "../../../assets/videos/ar/woods.webm"
import woodsEn from "../../../assets/videos/en/woods.webm"
import VideoPlayer from "../../videoComponent"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"
import { ModalWrapper } from "./components/modalWrapper"
import BorderButton from "../../shared/borderButton"

export const EnterValoriaFlow = ({
    currentFlow,
    setProgress,
    selectedLeaders,
    setSelectedLeaders,
    setFeedBack
}: propTypes) => {
    const [selectedSubLeaders, setSelectedSubLeaders] = useState<LeaderType[]>([])
    const [selectedBefore, setSelectedBefore] = useState<VALORIA_ROAD_METHOD_ENUM[]>([])
    const [selectedWay, setSelectedWay] = useState<VALORIA_ROAD_METHOD_ENUM | null>(null)
    const [wrongChoices, setWrongChoices] = useState<LeaderType[]>([])
    const [doneLeaders, setDoneLeaders] = useState<string[]>([])
    const [flow, setFlow] = useState<VALORIA_ROAD_ENUM>()
    const { t, i18n } = useTranslation()
    const notify = () =>
        toast(t("please_Select_five_leaders"), {
            progress: 0,
            theme: "dark",
            autoClose: 1500,
            position: "top-center"
        })

    useEffect(() => {
        if (currentFlow == FLOW_ENUM.SHOW_VALORIA_MAP) {
            setTimeout(() => {
                setProgress(prev => ({
                    ...prev,
                    currentFlow: FLOW_ENUM.CHOOSE_FIVE_LEADERS
                }))
            }, 3000)
        }
    }, [])

    const openValoriaHandler = () => {
        let wrongChoice = false
        if (selectedLeaders?.length < 5) {
            notify()
            return
        }
        let advantage: ManPower = { army: 0, money: 0, people: 0 }
        selectedLeaders?.map(item => {
            if (doneLeaders?.includes(item?.name)) return
            advantage = {
                army: advantage.army + (item?.advantage?.army < 0 ? item?.advantage?.army : 0),
                people:
                    advantage.people + (item?.advantage?.army < 0 ? item?.advantage?.people : 0),
                money: advantage.money + (item?.advantage?.army < 0 ? item?.advantage?.money : 0)
            }
            if (item?.advantage?.army < 0) {
                setWrongChoices(prev => [...prev, item])
                wrongChoice = true
            } else {
                setDoneLeaders(prev => [...prev, item?.name])
            }
        })

        setProgress(prev => ({
            ...prev,
            manPower: {
                army: advantage.army + prev?.manPower?.army,
                people: advantage.people + prev?.manPower?.people,
                money: advantage.money + prev?.manPower?.money
            },
            currentFlow: wrongChoice ? prev?.currentFlow : FLOW_ENUM.SELECT_ROAD_TO_VALORILA
        }))
        setFeedBack({
            army:
                advantage?.army != 0
                    ? `army_${advantage?.army > 0 ? "increase" : "decrease"}XX${Math.abs(advantage.army)}`
                    : null,
            people:
                advantage?.people != 0
                    ? `people_${advantage?.people > 0 ? "increase" : "decrease"}XX${Math.abs(advantage.people)}`
                    : null,
            money:
                advantage?.money != 0
                    ? `money_${advantage?.money > 0 ? "increase" : "decrease"}XX${Math.abs(advantage.money)}`
                    : null,
            info: "choosingLeaders"
        })
        if (wrongChoice) return
        else {
            setFlow(VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA)
        }
    }

    const selectWayHandler = (way: VALORIA_ROAD_METHOD_ENUM) => {
        setSelectedWay(way)
        setWrongChoices([])
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
                    doneLeaders={doneLeaders}
                    wrongChoices={wrongChoices}
                />
            ) : currentFlow == FLOW_ENUM.SELECT_ROAD_TO_VALORILA ? (
                <>
                    {flow == VALORIA_ROAD_ENUM.SELECT_ROAD_TO_VALORILA ? (
                        <EnterValoriaMethod
                            selectWayHandler={selectWayHandler}
                            selectedBefore={selectedBefore}
                        />
                    ) : flow == VALORIA_ROAD_ENUM.SHOW_VIDEO ? (
                        <VideoPlayer
                            onEnd={() => {
                                setFlow(VALORIA_ROAD_ENUM.SELECT_OPTION_TO_CONTINUE)
                            }}
                            video={
                                i18n.language == "en"
                                    ? selectedWay == "GATES"
                                        ? getesEn
                                        : selectedWay == "FOREST"
                                          ? woodsEn
                                          : riverEn
                                    : selectedWay == "GATES"
                                      ? gatesAr
                                      : selectedWay == "FOREST"
                                        ? woodsAr
                                        : riverAr
                            }
                        />
                    ) : flow == VALORIA_ROAD_ENUM.SELECT_SUITABLE_LEADER ? (
                        <SelectSuitableLeader
                            setFlow={setFlow}
                            setProgress={setProgress}
                            setFeedBack={setFeedBack}
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
                            setFeedBack={setFeedBack}
                            setSelectedSubLeaders={setSelectedSubLeaders}
                            setSelectedWay={setSelectedWay}
                            selectedBefore={selectedBefore}
                            setSelectedBefore={setSelectedBefore}
                        />
                    ) : flow == VALORIA_ROAD_ENUM.ENTERED ? (
                        <ModalWrapper
                            parentClass="!w-full !justify-center "
                            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] justify-between  !relative px-20 xl:px-[80px]"
                        >
                            <p
                                className={`font-trajan text-white w-full text-center text-2xl font-bold xl:text-[30px]`}
                            >
                                {t("success1")} <br />
                                {t("success2")}
                            </p>
                            <BorderButton
                                text={t("next")}
                                size="md"
                                onClick={() => {
                                    setProgress(prev => {
                                        return {
                                            ...prev,
                                            currentFlow: FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA_INTRO
                                        }
                                    })
                                }}
                            />
                        </ModalWrapper>
                    ) : null}
                </>
            ) : null}
        </>
    )
}

const Loader = () => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div
                className={`justify-center ${"h-[500px] w-[80vw] border-5 border-[#DC8E2F]  lg:!h-[700px] xl:!w-[900px]"} `}
            >
                <img src={mapVAL} className="w-full h-full" />
            </div>
        </div>
    )
}

type propTypes = {
    currentFlow: FLOW_ENUM
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
    selectedLeaders: LeaderType[]
    setSelectedLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
    setFeedBack: React.Dispatch<React.SetStateAction<FeedbackType>>
}
