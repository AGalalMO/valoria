import type { LeaderType } from "../../../types/leaders"
import bg from "../../../assets/backgrounds/modal.png"
import box from "../../../assets/box.png"
import mark from "../../../assets/mark.png"
import closeModalIcon from "../../../assets/closeModal.png"
import { useTranslation } from "react-i18next"

export default function LeaderJobs({
    leader,
    closeModal,
    selectJob,
    selectedJobs
}: {
    leader: LeaderType
    closeModal: VoidFunction
    selectJob: (index: number) => void
    selectedJobs: { index: number | null; leader: LeaderType }[]
    }) {
    const {t,i18n}=useTranslation()
    const jobs = [t("the_warden"), t("the_marshal"), t("architect"), t("overseer"), t("commander")]

    return (
        <div
            className="absolute start-5 top-5 z-50 h-[90%] w-[90%] border-5 border-[#DC8E2F] p-4 py-10"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center"
            }}
        >
            <div
                className="relative -me-6 -mt-12 flex justify-end"
                dir={i18n?.language == "ar" ? "rtl" : "ltr"}
            >
                <img
                    src={closeModalIcon}
                    height={50}
                    width={50}
                    className="cursor-pointer"
                    onClick={closeModal}
                />
            </div>
            <div className="flex items-center gap-8" dir={i18n?.language == "ar" ? "rtl" : "ltr"}>
                <img
                    src={leader?.icon}
                    width={300}
                    height={300}
                    className="!h-[180] !w-[190px] xl:!h-[300px] xl:!w-[340px]"
                />
                <div className="flex flex-col gap-2" dir={i18n?.language == "ar" ? "rtl" : "ltr"}>
                    <p className="text-xl font-bold text-white xl:text-3xl">{t(leader?.name)}</p>
                    {jobs?.map((job, index) => {
                        const currentJob = selectedJobs?.filter(item => item?.index == index)?.[0]
                        const disabled =
                            currentJob?.index == index && currentJob?.leader?.name != leader.name
                        return (
                            <div
                                className={`flex items-center gap-4 ${disabled ? "opacity-60" : ""}`}
                                onClick={() => {
                                    if (disabled) return
                                    else selectJob(index)
                                }}
                            >
                                <div className="relative cursor-pointer">
                                    <img src={box} className="h-6 w-6 xl:h-10 xl:w-10" />
                                    {selectedJobs?.filter(item => item?.index == index)?.[0] ? (
                                        <img
                                            src={mark}
                                            className="absolute start-1 -top-3 z-30 h-6 w-6 xl:h-10 xl:w-10"
                                        />
                                    ) : null}
                                </div>
                                <p className="text-sm text-white xl:text-lg">
                                    {
                                        <>
                                            {job?.replace("<br/>",'')}
                                          
                                            
                                        </>
                                    }
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
