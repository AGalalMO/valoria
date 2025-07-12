import valoriaMap from "../../../assets/valoriaMap-min.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { ManPower } from "../../../types/manPower"
import BorderButton from "../../shared/borderButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import favor from "../../../assets/favor.png"

export default function EngineersFailed({
    changePowers,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
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
                    <img src={favor} />
                    <p className="font-trajan w-full text-center text-[30px] font-bold">
                        the engineer betrays you <br /> now you have to build alternative bridge
                    </p>
                    <div className="max-w-[700px]">
                        <BorderButton
                            onClick={() => {
                                changePowers({
                                    money: -6,
                                    army: -8,
                                    people: -7
                                })

                                changeFlowState(FLOW_ENUM.BUILD_ANOTHER_BRIDGE)
                            }}
                            text="build alternative bridge"
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}
