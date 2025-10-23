import wrong from "../assets/x.png"
import check from "../assets/check.png"
import { useTranslation } from "react-i18next"

export const ButtonDescription = ({
    onClick,
    isSelected,
    icon,
    text,
    description,
    description2,
    isWrong,
    onClickImage,
    small,
    isDone,
    index,
    removeDesc
}: {
    onClick: VoidFunction
    isSelected: boolean
    icon?: string
    text: string
    description?: string
    description2?: string
    isWrong?: boolean
    onClickImage?: VoidFunction
    small?: boolean
    isDone?: boolean
    index?: number
    removeDesc?:boolean
    }) => {
    const {i18n}=useTranslation()
    return (
        <div
            dir={i18n?.language=='ar'?'rtl':'ltr'}
            className={`flex w-full cursor-pointer items-center gap-4 rounded-md border border-[#DBBD51] p-2 ${isSelected ? "bg-[#DBBD51]/60" : isWrong ? "bg-[#DBBD51]/30" : "hover:bg-[#DBBD51]/60"}`}
            onClick={isWrong || isDone ? () => {} : onClick}
        >
            {icon ? (
                <img
                    onClick={e => {
                        if (onClickImage) {
                            e?.stopPropagation()
                            onClickImage()
                        }
                    }}
                    src={icon}
                    width={small ? 80 : 100}
                    height={small ? 80 : 100}
                />
            ) : index ? (
                <p className="text-2xl">{index}-</p>
            ) : null}
            <div className="flex h-full flex-col justify-around">
                <p className={`text-lg text-white font-bold ${small ? "xl:text-xl" : "xl:text-2xl"}`}>
                    {text}
                </p>
                {description ? (
                    <p
                        className={`text-base font-semibold text-white/70 ${small ? "xl:text-lg" : "xl:text-xl"}`}
                    >
                        {!icon ? description : (!isDone||!removeDesc) ? description : null}
                    </p>
                ) : null}
                {description2 && !isDone ? (
                    <p className="text-lg font-semibold text-white/70 xl:text-xl">{description2}</p>
                ) : null}
            </div>
            {isWrong ? (
                <img
                    src={wrong}
                    width={50}
                    height={50}
                    className="h-4 w-4 md:!h-8 md:!w-8 lg:!h-10 lg:!w-10"
                />
            ) : isDone ? (
                <img
                    src={check}
                    width={50}
                    height={50}
                    className="h-4 w-4 md:!h-8 md:!w-8 lg:!h-10 lg:!w-10"
                />
            ) : null}
        </div>
    )
}