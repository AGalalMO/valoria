import { LEADER_CONFLICT_ENUM } from "../../../../types/Enums"
import type { UserProgressType } from "../../../../types/UserProgress"
import ImageButton from "../../../shared/imageButton"
import { ModalWrapper } from "./modalWrapper"
import actFast from "../../../../assets/icons/actFast.png"
import changeLead from "../../../../assets/icons/changeLead.png"
import meeting from "../../../../assets/icons/meeting.png"
import { FLOW_ENUM } from "../../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
export const SolveLeadersConflict = ({
    setProgress
}: {
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
    }) => {
    const {t}=useTranslation()
    const solveConflictBetweenLeaders = (action: LEADER_CONFLICT_ENUM) => {
        if (action == LEADER_CONFLICT_ENUM.ACT_FAST) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money - 2,
                        people: prev?.manPower?.people - 7,
                        army: prev?.manPower?.army - 5
                    },
                    currentFlow:FLOW_ENUM.NOW_WE_ARE_IN_VALORIA
                }
            })
        } else if (action == LEADER_CONFLICT_ENUM.MEETING) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money - 5,
                        people: prev?.manPower?.people + 2,
                        army: prev?.manPower?.army - 1
                    },
                    currentFlow: FLOW_ENUM.NOW_WE_ARE_IN_VALORIA
                }
            })
        } else {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money - 2,
                        people: prev?.manPower?.people - 7,
                        army: prev?.manPower?.army - 2
                    },
                    currentFlow: FLOW_ENUM.NOW_WE_ARE_IN_VALORIA
                }
            })
        }
    }

    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1200px]  !relative px-10 "
        >
            <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
                {t("what_happen_in_valoria")}
            </p>
            <div className="flex w-full items-center justify-center gap-6">
                <ImageButton
                    size="xl"
                    icon={actFast}
                    onClick={() => {
                        solveConflictBetweenLeaders(LEADER_CONFLICT_ENUM.ACT_FAST)
                    }}
                    text={t("act_fast")}
                />
                <ImageButton
                    size="xl"
                    icon={meeting}
                    onClick={() => {
                        solveConflictBetweenLeaders(LEADER_CONFLICT_ENUM.MEETING)
                    }}
                    text={t("meet_leaders")}
                />
                <ImageButton
                    size="xl"
                    icon={changeLead}
                    onClick={() => {
                        solveConflictBetweenLeaders(LEADER_CONFLICT_ENUM.CHANGE_LEADS)
                    }}
                    text={t("act_leaderChange")}
                />
            </div>
        </ModalWrapper>
    )
}