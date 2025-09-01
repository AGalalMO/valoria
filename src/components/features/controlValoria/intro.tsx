import type { LeaderType } from "../../../types/leaders"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import type { ManPower } from "../../../types/manPower"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import BorderButton from "../../shared/borderButton"
export default function ControlValoriaIntro({  changeFlowState }: propTypes) {

    const { t } = useTranslation()
      

    

    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            <p className="font-trajan w-full text-center text-lg font-bold xl:text-4xl">
                {t("finally_we_entered_valoria")}
            </p>
            <p className="font-trajan w-full text-center font-bold xl:text-2xl">
                {t("finally_we_entered_valoria1")}
            </p>
            <BorderButton size="sm" text="NEXT" onClick={() => {
                changeFlowState(FLOW_ENUM.CONTROL_VALORIA2)
            }}/>
        </ModalWrapper>
    )
}
type propTypes = {
    selectedLeaders: LeaderType[]
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
}
