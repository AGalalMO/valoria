/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import UserPowers from "../shared/userPowers";
import { ModalWrapper } from "./enterValoria/components/modalWrapper";

export default function TheEnd({ progress }: { progress: any }) {
    const {t}=useTranslation()
    return (
        <ModalWrapper classes="min-w-[500px] lg:!min-w-[800px]  flex flex-col gap-2 xl:!min-w-[1000px]">
            <p className="font-trajan text-center text-[30px] font-bold text-white">{t('theEnd')}</p>
            <p className="w-full text-center text-2xl text-white">{t('finalScore')}</p>
            
            <UserPowers isTheEnd powers={progress.manPower} />
        </ModalWrapper>
    )
}