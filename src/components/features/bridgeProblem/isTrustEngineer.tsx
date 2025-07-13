import { FLOW_ENUM } from "../../../types/FLowEnum"
import ImageButton from "../../shared/imageButton"
import Modal from "../../shared/modal"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import yesIcon from "../../../assets/icons/yes.svg"
import noIcon from "../../../assets/icons/noCrop.svg"
export default function IsTrustEngineer({ changeFlowState }: { changeFlowState: (flow: FLOW_ENUM) => void }) {
    return (
        <Modal noBackground>
            <ModalWrapper   parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative">
                <p className="text-2xl text-white">do you trust him ?</p>
                <div className="flex w-[400px] items-center justify-between">
                    <ImageButton
                        icon={yesIcon}
                        onClick={() => {
                            changeFlowState(FLOW_ENUM.ENGINEERS_FAILED)
                        }}
                        text="YES"
                    />
                    <ImageButton
                        icon={noIcon}
                        onClick={() => {
                            changeFlowState(FLOW_ENUM.HOW_TO_PASS_BRIDGE)
                        }}
                        text="NO"
                    />
                </div>
            </ModalWrapper>
        </Modal>
    )
}