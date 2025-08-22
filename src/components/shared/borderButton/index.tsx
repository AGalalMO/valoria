/* eslint-disable @typescript-eslint/no-explicit-any */
import buttonIcon from "../../../assets/icons/buttonIcon.svg"
import buttonBorder from "../../../assets/icons/buttonBorder.svg"
import wrong from "../../../assets/x.png"

export default function BorderButton({
    text,
    onClick,
    bottomBorder = true,
    size = "lg",
    isSelected,
    disabled,
    isWrongAnswer
}: {
    text: string
    onClick: (target?: any) => void
    bottomBorder?: boolean
    size?: "xxs"|"md" | "lg" | "sm" | "xs"
    isSelected?: boolean
    disabled?: boolean
    isWrongAnswer?: boolean
}) {
    return (
        <button
            onClick={onClick}
            disabled={disabled ?? false}
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
        >
            <div className="flex flex-row items-center gap-1">
                {isWrongAnswer ? (
                    <img src={wrong} className="h-4 w-4 xl:h-6 xl:w-6" />
                ) : (
                    <img src={buttonIcon} width={16} height={16} />
                )}

                <p
                    className={`font-trajan ${size == "lg" ? "text-2xl xl:text-[48px]" : size == "md" ? "text-2xl xl:text-[40px]" : size == "xs" ? "text-base xl:text-2xl" : size == "sm" ? "text-2xl xl:text-3xl" : size == "xxs" ? "text-base xl:text-xl" : "text-2xl xl:text-4xl"} m-0 font-normal ${isSelected ? "text-[#DBBD51]" : "text-white"} group-hover:text-[#DBBD51]`}
                >
                    {text}
                </p>
                <img src={buttonIcon} width={16} height={16} />
            </div>
            {bottomBorder ? (
                <img
                    width={size == "lg" ? '"100%"' : size == "md" ? "90%" : "70%"}
                    src={buttonBorder}
                />
            ) : null}
        </button>
    )
}
