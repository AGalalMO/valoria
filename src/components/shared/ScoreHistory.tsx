import { useTranslation } from "react-i18next"
import type { FeedbackType } from "../../types/manPower"
import { ModalWrapper } from "../features/enterValoria/components/modalWrapper"
import BorderButton from "./borderButton"
import type { Dispatch, SetStateAction } from "react"

export const ScoreHistory = ({
    scoreHistory,
    setShowHistory
}: {
    scoreHistory: FeedbackType[]
    setShowHistory: Dispatch<SetStateAction<boolean>>
}) => {
    const { t, i18n } = useTranslation()

    return (
        <div className="absolute z-[100000] text-white flex h-screen w-screen items-center justify-center bg-black/50">
            <ModalWrapper classes="!p-4">
                <div
                    style={{
                        scrollbarWidth: "thin",
                        msScrollbarTrackColor: "transparent"
                    }}
                    dir={i18n?.language == "ar" ? "rtl" : "ltr"}
                    className="flex h-full max-h-[550px] w-full min-w-[450px] flex-col justify-start gap-2 overflow-auto"
                >
                    {scoreHistory?.map(item => (
                        <div className="border border-[#DBBD51] p-1">
                            <p className="text-sm">
                                {t(item?.army?.split("XX")?.[0] as string)}{" "}
                                {item?.army?.split("XX")?.[1]}
                            </p>
                            <p className="text-sm">
                                {t(item?.money?.split("XX")?.[0] as string)}{" "}
                                {item?.money?.split("XX")?.[1]}
                            </p>
                            <p className="text-sm">
                                {t(item?.people?.split("XX")?.[0] as string)}{" "}
                                {item?.people?.split("XX")?.[1]}
                            </p>
                            <p className="text-sm">
                                {t(item?.extraInfo ? item?.extraInfo : (item?.info as string))}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="w-[140px]">
                    <BorderButton
                        text={t("close")}
                        size="xs"
                        onClick={() => {
                            setShowHistory(false)
                        }}
                    />
                </div>
            </ModalWrapper>
        </div>
    )
}