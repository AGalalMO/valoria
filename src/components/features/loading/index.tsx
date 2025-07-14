import React, { useEffect, useState } from "react"
import homeBg from "./../../../assets/backgrounds/home.svg"
import loading1 from "../../../assets/loading/1.svg"
import loading2 from "../../../assets/loading/2.svg"
import loading3 from "../../../assets/loading/3.svg"
import loading4 from "../../../assets/loading/4.svg"
import loading5 from "../../../assets/loading/5.svg"
import loading6 from "../../../assets/loading/6.svg"
import loading7 from "../../../assets/loading/7.svg"
import { motion, AnimatePresence } from "framer-motion"



function LoadingScreen({
    setBgImage
}: {
    setBgImage: React.Dispatch<React.SetStateAction<string>>
}) {
    const [index, setIndex] = useState(0)

    // Reduced loading images to prevent timeout
    const loadingImages = [loading1, loading2, loading3, loading4, loading5, loading6, loading7]
    
   
   

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % loadingImages.length)
        }, 300)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBgImage(homeBg)
        }, 2500)
        return () => clearTimeout(timeout)
    }, [setBgImage])


    return (
        <>
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={loadingImages[index]}
                    className="mb-[100px] w-1/2 transition-opacity duration-500 "
                    alt="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </AnimatePresence>
        </>
    )
}

export default LoadingScreen
