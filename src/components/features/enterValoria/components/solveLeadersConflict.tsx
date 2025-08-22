import type { UserProgressType } from "../../../../types/UserProgress"
import { ModalWrapper } from "./modalWrapper"
import actFast from "../../../../assets/icons/actFast.png"
import changeLead from "../../../../assets/icons/changeLead.png"
import meeting from "../../../../assets/icons/meeting.png"
import { FLOW_ENUM } from "../../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import { ButtonDescription } from "../../../buttonDescription"
import { useState } from "react"
import BorderButton from "../../../shared/borderButton"
export const SolveLeadersConflict = ({
    setProgress
}: {
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
}) => {
    const { t } = useTranslation()
    const [selectedOption, setSelectedOption] = useState(-1)
    const solveConflictBetweenLeaders = () => {
        if(selectedOption<0) return
        if (selectedOption == 0) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money - 0,
                        people: prev?.manPower?.people - 5,
                        army: prev?.manPower?.army +3
                    },
                    currentFlow: FLOW_ENUM.NOW_WE_ARE_IN_VALORIA
                }
            })
        }
        else if (selectedOption == 1) {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                 

                         money: prev?.manPower?.money - 2,
                        people: prev?.manPower?.people +4,
                        army: prev?.manPower?.army -0
                    },
                    currentFlow: FLOW_ENUM.NOW_WE_ARE_IN_VALORIA
                }
            })
        } else {
            setProgress(prev => {
                return {
                    ...prev,
                    manPower: {
                        money: prev?.manPower?.money +3,
                        people: prev?.manPower?.people - 0,
                        army: prev?.manPower?.army - 4
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
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                {t("what_happen_in_valoria")}
            </p>
            <div className="flex w-full flex-col items-center justify-center gap-3">
                <ButtonDescription
                    description={`Act very fast & threaten to fire them.
This affects the popularity negatively & Army powers positively. 
`}
                    isSelected={selectedOption == 0}
                    icon={actFast}
                    onClick={() => {
                        setSelectedOption(0)
                    }}
                    small
                    text={t("act_fast")}
                />
                <ButtonDescription
                    description={`Meeting between leaders to discuss old problems.
This affects the popularity positively & Resources negatively.
`}
                    small
                    isSelected={selectedOption == 1}
                    icon={meeting}
                    onClick={() => {
                        setSelectedOption(1)
                    }}
                    text={t("meet_leaders")}
                />
                <ButtonDescription
                    description={`Change leaders’ duty & separate them.
This affects the Army power negatively, & Resources Positively
`}
                    isSelected={selectedOption == 2}
                    small
                    icon={changeLead}
                    onClick={() => {
                        setSelectedOption(2)
                    }}
                    text={t("act_leaderChange")}
                />
            </div>
            <BorderButton text="NEXT"  onClick={solveConflictBetweenLeaders} />
        </ModalWrapper>
    )
}
