/* eslint-disable @typescript-eslint/no-explicit-any */
import buttonIcon from "../../../assets/icons/buttonIcon.svg"

export default function ImageButton({
    text,
    icon,
    onClick,
    selected,
    size
}: {
    text: string
    icon: string
    onClick: (target?: any) => void
    selected?: boolean
    size?: "lg" | "normal"|'xl'|'xxl'
}) {
    return (
        <button
            onClick={onClick}
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
        >
            <img src={icon} width={136} height={136} className="w-[100px] h-[100px] lg:!w-[136px] lg:!h-[136px]" />
            <div className="flex flex-row items-center gap-2">
                <img src={buttonIcon} width={16} height={16} />
                <p
                    className={`font-trajan m-0  !text-base lg:!text-[24px] font-normal uppercase ${selected ? "text-[#DBBD51]" : "text-white"} group-hover:text-[#DBBD51] ${size == "lg" ? "max-w-[250px]" : size == "normal" ? "max-w-[200px]" : size == "xl" ? "max-w-[240px] lg:!text-[20px]" : size=="xxl"?'!w-[260px] lg:!text-[20px]':""}`}
                >
                    {text}
                </p>
                <img src={buttonIcon} width={16} height={16} />
            </div>
        </button>
    )
}
