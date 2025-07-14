
import valoriaMap from "../../../assets/valoriaMap-min.png"
import spyy from "../../../assets/spyy.png"
import framText from "../../../assets/framText.png"
import { useEffect } from "react"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
export default function InValoriaMap({ changeState }: { changeState: (flow: FLOW_ENUM) => void }) {
    const {t}=useTranslation()
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
                    <img src={spyy} className="z-50 w-[180px] xl:!w-[230px] h-[180px] xl:!h-[230px]" width={230} height={230} />
                    <div
                        style={{
                            backgroundImage: `url(${framText})`,
                            backgroundSize: "cover",
                            backgroundPosition: "right"
                        }}
                        className="-ms-10 flex h-[170px] flex-col justify-center"
                    >
                        <p className="ps-20 text-base xl:!text-[24px] font-bold text-[#DBBD51] uppercase">
                            {t("message_from_spy")}
                        </p>
                        <p className="!w-[77vw] ps-20 text-base xl:text-[24px] font-bold">
                            {t("spy_message")}
                            <br />
                            {t("spy_message_2")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}