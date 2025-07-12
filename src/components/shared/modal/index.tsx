import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import bg from "../../../assets/backgrounds/modal.png"

export default function Modal({
    children,
    noBackground,
    background,
    isOpen = true
}: {
    children: React.ReactNode
    noBackground?: boolean
    background?: string
    isOpen?: boolean
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        style={{
                            backgroundImage: noBackground ? "" : `url(${background ? background : bg})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover"
                        }}
                        className={`max-w-[1400px] ${background ? "" : "border-5 border-[#DC8E2F]"} ${noBackground || background ? "" : "p-8"}`}
                        initial={{ 
                            width: 0, 
                            height: 0,
                            opacity: 0
                        }}
                        animate={{ 
                            width: "auto", 
                            height: "auto",
                            opacity: 1
                        }}
                        exit={{ 
                            width: 0, 
                            height: 0,
                            opacity: 0
                        }}
                        transition={{ 
                            duration: 0.4,
                            ease: "easeOut"
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                                duration: 0.3,
                                delay: 0.2
                            }}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
