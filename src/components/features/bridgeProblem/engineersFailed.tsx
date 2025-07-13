import valoriaMap from "../../../assets/valoriaMap-min.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { ManPower } from "../../../types/manPower"
import BorderButton from "../../shared/borderButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import favor from "../../../assets/favor.png"
import { useTranslation } from "react-i18next"

export default function EngineersFailed({
    changePowers,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
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
                    classes="!justify-between !w-[90%] !h-[90] !relative"
                >
                    <img src={favor} />
                    <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
                        {t("eng_failed")}
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
                            text={t("alternate_bridge")}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}
