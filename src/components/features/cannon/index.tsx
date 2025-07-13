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
export default function FireCannon({
    changePowers,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
}) {
 

    const { hitByCannon, setPowers, setXValue, setYValue, tryAgain, setTryAgain, cannonDirection } =
        useFireCannon({ changePowers, changeFlowState })
    return (
        <div className="ms-5 lg:ms-[5%] me-5 lg:me-[5%] flex h-[90%] w-[95%] lg:!w-[90%] items-start justify-center gap-4">
            <ModalWrapper
                parentClass="!w-full !justify-center"
                classes="!justify-start !w-[90%]  !relative"
            >
                {tryAgain ? (
                    <TryAgainModal
                        buttonText="HIT THE ENEMY"
                        closeModal={() => {
                            setTryAgain(false)
                        }}
                        headerText1="Wrong Aiming"
                        headerText2="Try Again"
                    />
                ) : (
                    <div className="flex !w-full flex-col justify-start gap-4">
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
                            <BorderButton onClick={hitByCannon} text="hit the enemy" />
                        </div>
                    </div>
                )}
            </ModalWrapper>
            <NotesSection />
        </div>
    )
}
