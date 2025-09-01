/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef } from "react"
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
import EngineersFailed from "../bridgeProblem/engineersFailed"
import Attacked from "../bridgeProblem/attacked"
import CannonAttack from "../cannon/components/attackedByCannon"
import ControlValoria from "../controlValoria"
import { useTranslation } from "react-i18next"
import TheEnd from "../theEnd"
import intro from '../../../assets/videos/ar/intro.mp4'
import introEn from "../../../assets/videos/en/intro.mp4"
import valoriaIntroEn from "../../../assets/videos/en/whatHappend.webm"
import valoriaIntro from "../../../assets/videos/ar/whatHappend.webm"
import bridge1 from "../../../assets/videos/ar/bridge1.webm"
import bridge2 from "../../../assets/videos/ar/bridge2.webm"
import bridge1En from "../../../assets/videos/en/bridge1.webm"
import bridge2En from "../../../assets/videos/en/bridge2.webm"
import aim from "../../../assets/videos/ar/aim.webm"
import hit from "../../../assets/videos/ar/hit.webm"
import aimEn from "../../../assets/videos/en/aim.webm"
import hitEn from "../../../assets/videos/en/hit.webm"
import end from "../../../assets/videos/ar/end.webm"
import endEn from "../../../assets/videos/en/end.webm"
import  VideoPlayer from "../../videoComponent"
import SelectLanguage from "../../selectLanguage"
import mapIcon from '../../../assets/mapInfo.png'
import mapVL from "../../../assets/valoriaMapDEs.jpeg"
import Intro from "../../Intro"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import AttackedSECOND from "../bridgeProblem/attacked2"
import ControlValoriaIntro from "../controlValoria/intro"
import { useToast } from "../../toaster"

