import { Way_IN } from "../../../types/Enums"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { ManPower } from "../../../types/manPower"
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
    progress,
    setFeedBack
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
    const calculateManPower = (way: Way_IN, currentPower: ManPower) => {
        let result: ManPower = currentPower
        switch (way) {
            case Way_IN.SPY:
                result = { money: 98, people: 98, army: 102 }
                break
            case Way_IN.ALLIE:
                result = { money: 100, people: 98, army: 101 }
                break
            case Way_IN.ATTACK:
                result = { money: 95, people: 102, army: 100 }
                break
            default:
                break
        }

        return result
    }
    const onSelectWayIn = () => {
        const newPowers = calculateManPower(way as Way_IN, progress.manPower)
        setFeedBack((prev) => {
            return {
                ...prev,
                people:
                    newPowers?.people > 100
                        ? `people_increaseXX${newPowers.people % 100}`
                        : newPowers?.people != 100
                          ? `people_decreaseXX${100 - newPowers.people}`
                          : null,
                army:
                    newPowers?.army > 100
                        ? `army_increaseXX${newPowers.army % 100}`
                        : newPowers?.army != 100
                          ? `army_decreaseXX${100 - newPowers.army}`
                          : null,
                money:
                    newPowers?.money > 100
                        ? `money_increaseXX${newPowers.money % 100}`
                        : newPowers?.money != 100
                          ? `money_decreaseXX${100 - newPowers.money}`
                          : null
            }
        })


     


        setProgress(prev => {
            return {
                ...prev,
                manPower: newPowers,
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
