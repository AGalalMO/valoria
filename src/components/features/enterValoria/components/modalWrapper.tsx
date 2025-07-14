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
            className={`flex-col flex h-full   items-center justify-center gap-8 xl:h-full ${parentClass ? parentClass : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className={`flex max-h-[80vh] !min-h-[300px] !max-w-[1000px] flex-col items-center justify-center gap-8 overflow-auto border-5 border-[#DC8E2F] p-5 xl:!min-h-[600px] xl:p-10 ${classes ? classes : ""}`}
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