export default function Home() {

    const [loading, setLoading] = useState(true)
    const [selectedLeaders, setSelectedLeaders] = useState<LeaderType[]>([])
    const [selectedSubLeaders, setSelectedSubLeaders] = useState<LeaderType | null>(null)
    const [showInfo, setShowInfo] = useState(false)
    const [showFeedBack, setShowFeedBack] = useState(false)
      const { show } = useToast()

    const [feedback, setFeedBack] = useState<{
        people: string|null
        army: string|null
        money: string | null
        info:string|null
    }>({
        people: "",
        army: "",
        money: "",
        info:''
    })
    const [showMap, setShowMap] = useState(false)
    const mapRef = useRef<HTMLDivElement>(null)
           const { t,i18n } = useTranslation()

    const [progress, setProgress] = useState<UserProgressType>({
        currentFlow: FLOW_ENUM.INTRO,
        selectedWayIn: null,
        manPower: { army: 100, money: 100, people: 100 }
    })

    useEffect(() => {
        if (feedback?.army || feedback?.money || feedback?.people)
        {
            if (feedback)
            {
                 setShowFeedBack(false)
                setTimeout(() => {
                    setShowFeedBack(true)

                    show({
                        message: [
                            feedback?.army
                                ? `${t(`${feedback?.army?.split("XX")?.[0]}`)} :${" "}
                                    ${feedback?.army?.split("XX")?.[1]}`
                                : "",
                            feedback?.people
                                ? `${t(`${feedback?.people?.split("XX")?.[0]}`)} :${" "}
                                    ${feedback?.people?.split("XX")?.[1]}`
                                : "",
                            feedback?.money
                                ? `${t(`${feedback?.money?.split("XX")?.[0]}`)} :${" "}
                                    ${feedback?.money?.split("XX")?.[1]}`
                                : ""
                        ],
                        title: feedback?.info ? t(feedback?.info) : t("dueTo"),
                        isArabic: i18n?.language=='ar'?true:false
                    })
                   
                     setTimeout(() => {
                         setShowFeedBack(false)
                     }, 6000)
                },500)
              }
            else
            {
                setShowFeedBack(true)
                setTimeout(() => {
                    setShowFeedBack(false)
                },6000)
                
                }
        }
    },[feedback])
    useEffect(() => {
        console.log("showF",showFeedBack)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    useEffect(() => {
        if (progress.currentFlow == FLOW_ENUM.SHOW_VALORIA_MAP)
        {
            setShowInfo(true)
        }
        if (progress.currentFlow == FLOW_ENUM.CANNON_ATTACK)
        {
            setShowInfo(false)
        }
    },[progress])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            console.log("event", event)
            if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
                setShowMap(false)
            }
        }

        if (showMap) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showMap])

    const changeFlowState = (flow:FLOW_ENUM) => {
        setProgress((prev)=>({...prev,currentFlow:flow}))
    }

    const ChooseSubLeader = () => {
        if (progress.currentFlow == FLOW_ENUM.BUILD_ANOTHER_BRIDGE) {
            if (selectedSubLeaders?.name == "AWS") changePowers({ money: -1, army: -2, people: 1 })
            else changePowers({ money: -4, army: -4, people: -2 })

            changeFlowState(FLOW_ENUM.BUILD_ANOTHER_BRIDGE_ISSUE)
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
            changeFlowState(FLOW_ENUM.FIRE_CANNON_INTRO)
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
        <>
            <div className="relative flex h-screen w-screen flex-col justify-between">
                {showInfo ? (
                    <div
                        className={`slide-in absolute start-5 top-[10%] xl:!top-[15%] z-[10000] mx-10 flex cursor-pointer items-center gap-2 border border-white p-3 text-sm text-white ${i18n?.language=='ar'?'flex-row-reverse':''}`}
                        onClick={() => {
                            setShowMap(true)
                        }}
                    >
                        <img src={mapIcon} width={30} height={15} />
                        <span className="text-lg">{t("showMap")}</span>
                    </div>
                ) : null}

                {/* {showFeedBack ? (
                    <div
                        className="slide-in absolute start-5 top-[15%] z-[10000] flex cursor-pointer flex-col items-center justify-center gap-3 border border-[#844501] bg-[#f5ddaa] p-2 text-sm font-bold text-black"
                        onClick={() => {
                            setShowMap(true)
                        }}
                    >
                        {feedback?.army ? (
                            <p className="text-lg">
                                {t(`${feedback?.army?.split("XX")?.[0]}`)} :{" "}
                                {feedback?.army?.split("XX")?.[1]}
                            </p>
                        ) : null}
                        {feedback?.people ? (
                            <p className="text-lg">
                                {t(`${feedback?.people?.split("XX")?.[0]}`)} :{" "}
                                {feedback?.people?.split("XX")?.[1]}
                            </p>
                        ) : null}
                        {feedback?.money ? (
                            <p className="text-lg">
                                {t(`${feedback?.money?.split("XX")?.[0]}`)} :{" "}
                                {feedback?.money?.split("XX")?.[1]}
                            </p>
                        ) : null}
                        <p className="text-lg">{feedback?.info ? t(feedback?.info) : t("dueTo")}</p>
                    </div>
                ) : null} */}

                {!loading && progress.currentFlow != FLOW_ENUM.FINISH ? (
                    <div className="flex w-full justify-end p-10">
                        <UserPowers isTheEnd={false} powers={progress.manPower} />
                    </div>
                ) : null}
                {!loading ? (
                    progress.currentFlow == FLOW_ENUM.SELECT_LANG ? (
                        <SelectLanguage
                            changeFlow={() => {
                                setProgress(prev => ({ ...prev, currentFlow: FLOW_ENUM.INTRO }))
                            }}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.INTRO ? (
                        <VideoPlayer
                            video={i18n?.language == "en" ? introEn : intro}
                            onEnd={() => {
                                changeFlowState(FLOW_ENUM.START_GAME)
                            }}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.START_GAME ? (
                        <div className="mb-12 flex w-full justify-center">
                            <BorderButton
                                text={t("start_game")}
                                onClick={() => {
                                    setProgress(prev => ({
                                        ...prev,
                                        currentFlow: FLOW_ENUM.INTRO_WAR
                                    }))
                                }}
                            />
                        </div>
                    ) : progress.currentFlow == FLOW_ENUM.INTRO_WAR ? (
                        <div className="mb-12 flex w-full justify-center">
                            <Intro
                                onEnd={() => {
                                    setProgress(prev => ({
                                        ...prev,
                                        currentFlow: FLOW_ENUM.SELECT_WAY_IN
                                    }))
                                }}
                            />
                        </div>
                    ) : progress.currentFlow == FLOW_ENUM.SELECT_WAY_IN ? (
                        <SelectValoriaWayIn
                            setFeedBack={setFeedBack}
                            progress={progress}
                            setProgress={setProgress}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.SELECT_ROAD ||
                      progress.currentFlow == FLOW_ENUM.CHANGE_ROAD ? (
                        <Modal noBackground>
                            <InteractiveMap
                                setFeedBack={setFeedBack}
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
                            setFeedBack={setFeedBack}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA_INTRO ? (
                        <VideoPlayer
                            onEnd={() => {
                                changeFlowState(FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA)
                            }}
                            video={i18n?.language == "en" ? valoriaIntroEn : valoriaIntro}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.WHAT_HAPPENS_IN_VALORIA ? (
                        <SolveLeadersConflict setFeedBack={setFeedBack} setProgress={setProgress} />
                    ) : progress.currentFlow === FLOW_ENUM.NOW_WE_ARE_IN_VALORIA ? (
                        <InValoriaMap changeState={changeFlowState} />
                    ) : progress.currentFlow === FLOW_ENUM.HOW_TO_PASS_BRIDGE ? (
                        <HowToPass
                            changeFlowState={changeFlowState}
                            changePowers={() => {
                                changePowers({
                                    army: 0,
                                    people: 0,
                                    money: -4
                                })
                                setFeedBack({
                                    army: null,
                                    people: null,
                                    money: `money_decreaseXX4`,
                                    info: "dueToPowder"
                                })
                            }}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.RACE_FOR_TIME ||
                      progress.currentFlow == FLOW_ENUM.IS_TRUST_ENGINEERS ? (
                        <VideoPlayer
                            video={i18n?.language == "ar" ? bridge1 : bridge1En}
                            onEnd={() => {
                                if (progress.currentFlow == FLOW_ENUM.RACE_FOR_TIME)
                                    changeFlowState(FLOW_ENUM.RACE_FOR_TIME_FAILED)
                                else changeFlowState(FLOW_ENUM.ENGINEERS_FAILED)
                            }}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.OVER_MY_DEAD_BODY ||
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
                    ) : progress.currentFlow == FLOW_ENUM.ENGINEERS_FAILED ? (
                        <EngineersFailed
                            changeFlowState={changeFlowState}
                            changePowers={changePowers}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.BUILD_ANOTHER_BRIDGE_ISSUE ? (
                        <VideoPlayer
                            onEnd={() => {
                                changeFlowState(FLOW_ENUM.GOT_ATTACKED)
                            }}
                            video={i18n?.language == "en" ? bridge2En : bridge2}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.GOT_ATTACKED ? (
                        <Attacked
                            changeFlowState={changeFlowState}
                                                                                            changePowers={changePowers}
                                                                                            
                            selectedLeaders={selectedLeaders}
                            // setSelectedSubLeaders={setSelectedSubLeaders}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.GOT_ATTACKED_SECOND ? (
                        <AttackedSECOND
                        
                            changeFlowState={changeFlowState}
                            changePowers={changePowers}
                            setFeedBack={setFeedBack}
                            selectedLeaders={selectedLeaders}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.CANNON_ATTACK ? (
                        <CannonAttack changeFlowState={changeFlowState} />
                    ) : progress.currentFlow == FLOW_ENUM.FIRE_CANNON_INTRO ? (
                        <VideoPlayer
                            onEnd={() => {
                                changeFlowState(FLOW_ENUM.FIRE_CANNON)
                            }}
                            video={i18n?.language == "en" ? aimEn : aim}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.FIRE_CANNON ? (
                        <FireCannon
                            changePowers={changePowers}
                            changeFlowState={changeFlowState}
                            setFeedBack={setFeedBack}
                        />
                    ) : progress.currentFlow == FLOW_ENUM.FIRE_CANNON_SUCCESS ? (
                        <VideoPlayer
                            onEnd={() => {
                                changeFlowState(FLOW_ENUM.CONTROL_VALORIA)
                            }}
                            video={i18n?.language == "en" ? hitEn : hit}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.CONTROL_VALORIA ? (
                        <ControlValoriaIntro
                            changeFlowState={changeFlowState}
                            selectedLeaders={selectedLeaders}
                            changePowers={changePowers}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.CONTROL_VALORIA2 ? (
                        <ControlValoria
                            changeFlowState={changeFlowState}
                            selectedLeaders={selectedLeaders}
                            changePowers={changePowers}
                            setFeedBack={setFeedBack}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.THE_END ? (
                        <VideoPlayer
                            onEnd={() => {
                                changeFlowState(FLOW_ENUM.FINISH)
                            }}
                            video={i18n?.language == "en" ? endEn : end}
                        />
                    ) : progress?.currentFlow == FLOW_ENUM.FINISH ? (
                        <TheEnd progress={progress} />
                    ) : null
                ) : null}
            </div>
            {showMap ? (
                <div className="absolute z-[10000] flex h-screen w-screen items-center justify-center bg-black/50">
                    <div ref={mapRef}>
                        <Zoom
                            zoomMargin={40} // optional: spacing around zoomed image
                            classDialog="z-[9999]" // ensure above your modal/backdrop
                        >
                            <img
                                src={mapVL}
                                alt="Decision matrix"
                                className="max-h-[600px] cursor-zoom-in"
                            />
                        </Zoom>
                    </div>
                </div>
            ) : null}
        </>
    )
}


