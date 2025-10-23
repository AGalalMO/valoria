import angel from "../../../../../assets/angel.png"
import type { CannonDirectType } from "../../hooks/useFireCannon"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"
import { useTranslation } from "react-i18next"

export default function HorizontalAngelSection({
    cannonDirection,
    setXValue,
    wrongAnswers
}: {
    cannonDirection: CannonDirectType
    setXValue: (value: number) => void
    wrongAnswers: number[]
}) {
    const { t, i18n } = useTranslation()

    return (
        <div className="flex !w-full flex-col gap-2">
            <div
                className={`${i18n?.language == "ar" ? "flex-row-reverse" : ""} flex items-center gap-3`}
            >
                <img
                    src={angel}
                    height={110}
                    width={110}
                    className="h-[80px] w-[80px] xl:!h-[110px] xl:!w-[110px]"
                />
                <p className="font-trajan text-white !text-lg !leading-none font-bold xl:!text-2xl">
                    {t("choose_horizontal")}
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.xAngle.success ? (
                    <img src={check} width={32} height={32} className="h-8 w-8" />
                ) : (
                    <>
                        <BorderButton
                            size="xxs"
                            text={t("toLeft")}
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == 2.25}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 2.25) >= 0}
                            onClick={() => {
                                setXValue(2.25)
                            }}
                        />

                        <BorderButton
                            size="xxs"
                            text={t("direct_to_point")}
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == 0}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 0) >= 0}
                            onClick={() => {
                                setXValue(0)
                            }}
                        />
                        <BorderButton
                            text={t("toRight")}
                            size="xxs"
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == -2.25}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == -2.25) >= 0}
                            onClick={() => {
                                setXValue(-2.25)
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
