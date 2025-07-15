import type { LeaderType } from "../../../types/leaders";
import bg from "../../../assets/backgrounds/modal.png"
import check from "../../../assets/check.png"
import wrong from "../../../assets/x.png"
import closeModalIcon from "../../../assets/closeModal.png"
import { useTranslation } from "react-i18next";
import BorderButton from "../../shared/borderButton";

export default function LeaderPowers({
    leader,
    closeModal,
    onClickButton,
    btnText
}: {
    leader: LeaderType
    closeModal: VoidFunction
        onClickButton?: VoidFunction
    btnText?:string
}) {
    const { t, i18n } = useTranslation()
    return (
        <div
            className="absolute start-5 top-5 z-50 h-[90%] w-[90%] border-5 border-[#DC8E2F] p-4 py-10"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center"
            }}
        >
                <div
                    className={`relative ${i18n?.language == "ar" ? "-ms-6 justify-start" : "-me-6 justify-end"} -mt-12 flex`}
                >
                    <img
                        src={closeModalIcon}
                        height={50}
                        width={50}
                        className="cursor-pointer"
                        onClick={closeModal}
                    />
                </div>
            <div className="flex flex-col h-full justify-around">
                <div className="flex items-center gap-4" dir={i18n?.language == "ar" ? "rtl" : ""}>
                    <img
                        src={leader?.icon}
                        width={300}
                        height={300}
                        className="!h-[180] !w-[190px] xl:!h-[300px] xl:!w-[340px]"
                    />
                    <div className="flex flex-col gap-2">
                        {leader?.pros?.map(adv => (
                            <div
                                className="flex items-center gap-1"
                                dir={i18n?.language == "ar" ? "rtl" : ""}
                            >
                                <img src={check} className="h-6 w-6 xl:h-10 xl:w-10" />
                                <p className="text-sm text-white xl:text-lg">{t(adv)}</p>
                            </div>
                        ))}
                        {leader?.cons?.map(adv => (
                            <div
                                className="flex items-center gap-1"
                                dir={i18n?.language == "ar" ? "rtl" : ""}
                            >
                                <img src={wrong} className="h-6 w-6 xl:h-10 xl:w-10" />
                                <p className="text-sm text-white xl:text-lg">{t(adv)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <BorderButton
                        text={btnText?btnText:t("select_your_leader")}
                        size="sm"
                        onClick={onClickButton as VoidFunction}
                    />
                </div>
            </div>
        </div>
    )
}