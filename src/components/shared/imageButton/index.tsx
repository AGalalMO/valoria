/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import buttonIcon from "../../../assets/icons/buttonIcon.svg"

export default function ImageButton({
    text,
    icon,
    onClick,
    selected,
    size
}: {
    text: string
    icon: string
    onClick: (target?: any) => void
    selected?: boolean
    size?: "lg" | "normal"|'xl'|'xxl'
}) {
    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
            }}
            onClick={onClick}
            className="group flex cursor-pointer flex-col items-center gap-2 bg-transparent"
        >
            <motion.img 
                src={icon} 
                width={136} 
                height={136} 
                className="w-[100px] h-[100px] lg:!w-[136px] lg:!h-[136px]"
                whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeInOut" }
                }}
            />
            <div className="flex flex-row items-center gap-2">
                <motion.img 
                    src={buttonIcon} 
                    width={16} 
                    height={16}
                    whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.2 }
                    }}
                />
                <motion.p
                    className={`font-trajan m-0  !text-base lg:!text-[24px] font-normal uppercase ${selected ? "text-[#DBBD51]" : "text-white"} group-hover:text-[#DBBD51] ${size == "lg" ? "max-w-[250px]" : size == "normal" ? "max-w-[200px]" : size == "xl" ? "max-w-[240px] lg:!text-[20px]" : size=="xxl"?'!w-[260px] lg:!text-[20px]':""}`}
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                    }}
                >
                    {text}
                </motion.p>
                <motion.img 
                    src={buttonIcon} 
                    width={16} 
                    height={16}
                    whileHover={{ 
                        scale: 1.2,
                        transition: { duration: 0.2 }
                    }}
                />
            </div>
        </motion.button>
    )
}
