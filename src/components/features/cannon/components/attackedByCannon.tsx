import valoriaMap from "../../../../assets/valoriaMap-min.png"
import { ModalWrapper } from "../../enterValoria/components/modalWrapper"
import cannon from "../../../../assets/cannon.png"
import BorderButton from "../../../shared/borderButton"
import { FLOW_ENUM } from "../../../../types/FLowEnum"

export default function CannonAttack({ changeFlowState }: { changeFlowState: (flow: FLOW_ENUM) => void }) {
    return (
        <div className="lg:mt-10 flex h-full w-full flex-col items-center justify-start">
            <div
                style={{
                    backgroundImage: `url(${valoriaMap})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
                className="h-[80vh] w-[95vw] lg:!h-[70vh] lg:!w-[80vw]"
            >
                <ModalWrapper
                    parentClass="!w-full !justify-center"
                    classes="!justify-between !w-[90%] !h-[90] !relative"
                >
                    <img src={cannon} />
                    <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
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
