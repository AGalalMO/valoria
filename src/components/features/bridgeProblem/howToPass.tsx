import ImageButton from "../../shared/imageButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import actFirst from "../../../assets/icons/actFast.png"
import valoriaMap from "../../../assets/valoriaMap-min.png"
import race from "../../../assets/raace.png"
import favor from "../../../assets/favor.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { LeaderType } from "../../../types/leaders"
export default function HowToPass({
    setSelectedSubLeaders,
    changeFlowState
}: {
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType | null>>
    changeFlowState: (flow: FLOW_ENUM) => void
}) {
    return (
        <div className="lg:mt-10 flex h-full w-full flex-col items-center justify-start">
            <div
                style={{
                    backgroundImage: `url(${valoriaMap})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                   
                }}
                className="w-[95vw] lg:!w-[80vw] h-[80vh] lg:!h-[70vh]"
            >
                <ModalWrapper
                    parentClass="!w-full !justify-center"
                    classes="!justify-around !w-[100%] h-[90%] l !relative"
                >
                    <p className="font-trajan w-full text-center text-2xl lg:text-[30px] font-bold">
                        what will you do to pass the bridge
                    </p>
                    <div className="flex w-full items-center flex-wrap lg:!flex-nowrap justify-center gap-6">
                        <ImageButton
                            size="xxl"
                            icon={race}
                            onClick={() => {
                                setSelectedSubLeaders(null)
                                changeFlowState(FLOW_ENUM.RACE_FOR_TIME)
                            }}
                            text={`race against time and go through the bridge`}
                        />
                        <ImageButton
                            size="xl"
                            icon={actFirst}
                            onClick={() => {
                                changeFlowState(FLOW_ENUM.BUILD_ANOTHER_BRIDGE)
                            }}
                            text={`build alternative bridge`}
                        />
                        <ImageButton
                            size="xxl"
                            icon={favor}
                            onClick={() => {
                                changeFlowState(FLOW_ENUM.IS_TRUST_ENGINEERS)
                            }}
                            text={`favor negotiate with captured engineer to defuse   `}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}