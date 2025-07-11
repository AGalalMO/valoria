
import valoriaMap from "../../../assets/valoriaMap.png"
import spyy from "../../../assets/spyy.png"
import framText from "../../../assets/framText.png"
import { useEffect } from "react"
import { FLOW_ENUM } from "../../../types/FLowEnum"
export default function InValoriaMap({ changeState }: { changeState :(flow:FLOW_ENUM)=>void}) {
    useEffect(() => {
        setTimeout(() => {
            changeState(FLOW_ENUM.HOW_TO_PASS_BRIDGE)
        }, 10000)
    }, [])
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-start">
            <div className="relative h-[80%] w-[80%]">
                <img src={valoriaMap} className="h-full w-full" />
                <div className="absolute -bottom-10 -left-20 flex w-full flex-row items-center">
                    <img src={spyy} className="z-50" width={230} height={230} />
                    <div
                        style={{
                            backgroundImage: `url(${framText})`,
                            backgroundSize: "cover",
                            backgroundPosition: "right"
                        }}
                        className="-ms-10 flex h-[170px] flex-col justify-center"
                    >
                        <p className="ps-20 text-[24px] font-bold text-[#DBBD51] uppercase">
                            message from spy
                        </p>
                        <p className="!w-[77vw] ps-20 text-[24px] font-bold">
                            be aware that they put a trap bombs in the bridge the bridge <br />
                            is 500 meters away from you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}