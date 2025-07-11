import { FLOW_ENUM } from "../../../../types/FLowEnum";
import type { LeaderType } from "../../../../types/leaders"
import BorderButton from "../../../shared/borderButton"
import ImageButton from "../../../shared/imageButton"
import { ModalWrapper } from "./modalWrapper"

export const SelectSuitableLeaderToBuildBridge = ({
    setSelectedSubLeaders,
    selectedLeaders,
    selectedSubLeaders,
    selectedOption,
    onClick
}: propTypes) => {
    return (
        <ModalWrapper classes="!justify-between">
            <p className="font-trajan w-full text-center text-[30px] font-bold">
                {selectedOption == FLOW_ENUM.BUILD_ANOTHER_BRIDGE ? (
                    <>
                        {" "}
                        choose one leader from your army <br />
                        to help you build alternative bridge
                    </>
                ) : selectedOption == FLOW_ENUM.SEE_ME ||
                  selectedOption == FLOW_ENUM.OVER_MY_DEAD_BODY ? (
                    <>choose one leader from your army</>
                ) : selectedOption == FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON ? (
                    <>
                        choose one leader from your army <br /> to help you hit the enemy by cannon
                    </>
                ) : (
                    <>
                        choose one leader from your army <br /> to help you pass the bridge
                    </>
                )}
            </p>
            <div className="mb-5 grid grid-cols-5 justify-items-center gap-y-8">
                {selectedLeaders?.map(item => {
                    const isSelected = selectedSubLeaders?.name == item?.name
                    return (
                        <ImageButton
                            icon={item?.icon}
                            selected={isSelected ? true : false}
                            onClick={() => {
                                if (isSelected) {
                                    setSelectedSubLeaders(null)
                                } else {
                                    setSelectedSubLeaders(item)
                                }
                            }}
                            text={item?.name}
                        />
                    )
                })}
            </div>
            <BorderButton
                size="sm"
                onClick={onClick}
                text={
                    selectedOption == FLOW_ENUM.BUILD_ANOTHER_BRIDGE
                        ? "Build Bridge"
                        : selectedOption == FLOW_ENUM.RACE_FOR_TIME ? 'RACE FOR TIME' :
                            selectedOption == FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON  ?'HIT THE ENEMY ':'SELECT LEADER'
                            
                }
            />
        </ModalWrapper>
    )
}
type propTypes = {
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType|null>>
    selectedLeaders: LeaderType[]
    selectedSubLeaders: LeaderType|null
    selectedOption: FLOW_ENUM
    onClick:VoidFunction
}

