import angel from "../../../../../assets/angel.png"
import check from "../../../../../assets/check.png"
import BorderButton from "../../../../shared/borderButton"
import type { CannonDirectType } from "../../hooks/useFireCannon"
export default function VerticalAngelSection({
    cannonDirection,
    setYValue
}: {
    cannonDirection: CannonDirectType
    setYValue: (value: number) => void
}) {
    return (
        <div className="flex !w-full flex-col gap-3">
            <div className="flex items-center gap-3">
                <img src={angel} height={135} width={135}  className="w-[80px] h-[80px] lg:!w-[135px] lg:!h-[135px]"/>
                <p className="font-trajan !text-lg lg:!text-xl xl:!text-[30px] !leading-none font-bold">
                    choose the <br />
                    vertical angle
                </p>
            </div>
            <div className="flex items-center justify-around">
                {cannonDirection.yAngle?.success ? (
                    <img src={check} />
                ) : (
                    <>
                        <BorderButton
                            size="xs"
                            text="35"
                            bottomBorder={false}
                            isSelected={cannonDirection?.yAngle.value == 35}
                            onClick={() => {
                                setYValue(35)
                            }}
                        />
                        <BorderButton
                            size="xs"
                            text="40"
                            bottomBorder={false}
                            isSelected={cannonDirection?.yAngle.value == 40}
                            onClick={() => {
                                setYValue(40)
                            }}
                        />
                        <BorderButton
                            size="xs"
                            text="43"
                            bottomBorder={false}
                            isSelected={cannonDirection?.yAngle.value == 43}
                            onClick={() => {
                                setYValue(43)
                            }}
                        />
                    </>
                )}
            </div>
        </div>
    )
}
