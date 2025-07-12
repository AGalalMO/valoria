import valoriaMap from "../../../../assets/valoriaMap.png"
import { ModalWrapper } from "../../enterValoria/components/modalWrapper"
import cannon from "../../../../assets/cannon.png"
import BorderButton from "../../../shared/borderButton"
import { FLOW_ENUM } from "../../../../types/FLowEnum"

export default function CannonAttack({ changeFlowState }: { changeFlowState: (flow: FLOW_ENUM) => void }) {
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
                <ModalWrapper classes="m-20 py-8 !px-6 !justify-around">
                    <img src={cannon} />
                    <p className="font-trajan w-full text-center text-[30px] font-bold">
                        you attacked by a cannon you have a cannon too
                    </p>
                    <div className="max-w-[700px]">
                        <BorderButton
                            onClick={() => {
                                changeFlowState(FLOW_ENUM.CHOOSE_LEADER_FOR_CANNON)
                            }}
                            text={`choose leader to hit the enemy`}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}
