import valoriaMap from "../../../assets/valoriaMap.png"
import BorderButton from "../../shared/borderButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import bridgee from "../../../assets/bridgee.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { ManPower } from "../../../types/manPower"
import type { LeaderType } from "../../../types/leaders"

export default function RaceTimeFailed({
    changePowers,
    setSelectedSubLeaders,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType | null>>
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
                <ModalWrapper classes="m-20 py-8 !px-6 !justify-around">
                    <img src={bridgee} />
                    <p className="font-trajan w-full text-center text-[30px] font-bold">
                        your about to defuse the bridge but it blows up now you have to build
                        alternative bridge
                    </p>
                    <div className="max-w-[700px]">
                        <BorderButton
                            onClick={() => {
                                changePowers({ army: -10, people: -9, money: -5 })
                                setSelectedSubLeaders(null)
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
