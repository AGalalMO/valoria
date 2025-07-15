import { ModalWrapper } from "./features/enterValoria/components/modalWrapper";
import BorderButton from "./shared/borderButton";
import { useTranslation } from "react-i18next";

export default function SelectLanguage({changeFlow}:{changeFlow:VoidFunction}) {
    const { t, i18n } = useTranslation()
     const changeLanguage = (lng: string) => {
         i18n.changeLanguage(lng)
         changeFlow()
     }
    return (
        <ModalWrapper>
            <div style={{ position: "relative", width: "100%" }} className="flex flex-col gap-12">
                <div className="flex flex-col gap-4">
                    <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                        {t("welcome")}
                    </p>
                    <p className="font-trajan w-full text-center text-xl font-bold xl:text-[26px]">
                        {t("choose_lang")}
                    </p>
                </div>
                <div className="flex flex-row items-center">
                    <BorderButton
                        onClick={() => {
                            changeLanguage("ar")
                        }}
                        text={t("arabic")}
                        size="sm"
                    />
                    <BorderButton
                        onClick={() => {
                            changeLanguage("en")
                        }}
                        text={t("english")}
                        size="sm"
                    />
                </div>
            </div>
        </ModalWrapper>
    )
}