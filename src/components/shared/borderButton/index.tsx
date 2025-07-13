/* eslint-disable @typescript-eslint/no-explicit-any */
import buttonIcon from "../../../assets/icons/buttonIcon.svg"
import buttonBorder from "../../../assets/icons/buttonBorder.svg"

export default function BorderButton({
    text,
    onClick,
    bottomBorder = true,
    size = "lg",
    isSelected
}: {
    text: string
    onClick: (target?: any) => void
    bottomBorder?: boolean
    size?: "md" | "lg" | "sm" | "xs"
    isSelected?:boolean
}) {
    return (
        <button
            onClick={onClick}
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
        >
            <div className="flex flex-row items-center gap-1">
                <img src={buttonIcon} width={16} height={16} />
                <p
                    className={`font-trajan ${size == "lg" ? "text-2xl lg:text-[48px]" : size == "md" ? "text-2xl lg:text-[40px]" : size == "xs" ? "text-base lg:text-2xl" : size == "sm" ? "text-2xl lg:text-3xl" : "text-2xl lg:text-4xl"} m-0 font-normal ${isSelected ? "text-[#DBBD51]" : "text-white"} group-hover:text-[#DBBD51]`}
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
