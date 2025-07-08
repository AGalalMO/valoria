/* eslint-disable @typescript-eslint/no-explicit-any */
import buttonIcon from "../../../assets/icons/buttonIcon.svg"

export default function ImageButton({
    text,
    icon,
    onClick,
    selected
}: {
    text: string
    icon: string
    onClick: (target?: any) => void
    selected?:boolean
}) {
    return (
        <button
            onClick={onClick}
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
        >
            <img src={icon} width={136} height={136} />
            <div className="flex flex-row items-center gap-2">
                <img src={buttonIcon} width={16} height={16} />
                <p className={`font-trajan m-0 max-w-[200px] text-[28px] font-normal  ${selected?'text-[#DBBD51]':'text-white'} group-hover:text-[#DBBD51]`}>
                    {text}
                </p>
                <img src={buttonIcon} width={16} height={16} />
            </div>
        </button>
    )
}
