/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/InteractiveValoriaMap.jsx
import { useState } from "react"
import bg from '../../assets/maps/allie.svg'
const roadZones = [
    {
        id: "Palm Road",
        label: "Palm Road",
        style: {
            top: "11%",
            right: "2.5%",
            width: "10%",
            height: "10%",
            zIndex: 1000,
            color: "#1a1a1a",
            background: "rgba(255,255,255,0.4)",
            borderRadius: "8px",
            border: "3px solid #DC8E2F"
        }
    },
    {
        id: "Cliff Road",
        label: "Cliff Road",
        style: {
            top: "35%",
            right: "7.5%",
            width: "10%",
            height: "10%",
            zIndex: 1000,
            background: "rgba(255,255,255,0.4)",
            borderRadius: "8px",
            border: "3px solid #DC8E2F"
        }
    },
    {
        id: "Silk Road",
        label: "Silk Road",
        style: {
            top: "49%",
            right: "3%",
            width: "10%",
            height: "10%",
            color: "#0f0f",
            zIndex: 1000,
            background: "rgba(255,255,255,0.4)",
            borderRadius: "8px",
            border: "3px solid #DC8E2F"
        }
    }
]

export const InteractiveValoriaMap = () => {
    const [selectedRoad, setSelectedRoad] = useState<any>()

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                maxWidth: "1000px",
                margin: "0 auto"
            }}
        >
            {/* Background Image */}
            <img src={bg} alt="Valoria Map" style={{ width: "100%", display: "block" }} />

            {/* Clickable Zones */}
            {roadZones.map(zone => (
                <div
                    key={zone.id}
                    onClick={() => setSelectedRoad(zone.id)}
                    className="hover:!bg-white/50"
                    style={{
                        position: "absolute",
                        cursor: "pointer",
                     
                        ...zone.style
                    }}
                    title={zone.label}
                ></div>
            ))}

            {/* Selection Display */}
            {selectedRoad && (
                <div
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "10px",
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        padding: "0.5rem 1rem",
                        borderRadius: "8px"
                    }}
                >
                    🚀 You selected: <strong>{selectedRoad}</strong>
                </div>
            )}
        </div>
    )
}
