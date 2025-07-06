import "./App.css"
import { useState } from "react"
import Home from "./components/features/home"
import LoadingScreen from "./components/features/loading"
import loadingBg from "./assets/backgrounds/loading.svg"

function App() {
    const [bgImage, setBgImage] = useState(loadingBg)

    return (
        <>
            <div>
                <div
                    style={{
                        backgroundImage: `url(${bgImage})`
                    }}
                    className={`bg-test flex h-screen w-screen flex-col items-center justify-end bg-cover bg-center bg-no-repeat`}
                >
                    {bgImage?.includes("home") ? (
                        <Home />
                    ) : (
                        <LoadingScreen setBgImage={setBgImage} />
                    )}
                </div>
            </div>
        </>
    )
}

export default App
