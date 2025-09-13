import kill from "../../../assets/icons/kill.svg"
import crown from "../../../assets/icons/crown.svg"
import money from "../../../assets/icons/money.svg"
import type { ManPower } from "../../../types/manPower"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import BorderButton from "../borderButton"
import { useTranslation } from "react-i18next"
import { Tooltip as ReactTooltip } from "react-tooltip"
import info from '../../../assets/info.png'
export default function UserPowers({
    powers,
    isTheEnd,
    showHistory
}: {
    powers: ManPower
    isTheEnd: boolean
    showHistory?:VoidFunction}) {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }
    return (
        <div className={`z-[100000] flex w-full items-center justify-between`}>
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
                    <div className="flex flex-col gap-1">
                        <Power img={crown} text={`${powers.people}%`} />
                        <p className="font-trajan text-center text-lg font-bold text-white">
                            {t("people")}
                        </p>
                    </div>
                </div>
                <div data-tooltip-id="my-tooltip-2" className="flex items-center gap-2">
                    <div className="flex flex-col gap-1">
                        <Power img={kill} text={`${powers?.army}%`} />
                        <p className="font-trajan text-center text-lg font-bold text-white">
                            {t("army")}
                        </p>
                    </div>
                </div>
                <div data-tooltip-id="my-tooltip-3" className="flex items-center gap-2">
                    <div className="flex flex-col gap-1">
                        <Power img={money} text={`${powers.money}%`} />
                        <p className="font-trajan text-center text-lg font-bold text-white">
                            {t("money")}
                        </p>
                    </div>
                </div>
                {(showHistory && powers?.army < 100) ||
                powers?.money < 100 ||
                powers.people < 100 ? (
                    <img
                        src={info}
                        data-tooltip-id="my-tooltip-4"
                        className="cursor-pointer"
                        width={32}
                        height={32}
                        onClick={showHistory}
                    />
                ) : null}
            </div>

            <ReactTooltip
                id="my-tooltip-1"
                place="bottom-end"
                variant="dark"
                content={t("money1")}
            />
            <ReactTooltip
                id="my-tooltip-2"
                place="bottom-end"
                variant="dark"
                content={t("army1")}
            />
            <ReactTooltip
                id="my-tooltip-3"
                place="bottom-end"
                variant="dark"
                content={t("people1")}
            />
            <ReactTooltip
                id="my-tooltip-4"
                place="bottom-end"
                variant="dark"
                content={t("scoreHistory")}
            />
        </div>
    )
}
const Power = ({ img, text }: { img: string; text: string }) => {
    // Try to extract a number from text
    const numberMatch = text.match(/([\d.]+)/)
    const number = numberMatch ? parseFloat(numberMatch[1]) : null
    const suffix = text.replace(/([\d.]+)/, "")
    const prevNumber = useRef(number)
    const [display, setDisplay] = useState(number ?? 0)
    const [changeAmount, setChangeAmount] = useState<string | null>(null)
    const [showChange, setShowChange] = useState(false)
    
    useEffect(() => {
        if (number !== null && prevNumber.current !== number) {
            const prev = prevNumber.current ?? 0
            const current = number
            const change = current - prev
            
            if (change !== 0) {
                // Show the change amount first
                const changeText = change > 0 ? `+${change}` : `${change}`
                setChangeAmount(changeText)
                setShowChange(true)
                
                // Hide change amount after animation
                setTimeout(() => {
                    setShowChange(false)
                    setChangeAmount(null)
                }, 1000)
                
                // Then animate the value
                if (change < 0) {
                    // Number is decreasing - animate countdown
                    let currentValue = prev
                    const interval = setInterval(() => {
                        if (currentValue > current) {
                            currentValue--
                            setDisplay(currentValue)
                        } else {
                            clearInterval(interval)
                            prevNumber.current = number
                            setDisplay(current)
                        }
                    }, 200) // Adjust speed as needed
                    
                    // Cleanup function to clear interval if component unmounts
                    return () => clearInterval(interval)
                } else {
                    // Number is increasing - animate countup
                    let currentValue = prev
                    const interval = setInterval(() => {
                        if (currentValue < current) {
                            currentValue++
                            setDisplay(currentValue)
                        } else {
                            clearInterval(interval)
                            prevNumber.current = number
                            setDisplay(current)
                        }
                    }, 200) // Adjust speed as needed
                    
                    // Cleanup function to clear interval if component unmounts
                    return () => clearInterval(interval)
                }
            } else {
                // No change, just update
                prevNumber.current = number
                setDisplay(current)
            }
        }
    }, [number])
    
    return (
        <div className="flex items-center gap-1 relative">
            <img
                src={img}
                width={"50px"}
                height={"50px"}
                className="h-8 w-8 xl:h-[40px] xl:w-[40px]"
            />
            
            {/* Change amount animation */}
            <AnimatePresence>
                {showChange && changeAmount && (
                    <motion.div
                        key={changeAmount}
                        className="absolute -top-8 left-0 font-trajan text-lg text-white xl:text-xl"
                        initial={{ y: -20, opacity: 0, scale: 0.8 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -10, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        {changeAmount}
                    </motion.div>
                )}
            </AnimatePresence>
            
            <AnimatePresence mode="wait" initial={false}>
                {number !== null ? (
                    <motion.span
                        key={number}
                        className="font-trajan text-lg text-white xl:text-2xl"
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
                        className="font-trajan text-lg text-white xl:text-2xl"
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
