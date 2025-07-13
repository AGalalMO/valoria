import React, { useEffect, useState } from "react"
import homeBg from "../../../assets/backgrounds/home.svg"
import loadingBg from "./../../assets/backgrounds/loading.svg"
import loading1 from "../../../assets/loading/1.svg"
import loading2 from "../../../assets/loading/2.svg"
import loading3 from "../../../assets/loading/3.svg"
 import loading4 from "../../../assets/loading/4.svg"
 import loading5 from "../../../assets/loading/5.svg"
 import loading6 from "../../../assets/loading/6.svg"
 import loading7 from "../../../assets/loading/7.svg"

 import allie from "../../../assets/icons/allie.svg"
import attack from "../../../assets/icons/attack.svg"
import danger from "../../../assets/icons/danger.svg"
import forest from "../../../assets/icons/forest.svg"
import home from "../../../assets/icons/home.svg"
import yes from "../../../assets/icons/yes.svg"
import noCrop from "../../../assets/icons/noCrop.svg"
import spy from "../../../assets/icons/spy.svg"
const CRITICAL_ASSETS = [homeBg, loadingBg,loading1,loading2,loading3,loading4,loading5,loading6,loading7]

// Non-critical assets that can load in background
const BACKGROUND_ASSETS: string[] = [
    allie, attack, danger, forest, home, yes, noCrop, spy
]

function LoadingScreen({
    setBgImage
}: {
    setBgImage: React.Dispatch<React.SetStateAction<string>>
}) {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)
    const [loadingError, setLoadingError] = useState(false)
    const [criticalAssetsLoaded, setCriticalAssetsLoaded] = useState(false)

    // Reduced loading images to prevent timeout
    const loadingImages = [loading1, loading2, loading3, loading4, loading5, loading6, loading7]
    
    // Preload critical assets with timeout
    useEffect(() => {
        const preloadCriticalAssets = async () => {
            try {
                const loadPromises = CRITICAL_ASSETS.map((asset) => {
                    return new Promise((resolve) => {
                        const img = new Image()
                        img.onload = () => resolve(true)
                        img.onerror = () => resolve(false)
                        img.src = asset
                    })
                })
                
                // Wait for critical assets with timeout
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Critical assets timeout')), 3000)
                )
                
                await Promise.race([
                    Promise.all(loadPromises),
                    timeoutPromise
                ])
                
                setCriticalAssetsLoaded(true)
            } catch (error) {
                console.warn('Critical asset preloading failed, continuing anyway:', error)
                setLoadingError(true)
            }
        }
        
        preloadCriticalAssets()
    }, [])

    // Preload background assets after critical ones are loaded
    useEffect(() => {
        if (!criticalAssetsLoaded) return
        
        const preloadBackgroundAssets = async () => {
            try {
                BACKGROUND_ASSETS.forEach((asset) => {
                    const img = new Image()
                    img.src = asset
                })
            } catch (error) {
                console.warn('Background asset preloading failed:', error)
            }
        }
        
        preloadBackgroundAssets()
    }, [criticalAssetsLoaded])

    useEffect(() => {
        if (index >= loadingImages.length - 1) return // Stop if last image
        
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setIndex(prev => {
                    if (prev < loadingImages.length - 1) {
                        return prev + 1
                    }
                    return prev
                })
                setFade(true)
            }, 200) // fade out duration
        }, 800) // Increased interval to reduce server load
        
        return () => clearInterval(interval)
    }, [index, loadingImages.length])

    useEffect(() => {
        // Auto-advance to home after critical assets are loaded or timeout
        const timeout = setTimeout(() => {
            if (criticalAssetsLoaded || loadingError) {
                setBgImage(homeBg)
            }
        }, 2500)
        
        return () => clearTimeout(timeout)
    }, [criticalAssetsLoaded, loadingError, setBgImage])

    // If there's a loading error, skip to home immediately
    useEffect(() => {
        if (loadingError) {
            setBgImage(homeBg)
        }
    }, [loadingError, setBgImage])

    return (
        <>
            <img
                src={loadingImages[index]}
                className={`mb-[100px] w-1/2 transition-opacity duration-500 ${
                    fade ? "opacity-100" : "opacity-50"
                }`}
                alt="loading"
                onError={() => setLoadingError(true)}
            />
        </>
    )
}

export default LoadingScreen
