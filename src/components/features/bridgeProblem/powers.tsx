import type { LeaderType } from "../../../types/leaders"
import bg from "../../../assets/backgrounds/modal.png"
import closeModalIcon from "../../../assets/closeModal.png"
import { useTranslation } from "react-i18next"
import { ButtonDescription } from "../../buttonDescription"

export default function Powers({ leaders, closeModal }: { leaders: LeaderType[]; closeModal :VoidFunction}) {
    const { t, i18n } = useTranslation()
    return (
        <div
            className="absolute start-5 top-5  h-[90%] w-[90%] z-[100] overflow-x-hidden overflow-y-auto border-5 border-[#DC8E2F] p-4 py-10"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center"
            }}
        >
            <div
                className="relative -me-6 -mt-12 z-[100] flex justify-end"
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
           
            <div className="flex flex-col gap-2 overflow-auto max-h-[95%]">
                {leaders?.map(item => {
                    return (
                        <ButtonDescription
                            icon={item?.icon}
                            isSelected={false}
                            onClick={() => {
                                
                            }}
                            text={t(item?.name)}
                            description={item?.desc2}
                        />
                    )
                })}
            </div>
        </div>
    )
}
