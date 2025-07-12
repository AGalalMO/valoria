import angel from "../../../../../assets/angel.png"
import type { CannonDirectType } from "../../hooks/useFireCannon"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"

export default function HorizontalAngelSection({
    cannonDirection,
    setXValue
}: {
    cannonDirection: CannonDirectType
    setXValue:(value:number)=>void
}) {
    return (
        <div className="flex !w-full flex-col gap-2">
            <div className="flex items-center gap-3">
                <img src={angel} height={135} width={135} />
                <p className="font-trajan text-text text-[30px] !leading-none font-bold">
                    choose the <br /> horizontal angel
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.xAngle.success ? (
                    <img src={check} />
                ) : (
                    <>
                        <BorderButton
                            size="xs"
                            text="2.25 to the left"
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == 2.25}
                            onClick={() => {
                                setXValue(2.25)
                            }}
                        />

                        <BorderButton
                            size="xs"
                            text="0 direct to the point"
                            bottomBorder={false}
                            isSelected={cannonDirection?.xAngle.value == 0}
                            onClick={() => {
                                setXValue(0)
                            }}
                        />
                        <BorderButton
                            text={`2.25 to the right`}
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
