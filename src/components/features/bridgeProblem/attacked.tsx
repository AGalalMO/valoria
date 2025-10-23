
import type { LeaderType } from "../../../types/leaders"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import type { ManPower } from "../../../types/manPower"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import BorderButton from "../../shared/borderButton";
export default function AttackedDESC({ changeFlowState }: propTypes) {
  
    const { t } = useTranslation()


    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            <p className="font-trajan text-white w-full text-center text-lg font-bold xl:text-3xl">
                {t("attacked_building")}
            </p>
            <p className="font-trajan w-full text-center font-bold text-white xl:text-xl">
                {t("attacked_building1")}
            </p>
            <BorderButton
                size="sm"
                text={t("next")}
                onClick={() => {
                    changeFlowState(FLOW_ENUM.GOT_ATTACKED_SECOND)
                }}
            />
        </ModalWrapper>
    )
}
type propTypes = {
    selectedLeaders: LeaderType[]
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
}

