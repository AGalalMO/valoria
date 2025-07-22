import kill from "../../../assets/icons/kill.svg"
import crown from "../../../assets/icons/crown.svg"
import money from "../../../assets/icons/money.svg"
import type { ManPower } from "../../../types/manPower"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useMotionValue, useAnimationFrame, animate } from "framer-motion"
import BorderButton from "../borderButton"
import { useTranslation } from "react-i18next"
import { Tooltip as ReactTooltip } from "react-tooltip"

export default function UserPowers({ powers, isTheEnd }: { powers: ManPower; isTheEnd:boolean }) {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className={`flex w-full items-center justify-between`}>
            {isTheEnd ? null : (
                <BorderButton
                    size="xs"
                    bottomBorder={false}
                    text={t("change_lang")}
                    onClick={() => changeLanguage(i18n?.language == "en" ? "ar" : "en")}
                />
            )}
            <div
                className={`flex items-center gap-6 ${isTheEnd ? "w-full flex-col items-center" : "flex-row"}`}
            >
                <div data-tooltip-id="my-tooltip-1" className="flex items-center gap-2">
                    <Power img={crown} text={`${powers.people}%`} />
                    {!isTheEnd ? null : (
                        <p className="font-trajan text-center text-[30px] font-bold text-white">
                            {t("people")}
                        </p>
                    )}
                </div>
                <div data-tooltip-id="my-tooltip-2" className="flex items-center gap-2">
                    <Power img={kill} text={`${powers?.army}%`} />
                    {!isTheEnd ? null : (
                        <p className="font-trajan text-center text-[30px] font-bold text-white">
                            {t("army")}
                        </p>
                    )}
                </div>
                <div data-tooltip-id="my-tooltip-3" className="flex items-center gap-2">
                    <Power img={money} text={`${powers.money}%`} />
                    {!isTheEnd ? null : (
                        <p className="font-trajan text-center text-[30px] font-bold text-white">
                            {t("money")}
                        </p>
                    )}
                </div>
            </div>

            <ReactTooltip
                id="my-tooltip-1"
                place="bottom"
                variant="warning"
                content={t("people")}
            />
            <ReactTooltip id="my-tooltip-2" place="bottom" variant="warning" content={t("army")} />
            <ReactTooltip id="my-tooltip-3" place="bottom" variant="warning" content={t("money")} />
        </div>
    )
}
const Power = ({ img, text }: { img: string; text: string }) => {
    // Try to extract a number from text
    const numberMatch = text.match(/([\d.]+)/)
    const number = numberMatch ? parseFloat(numberMatch[1]) : null
    const suffix = text.replace(/([\d.]+)/, "")
    const prevNumber = useRef(number)
    const motionValue = useMotionValue(number ?? 0)
    const [display, setDisplay] = useState(number ?? 0)
    useEffect(() => {
        if (number !== null && prevNumber.current !== number) {
            motionValue.set(prevNumber.current ?? 0)
            animate(motionValue, number, { type: "spring", stiffness: 100, damping: 20 })
            prevNumber.current = number
        }
    }, [number, motionValue])
    useAnimationFrame(() => {
        setDisplay(motionValue.get())
    })
    return (
        <div className="flex items-center gap-1">
            <img
                src={img}
                width={"50px"}
                height={"50px"}
                className="h-8 w-8 xl:h-[50px] xl:w-[50px]"
            />
            <AnimatePresence mode="wait" initial={false}>
                {number !== null ? (
                    <motion.span
                        key={number}
                        className="font-trajan text-lg text-white xl:text-3xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Math.round(display)}
                        {suffix}
                    </motion.span>
                ) : (
                    <motion.p
                        key={text}
                        className="font-trajan text-lg text-white xl:text-3xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {text}
                    </motion.p>
                )}
            </AnimatePresence>

            
        </div>
    )
}
