import power from "../../../../../assets/power.png"
import type { CannonDirectType } from "../../hooks/useFireCannon"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"

export default function HitPowerSection({
    cannonDirection,
    setPowers
}: {
    cannonDirection: CannonDirectType
    setPowers: (value: number) => void
}) {
    return (
        <div className="flex !w-full flex-col gap-2">
            <div className="flex items-center gap-3">
                <img src={power} height={135} width={135} />
                <p className="font-trajan text-text text-[30px] !leading-none font-bold">
                    choose the <br />
                    hit power
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
