import bgModal from "../../../assets/backgrounds/modal.png"
import dangerImg from "../../../assets/icons/dange.png"
import yes from "../../../assets/icons/yes.png"
import no from "../../../assets/icons/no.png"
import ImageButton from "../../shared/imageButton"
import { MAP_MODAL_TYPE } from "../../../types/Enums"
import BorderButton from "../../shared/borderButton"
import type { MapModalPropsType } from "../../../types/InteractiveMap"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function MapModal({
    onClickChangeRoute,
    onClickCancelChangeRoute,
    modalOptions,
    onSelectSoliderPercentage,
    askForMen,
    continueWithoutMoreMen
}: MapModalPropsType) {
    const {t}=useTranslation()
    return (
        <>
            <AnimatePresence>
                {modalOptions?.isOpen ? (
                    <motion.div
                        className="absolute top-0 left-0 z-[1000] flex h-full w-full items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            style={{
                                backgroundImage: `url(${bgModal})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover"
                            }}
                            className={`flex w-[80%] flex-col items-center justify-center gap-6 border-5 border-[#DC8E2F] p-8`}
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.2,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                        >
                            {modalOptions.modalType == MAP_MODAL_TYPE.CHANGE_ROUTE ? (
                                <>
                                    <motion.div
                                        className="flex items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.img
                                            src={dangerImg}
                                            width={120}
                                            height={120}
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                      
                                    </motion.div>
                                    <motion.p
                                        className="text-center text-xl text-white xl:text-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {t("change_route_desc")}
                                    </motion.p>
                                    <motion.div
                                        className="flex w-[80%] items-center justify-between"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ImageButton
                                                icon={yes}
                                                onClick={onClickChangeRoute}
                                                text={t("yes")}
                                            />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ImageButton
                                                icon={no}
                                                onClick={onClickCancelChangeRoute}
                                                text={t("no")}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </>
                            ) : modalOptions.modalType == MAP_MODAL_TYPE.SOLIDER_PERCENTAGE ? (
                                <>
                                    <motion.div
                                        className="flex items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.img
                                            src={dangerImg}
                                            width={120}
                                            height={120}
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                        
                                    </motion.div>
                                    <motion.p
                                        className="text-center text-xl text-white xl:text-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {t("choose_soldiers")}
                                    </motion.p>
                                    <motion.div
                                        className="flex w-[80%] items-center justify-between"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {["70%", "60%", "50%"].map((percentage, index) => (
                                            <motion.div
                                                key={percentage}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    delay: index * 0.1,
                                                    duration: 0.3,
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <BorderButton
                                                    bottomBorder={false}
                                                    onClick={onSelectSoliderPercentage}
                                                    text={percentage}
                                                />
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </>
                            ) : modalOptions.modalType == MAP_MODAL_TYPE.INCREASE_SOLDIERS ? (
                                <>
                                    <motion.div
                                        className="flex items-center"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.img
                                            src={dangerImg}
                                            width={120}
                                            height={120}
                                            animate={{
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 5, -5, 0]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                      
                                    </motion.div>
                                    <motion.p
                                        className="text-center text-xl text-white xl:text-2xl"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {t("enemies_ahead")}
                                    </motion.p>
                                    <motion.div
                                        className="flex w-[80%] items-center justify-between"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ImageButton
                                                icon={yes}
                                                onClick={askForMen}
                                                text={t('yes')}
                                            />
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <ImageButton
                                                icon={no}
                                                onClick={continueWithoutMoreMen}
                                                text={t('no')}
                                            />
                                        </motion.div>
                                    </motion.div>
                                </>
                            ) : null}
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </>
    )
}

 