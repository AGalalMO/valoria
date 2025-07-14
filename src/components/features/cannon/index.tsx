import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import BorderButton from "../../shared/borderButton"
import type { ManPower } from "../../../types/manPower"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import NotesSection from "./components/cannonDirections/notesSection"
import useFireCannon from "./hooks/useFireCannon"
import TryAgainModal from "../../shared/tryAgainModal"
import HorizontalAngelSection from "./components/cannonDirections/horizontalAngelSection"
import HitPowerSection from "./components/cannonDirections/hitPowerSection"
import VerticalAngelSection from "./components/cannonDirections/verticalAngelSection"
import { useTranslation } from "react-i18next"
export default function FireCannon({
    changePowers,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
}) {
 
const {t,i18n}=useTranslation()
    const { hitByCannon, setPowers, setXValue, setYValue, tryAgain, setTryAgain, cannonDirection } =
        useFireCannon({ changePowers, changeFlowState })
    return (
        <div
            className={`ms-5 me-5 flex ${i18n?.language == "ar" ? "flex-row-reverse" : ""} w-[95%] items-start justify-center gap-4 xl:ms-[5%] xl:me-[5%] xl:!w-[90%]`}
        >
            <ModalWrapper
                parentClass="!w-full !justify-center  !h-fit !w-fit "
                classes="!justify-start !w-[90%]  !relative"
            >
                {tryAgain ? (
                    <TryAgainModal
                        buttonText={t("hit_enemy")}
                        closeModal={() => {
                            setTryAgain(false)
                        }}
                        headerText1={t("wrong_aiming")}
                        headerText2={t("try_again")}
                    />
                ) : (
                    <div className="flex !w-full flex-col justify-start pb-20 xl:pb-0 gap-4">
                        <VerticalAngelSection
                            cannonDirection={cannonDirection}
                            setYValue={setYValue}
                        />
                        <HitPowerSection cannonDirection={cannonDirection} setPowers={setPowers} />
                        <HorizontalAngelSection
                            cannonDirection={cannonDirection}
                            setXValue={setXValue}
                        />

                        <div className="flex w-full items-center justify-center pt-4">
                            <BorderButton onClick={hitByCannon} text={t("hit_enemy")} />
                        </div>
                    </div>
                )}
            </ModalWrapper>
            <NotesSection />
        </div>
    )
}
