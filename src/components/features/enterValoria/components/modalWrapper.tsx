import bg from "../../../../assets/backgrounds/modal.png"
import { motion } from "framer-motion"

export const ModalWrapper = ({
    children,
    classes,
    parentClass
}: {
    children: React.ReactNode
    classes?: string
    parentClass?: string
}) => {
    return (
        <motion.div
            className={`flex h-full flex-col items-center justify-center gap-8 ${parentClass ? parentClass : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={`flex min-h-[600px] !max-w-[1000px] flex-col items-center justify-center gap-8 border-5 border-[#DC8E2F] p-10 ${classes ? classes : ""}`}
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: "center"
                }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ 
                    duration: 0.5, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}