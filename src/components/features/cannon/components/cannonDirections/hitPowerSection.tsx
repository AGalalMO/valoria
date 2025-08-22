import power from "../../../../../assets/power.png"
import type { CannonDirectType } from "../../hooks/useFireCannon"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"
import { useTranslation } from "react-i18next"

export default function HitPowerSection({
    cannonDirection,
    setPowers,
    wrongAnswers
}: {
    cannonDirection: CannonDirectType
    setPowers: (value: number) => void
    wrongAnswers:number[]
}) {
    const { t, i18n } = useTranslation()
    return (
        <div className="flex !w-full flex-col gap-2">
            <div
                className={`flex ${i18n?.language == "ar" ? "flex-row-reverse" : ""} items-center gap-3`}
            >
                <img
                    src={power}
                    height={110}
                    width={110}
                    className="h-[80px] w-[80px] xl:!h-[110px] xl:!w-[110px]"
                />
                <p className="font-trajan !text-lg !leading-none font-bold xl:!text-2xl">
                    {t("choose_hit_power")}
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.power.success ? (
                    <img src={check} width={32} height={32} className="h-8 w-8" />
                ) : (
                    <>
                        <BorderButton
                            size="xxs"
                            text="380"
                            bottomBorder={false}
                            isSelected={cannonDirection?.power.value == 380}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 380) >= 0}
                            onClick={() => {
                                setPowers(380)
                            }}
                        />
                        <BorderButton
                            size="xxs"
                            text="420"
                            bottomBorder={false}
                            isSelected={cannonDirection?.power.value == 420}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 420) >= 0}
                            onClick={() => {
                                setPowers(420)
                            }}
                        />
                        <BorderButton
                            size="xxs"
                            text="450"
                            bottomBorder={false}
                            isSelected={cannonDirection?.power.value == 450}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 450) >= 0}
                            onClick={() => {
                                setPowers(450)
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
