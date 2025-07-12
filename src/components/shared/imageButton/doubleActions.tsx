/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import buttonIcon from "../../../assets/icons/buttonIcon.svg"

export default function ImageButtonDoubleAuctions({
    onClickButton,
    onClickImage,
    icon,
    text,
    selected,
    size
}: {
    text: string
    icon: string
    onClickButton: (target?: any) => void
    onClickImage: (target?: any) => void
    selected?: boolean
    size?: "lg" | "normal" | "xl" | "xxl"
}) {
    return (
        <motion.button 
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.img 
                onClick={onClickImage} 
                src={icon} 
                width={136} 
                height={136}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
            />
            <div className="flex flex-row items-center gap-2">
                <img src={buttonIcon} width={16} height={16} />
                <motion.p
                    onClick={onClickButton}
                    className={`font-trajan m-0 text-[24px] font-normal uppercase ${selected ? "text-[#DBBD51]" : "text-white"} group-hover:text-[#DBBD51] ${size == "lg" ? "max-w-[250px]" : size == "normal" ? "max-w-[200px]" : size == "xl" ? "max-w-[240px] !text-[20px]" : size == "xxl" ? "!w-[260px] !text-[20px]" : ""}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {text}
                </motion.p>
                <img src={buttonIcon} width={16} height={16} />
            </div>
        </motion.button>
    )
}
