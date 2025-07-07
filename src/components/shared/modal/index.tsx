import type React from "react"
import bg from "../../../assets/backgrounds/modal.png"
export default function Modal({
    children,
    noBackground,
}: {
    children: React.ReactNode
    noBackground?: boolean
}) {
    return (
        <div className="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center">
            <div
                style={{
                    backgroundImage: noBackground ? "" : `url(${bg})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
                className={`max-w-[1400px] border-5 border-[#DC8E2F] ${noBackground ? "" : "p-8"}`}
            >
                {children}
            </div>
        </div>
    )
}
