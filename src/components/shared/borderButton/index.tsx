/* eslint-disable @typescript-eslint/no-explicit-any */
import buttonIcon from "../../../assets/icons/buttonIcon.svg"
import buttonBorder from "../../../assets/icons/buttonBorder.svg"

export default function BorderButton({
    text,
    onClick
}: {
    text: string
    onClick: (target?: any) => void
}) {
    return (
        <button
            onClick={onClick}
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
        >
            <div className="flex flex-row items-center gap-1">
                <img src={buttonIcon} width={16} height={16} />
                <p className="font-trajan m-0 text-[48px] font-normal text-white group-hover:text-[#DBBD51]">
                    {text}
                </p>
                <img src={buttonIcon} width={16} height={16} />
            </div>
            <img width={"100%"} src={buttonBorder} />
        </button>
    )
}
