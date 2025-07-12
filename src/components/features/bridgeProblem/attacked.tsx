import valoriaMap from "../../../assets/valoriaMap-min.png"
import ImageButton from "../../shared/imageButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import seeme from "../../../assets/seeme.png"
import alliez from "../../../assets/alliez.png"
import deadBody from "../../../assets/deadBody.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { LeaderType } from "../../../types/leaders"
import type { ManPower } from "../../../types/manPower"
export default function Attacked({
    setSelectedSubLeaders,
    changeFlowState,
    changePowers
}: {
    changeFlowState: (flow: FLOW_ENUM) => void
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType | null>>
    changePowers: (powers: ManPower) => void
}) {
    return (
        <div className="mt-10 flex h-full w-full flex-col items-center justify-start">
            <div
                style={{
                    backgroundImage: `url(${valoriaMap})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "70%",
                    height: "80%"
                }}
            >
                <ModalWrapper classes="!m-0 py-8 !px-6 !justify-around min-w-[90%]">
                    <p className="font-trajan w-full text-center text-[30px] font-bold">
                        you got attacked while
                        <br />
                        building the bridge
                    </p>
                    <div className="flex w-full items-center justify-center gap-6">
                        <ImageButton
                            icon={deadBody}
                            onClick={() => {
                                setSelectedSubLeaders(null)
                                changeFlowState(FLOW_ENUM.OVER_MY_DEAD_BODY)
                            }}
                            text={`over my dead body`}
                        />
                        <ImageButton
                            icon={seeme}
                            onClick={() => {
                                setSelectedSubLeaders(null)

                                changeFlowState(FLOW_ENUM.SEE_ME)
                            }}
                            text={`you can't see me`}
                        />
                        <ImageButton
                            icon={alliez}
                            onClick={() => {
                                changePowers({ money: -7, army: -7, people: -1 })
                                setSelectedSubLeaders(null)

                                changeFlowState(FLOW_ENUM.CANNON_ATTACK)
                            }}
                            text={`allez allez allez take 1/2 time`}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}
