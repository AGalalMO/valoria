import ImageButton from "../../shared/imageButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import actFirst from "../../../assets/icons/actFast.png"
import valoriaMap from "../../../assets/valoriaMap-min.png"
import race from "../../../assets/raace.png"
import favor from "../../../assets/favor.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { LeaderType } from "../../../types/leaders"
import { useTranslation } from "react-i18next"
export default function HowToPass({
    setSelectedSubLeaders,
    changeFlowState
}: {
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType | null>>
    changeFlowState: (flow: FLOW_ENUM) => void
    }) {
    const {t}=useTranslation()
    return (
        <div className="flex h-full w-full flex-col items-center justify-start lg:mt-10">
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
                    classes="!justify-around !w-[100%] h-[90%] l !relative"
                >
                    <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
                        {t("what_to_pass_brige")}
                    </p>
                    <div className="flex w-full flex-wrap items-center justify-center gap-6 lg:!flex-nowrap">
                        <ImageButton
                            size="xxl"
                            icon={race}
                            onClick={() => {
                                setSelectedSubLeaders(null)
                                changeFlowState(FLOW_ENUM.RACE_FOR_TIME)
                            }}
                            text={t("race_time_now")}
                        />
                        <ImageButton
                            size="xl"
                            icon={actFirst}
                            onClick={() => {
                                changeFlowState(FLOW_ENUM.BUILD_ANOTHER_BRIDGE)
                            }}
                            text={t("alternate_bridge")}
                        />
                        <ImageButton
                            size="xxl"
                            icon={favor}
                            onClick={() => {
                                changeFlowState(FLOW_ENUM.IS_TRUST_ENGINEERS)
                            }}
                            text={t("negotiate")}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}