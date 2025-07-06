/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/InteractiveValoriaMap.jsx
import { useState } from "react"
import bg from "../../assets/maps/allieMap.png"
import intersect from '../../assets/maps/intesect.png'
import checked from '../../assets/maps/checked.svg'
const roadZones = [
    {
        id: "Palm Road",
        label: "Palm Road",
        style: {
            top: "11%",
            right: "3.5%"
        },
        intersections: [
            {
                id: "Intersecting_11",
                style: {
                    top: "7%",
                    right: "44%",
                    width: "32px",
                    height: "32px",
                    zIndex: 1000
                }
            }
        ],
        road: [
            {
                id: "road1",
                style: {
                    top: "16%",
                    right: "9%"
                },
                visible: false
            },
            {
                id: "road1",
                style: {
                    top: "7%",
                    right: "25%"
                },
                visible: false
            }
        ]
    },
    {
        id: "Cliff Road",
        label: "Cliff Road",
        style: {
            top: "33%",
            right: "7.5%"
        },
        intersections: [
            {
                id: "Intersecting_21",
                style: {
                    top: "52.5%",
                    right: "44%",
                    width: "32px",
                    height: "32px",
                    zIndex: 1000
                }
            },
            {
                id: "Intersecting_22",
                style: {
                    top: "50%",
                    right: "60.5%",
                    width: "32px",
                    height: "32px",
                    zIndex: 1000
                }
            }
        ]
    },
    {
        id: "Silk Road",
        label: "Silk Road",
        style: {
            top: "49%",
            right: "5%"
        },
        intersections: [
            {
                id: "Intersecting_22",
                style: {
                    top: "74%",
                    right: "50.5%",
                    width: "32px",
                    height: "32px",
                    zIndex: 1000
                }
            }
        ]
    }
]


export const InteractiveValoriaMap = () => {
    const [selectedRoad, setSelectedRoad] = useState<any>()
    const onSelectRoad = (index:number) => {
        setSelectedRoad(roadZones?.[index])
      
    }
    return (
        <div
            style={{
                position: "relative",
                width: "800px",
                maxWidth: "800px",
                minWidth: "800px",
                margin: "0 auto"
            }}
        >
            {/* Background Image */}
            <img
                src={bg}
                alt="Valoria Map"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
            />

            <div
                key={"start"}
                className="rounded-full"
                style={{
                    position: "absolute",
                    top: "27.5%",
                    right: "2%",
                    width: "32px",
                    height: "32px",
                    zIndex: 1000
                }}
            >
                <img src={checked} width={40} height={40} />
            </div>
            {/* Clickable Zones */}
            {roadZones.map((zone, index) => (
                <>
                    {selectedRoad ? null: (
                        <div
                            key={zone.id}
                            onClick={() => onSelectRoad(index)}
                            className="flex h-[10%] w-20 items-center justify-center rounded-md border-[2px] border-solid border-[#DC8E2F] bg-black/50 p-3 hover:!bg-black/80"
                            style={{
                                position: "absolute",
                                cursor: "pointer",
                                ...zone.style
                            }}
                            title={zone.label}
                        >
                            <p className="font-trajan text-base font-bold text-white">
                                {zone?.label}
                            </p>
                        </div>
                    )}
                    {zone?.intersections?.map(item => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedRoad(item.id)}
                            className="rounded-full hover:!bg-white/50"
                            style={{
                                position: "absolute",
                                cursor: "pointer",
                                ...item.style
                            }}
                        >
                            <img src={intersect} width={40} height={40} />
                        </div>
                    ))}
                </>
            ))}

            {selectedRoad?.road?.map((item: any) => (
                <>
                    <div
                        key={item.id}
                        className="rounded-full"
                        style={{
                            position: "absolute",
                            ...item.style
                        }}
                    >
                        <img src={checked} width={32} height={32} />
                    </div>
                </>
            ))}
            <div
                key={"start"}
                className="rounded-full"
                style={{
                    position: "absolute",
                    top: "30%",
                    right: "78%",
                    width: "32px",
                    height: "32px",
                    zIndex: 1000
                }}
            >
                <img src={intersect} width={40} height={40} />
            </div>
            {/* Selection Display */}
            {/* {selectedRoad && (
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
            )} */}
        </div>
    )
}
