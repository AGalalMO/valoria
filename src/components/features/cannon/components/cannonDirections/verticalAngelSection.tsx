import { useTranslation } from "react-i18next"
import angel from "../../../../../assets/angel.png"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"
import type { CannonDirectType } from "../../hooks/useFireCannon"
export default function VerticalAngelSection({
    cannonDirection,
    setYValue,
    wrongAnswers
}: {
    cannonDirection: CannonDirectType
    setYValue: (value: number) => void
    wrongAnswers: number[]
}) {
    const { t, i18n } = useTranslation()
    return (
        <div className="flex !w-full flex-col gap-3">
            <div
                className={`flex ${i18n?.language == "ar" ? "flex-row-reverse" : ""} items-center gap-3`}
            >
                <img
                    src={angel}
                    height={110}
                    width={110}
                    className="h-[80px] w-[80px] xl:!h-[110px] xl:!w-[110px]"
                />
                <p className="font-trajan !text-lg text-white !leading-none font-bold xl:!text-2xl">
                    {t("choose_vertical")}
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.yAngle?.success ? (
                    <img src={check} width={32} height={32} className="h-8 w-8" />
                ) : (
                    <>
                        <BorderButton
                            size="xxs"
                            text="35"
                            bottomBorder={false}
                            isSelected={cannonDirection?.yAngle.value == 35}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 35) >= 0}
                            onClick={() => {
                                setYValue(35)
                            }}
                        />
                        <BorderButton
                            size="xxs"
                            text="40"
                            bottomBorder={false}
                            isSelected={cannonDirection?.yAngle.value == 40}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 40) >= 0}
                            onClick={() => {
                                setYValue(40)
                            }}
                        />
                        <BorderButton
                            size="xxs"
                            text="45"
                            bottomBorder={false}
                            isSelected={cannonDirection?.yAngle.value == 45}
                            isWrongAnswer={wrongAnswers?.findIndex?.(item => item == 45) >= 0}
                            onClick={() => {
                                setYValue(45)
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
