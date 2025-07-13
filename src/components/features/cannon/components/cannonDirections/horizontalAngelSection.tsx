import angel from "../../../../../assets/angel.png"
import type { CannonDirectType } from "../../hooks/useFireCannon"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"
import { useTranslation } from "react-i18next"

export default function HorizontalAngelSection({
    cannonDirection,
    setXValue
}: {
    cannonDirection: CannonDirectType
    setXValue:(value:number)=>void
    }) {
        const { t ,i18n} = useTranslation()

    return (
        <div className="flex !w-full flex-col gap-2">
            <div
                className={`${i18n?.language == "ar" ? "flex-row-reverse" : ""} flex items-center gap-3`}
            >
                <img
                    src={angel}
                    height={135}
                    width={135}
                    className="h-[80px] w-[80px] lg:!h-[135px] lg:!w-[135px]"
                />
                <p className="font-trajan !text-lg !leading-none font-bold lg:!text-xl xl:!text-[30px]">
                    {t("choose_horizontal")}
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.xAngle.success ? (
                    <img src={check} />
                ) : (
                    <>
                        <BorderButton
                            size="xs"
                            text={t("toLeft")}
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == 2.25}
                            onClick={() => {
                                setXValue(2.25)
                            }}
                        />

                        <BorderButton
                            size="xs"
                            text={t("direct_to_point")}
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == 0}
                            onClick={() => {
                                setXValue(0)
                            }}
                        />
                        <BorderButton
                            text={t("toRight")}
                            size="xs"
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == -2.25}
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
