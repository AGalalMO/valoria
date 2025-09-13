import { useTranslation } from 'react-i18next'
import mapIcon from '../../assets/mapInfo.png'
import type { Dispatch, SetStateAction } from 'react'

export const ShowMapButtons = ({
    showMapActions,
    showInfo,
    setShowMap,
    isTheEnd
}: {
    showMapActions: boolean
    showInfo: boolean
    isTheEnd: boolean
    setShowMap: Dispatch<SetStateAction<boolean>>
}) => {
    const { t, i18n } = useTranslation()

    return (
        <>
            {showInfo ? (
                <div
                    className={`slide-in absolute start-5 top-[10%] z-[10000] mx-5 flex cursor-pointer items-center gap-2 border border-white p-3 text-sm text-white xl:!top-[15%] ${i18n?.language == "ar" ? "flex-row-reverse" : ""}`}
                    onClick={() => {
                        setShowMap(true)
                    }}
                >
                    <img src={mapIcon} width={20} height={15} />
                    <span className="text-sm">{t("showMap")}</span>
                </div>
            ) : showMapActions && !isTheEnd ? (
                <div
                    className={`slide-in absolute start-5 top-[10%] z-[999999] mx-5 flex cursor-pointer items-center gap-2 border border-white p-3 text-sm text-white xl:!top-[15%] ${i18n?.language == "ar" ? "flex-row-reverse" : ""}`}
                    onClick={() => {
                        setShowMap(true)
                    }}
                >
                    <span className="text-sm">{t("showMap2")}</span>
                </div>
            ) : null}
        </>
    )
}