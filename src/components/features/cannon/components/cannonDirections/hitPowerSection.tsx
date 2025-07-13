import power from "../../../../../assets/power.png"
import type { CannonDirectType } from "../../hooks/useFireCannon"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"
import { useTranslation } from "react-i18next"

export default function HitPowerSection({
    cannonDirection,
    setPowers
}: {
    cannonDirection: CannonDirectType
    setPowers: (value: number) => void
    }) {
    const {t,i18n}=useTranslation()
    return (
        <div className="flex !w-full flex-col gap-2">
            <div
                className={`flex ${i18n?.language == "ar" ? "flex-row-reverse" : ""} items-center gap-3`}
            >
                <img
                    src={power}
                    height={135}
                    width={135}
                    className="h-[80px] w-[80px] lg:!h-[135px] lg:!w-[135px]"
                />
                <p className="font-trajan !text-lg !leading-none font-bold lg:!text-xl xl:!text-[30px]">
                    {t("choose_hit_power")}
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.power.success ? (
                    <img src={check} />
                ) : (
                    <>
                        <BorderButton
                            size="xs"
                            text="380"
                            bottomBorder={false}
                            isSelected={cannonDirection?.power.value == 380}
                            onClick={() => {
                                setPowers(380)
                            }}
                        />
                        <BorderButton
                            size="xs"
                            text="410"
                            bottomBorder={false}
                            isSelected={cannonDirection?.power.value == 410}
                            onClick={() => {
                                setPowers(410)
                            }}
                        />
                        <BorderButton
                            size="xs"
                            text="450"
                            bottomBorder={false}
                            isSelected={cannonDirection?.power.value == 450}
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
