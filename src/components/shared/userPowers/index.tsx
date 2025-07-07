import kill from "../../../assets/icons/kill.svg"
import crown from "../../../assets/icons/crown.svg"
import money from "../../../assets/icons/money.svg"
import type { ManPower } from "../../../types/manPower"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useMotionValue, useAnimationFrame, animate } from "framer-motion"

export default function UserPowers({ powers }: { powers :ManPower}) {
    return (
        <div className="flex flex-row items-center gap-6">
            <Power img={crown} text={`${powers.people}%`} />
            <Power img={kill} text={`${powers?.army}%`} />
            <Power img={money} text={`${powers.money}%`} />
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
            <img src={img} width={"50px"} height={"50px"} />
            <AnimatePresence mode="wait" initial={false}>
                {number !== null ? (
                    <motion.span
                        key={number}
                        className="font-trajan text-3xl text-white"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.2, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Math.round(display)}{suffix}
                    </motion.span>
                ) : (
                    <motion.p
                        key={text}
                        className="font-trajan text-3xl text-white"
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
