import valoriaMap from "../../../assets/valoriaMap-min.png"
import BorderButton from "../../shared/borderButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import bridgee from "../../../assets/bridgee.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { ManPower } from "../../../types/manPower"
import type { LeaderType } from "../../../types/leaders"
import { useTranslation } from "react-i18next"

export default function RaceTimeFailed({
    changePowers,
    setSelectedSubLeaders,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType | null>>
    changeFlowState: (flow: FLOW_ENUM) => void
    }) {
    const {t}=useTranslation()
    return (
        <div className="flex h-full w-full flex-col items-center justify-start xl:mt-10">
            <div
                style={{
                    backgroundImage: `url(${valoriaMap})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
                className="h-[80vh] w-[95vw] xl:!h-[70vh] xl:!w-[80vw]"
            >
                <ModalWrapper
                    parentClass="!w-full !justify-center"
                    classes="!justify-between !w-[90%] !h-[90] !relative"
                >
                    <img src={bridgee} />
                    <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                        {t("race_time_failed_head")}
                    </p>
                    <div className="max-w-[700px]">
                        <BorderButton
                            onClick={() => {
                                changePowers({ army: -10, people: -9, money: -5 })
                                setSelectedSubLeaders(null)
                                changeFlowState(FLOW_ENUM.BUILD_ANOTHER_BRIDGE)
                            }}
                            text={t("alternate_bridge")}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}
