import { FLOW_ENUM } from "../../../types/FLowEnum"
import ImageButton from "../../shared/imageButton"
import Modal from "../../shared/modal"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import yesIcon from "../../../assets/icons/yes.svg"
import noIcon from "../../../assets/icons/noCrop.svg"
import { useTranslation } from "react-i18next"
export default function IsTrustEngineer({ changeFlowState }: { changeFlowState: (flow: FLOW_ENUM) => void }) {
    const {t}=useTranslation()
    return (
        <Modal background={'../'}>
            <ModalWrapper
                parentClass="!w-full !justify-center !min-w-[650px] lg:!min-w-[800px] !h-[400px]"
                classes="!justify-around !w-[90%] !h-[90] !relative"
            >
                <p className="text-2xl text-white">{t("trusted")}</p>
                <div className="flex w-[400px] items-center justify-between">
                    <ImageButton
                        icon={yesIcon}
                        onClick={() => {
                            changeFlowState(FLOW_ENUM.ENGINEERS_FAILED)
                        }}
                        text={t("yes")}
                    />
                    <ImageButton
                        icon={noIcon}
                        onClick={() => {
                            changeFlowState(FLOW_ENUM.HOW_TO_PASS_BRIDGE)
                        }}
                        text={t("no")}
                    />
                </div>
            </ModalWrapper>
        </Modal>
    )
}