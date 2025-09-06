import { Way_IN } from "../../../types/Enums"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import allie from "../../../assets/handShake.jpeg"
import spy from "../../../assets/icons/spy.png"
import attack from "../../../assets/icons/attack.png"
import type { UserProgressType } from "../../../types/UserProgress"
import { ModalWrapper } from "./components/modalWrapper"
import { useTranslation } from "react-i18next"
import BorderButton from "../../shared/borderButton"
import { useState, type Dispatch, type SetStateAction } from "react"
import { ButtonDescription } from "../../buttonDescription"
export const SelectValoriaWayIn = ({
    setProgress,
  
}: {
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
    progress: UserProgressType
    setFeedBack: Dispatch<
        SetStateAction<{
            people: string|null
            army: string|null
            money: string | null
            info:string|null
        }>
    >
}) => {
    const { t } = useTranslation()
    const [way, setWay] = useState<Way_IN | null>(null)

    const onSelectWayIn = () => {
    
     


        setProgress(prev => {
            return {
                ...prev,
                selectedWayIn: way as Way_IN,
                currentFlow: FLOW_ENUM.SELECT_ROAD
            }
        })
    }

    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-around !w-[90%] !h-[90]
            !relative"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[26px]">
                {t("way_map")}
            </p>
            <div className="flex flex-col items-start gap-8">
                <ButtonDescription
                    description={t("send_spy1")}
                    icon={spy}
                    text={t("send_spy")}
                    isSelected={way == Way_IN.SPY}
                    onClick={() => {
                        setWay(Way_IN.SPY)
                    }}
                />
                <ButtonDescription
                    description={t("favour_allie1")}
                    icon={allie}
                    text={t("favour_allie")}
                    isSelected={way == Way_IN.ALLIE}
                    onClick={() => {
                        setWay(Way_IN.ALLIE)
                    }}
                />
                <ButtonDescription
                    description={t("attack_nw1")}
                    icon={attack}
                    text={t("attack_nw")}
                    isSelected={way == Way_IN.ATTACK}
                    onClick={() => {
                        setWay(Way_IN.ATTACK)
                    }}
                />

                <div className="flex w-full justify-center">
                    <BorderButton
                        size="sm"
                        disabled={way == null}
                        text={t("select")}
                        onClick={onSelectWayIn}
                    />
                </div>
            </div>
        </ModalWrapper>
    )
}
