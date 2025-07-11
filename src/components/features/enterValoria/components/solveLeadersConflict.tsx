import { LEADER_CONFLICT_ENUM } from "../../../../types/Enums"
import type { UserProgressType } from "../../../../types/UserProgress"
import ImageButton from "../../../shared/imageButton"
import { ModalWrapper } from "./modalWrapper"
import actFast from "../../../../assets/icons/actFast.png"
import changeLead from "../../../../assets/icons/changeLead.png"
import meeting from "../../../../assets/icons/meeting.png"
import { FLOW_ENUM } from "../../../../types/FLowEnum"
export const SolveLeadersConflict = ({
    setProgress
}: {
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
}) => {
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
        <ModalWrapper classes="max-w-[1000px]  !py-12 !justify-between  !px-4">
            <p className="font-trajan w-full text-center text-[30px] font-bold">
                what happen still in valoria still on valoria their is a conflict between your
                leaders
            </p>
            <div className="flex w-full justify-center items-center gap-6">
                <ImageButton
                    size="xl"
                    icon={actFast}
                    onClick={() => {
                        solveConflictBetweenLeaders(LEADER_CONFLICT_ENUM.ACT_FAST)
                    }}
                    text="act very fast threaten them to fire them"
                />
                <ImageButton
                    size="xl"
                    icon={meeting}
                    onClick={() => {
                        solveConflictBetweenLeaders(LEADER_CONFLICT_ENUM.MEETING)
                    }}
                    text="meeting between leader discuss the old problems"
                />
                <ImageButton
                    size="xl"
                    icon={changeLead}
                    onClick={() => {
                        solveConflictBetweenLeaders(LEADER_CONFLICT_ENUM.CHANGE_LEADS)
                    }}
                    text="change leaders dutes and separate them"
                />
            </div>
        </ModalWrapper>
    )
}