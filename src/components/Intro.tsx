import { useEffect, useRef, useState } from "react"
import { ModalWrapper } from "./features/enterValoria/components/modalWrapper"
import BorderButton from "./shared/borderButton"
import { useTranslation } from "react-i18next"
import table from "../assets/table1.jpeg"
import ex from "../assets/ex1.png"
import infoIcon from "../assets/info.png"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import allie from "../assets/handShake.jpeg"
import spy from "../assets/icons/spy.png"
import attack from "../assets/icons/attack.png"
export default function Intro({ onEnd }: { onEnd: VoidFunction }) {
    const { t } = useTranslation()
    const [step, setStep] = useState(0)
    const [info, setInfo] = useState(false)
        const mapRef = useRef<HTMLDivElement>(null)

    const infoClick = () => {
    setInfo(true)
    }
    
      useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
              console.log("event", event)
              if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
                  setInfo(false)
              }
          }

          if (info) {
              document.addEventListener("mousedown", handleClickOutside)
          }

          return () => {
              document.removeEventListener("mousedown", handleClickOutside)
          }
      }, [info])
    return (
        <>
            <ModalWrapper classes="!px-4 !flex !flex-col !justify-center">
                <div className="w-full">
                    <div className="flex w-full flex-col items-center justify-center gap-3 px-4 text-center">
                        <p className={`text-xl xl:text-2xl`}>
                            {step === 0
                                ? t("intro1")
                                : step === 1
                                  ? t("intro2")
                                  : step === 2
                                    ? t("intro3")
                                    : null}
                        </p>
                        {step == 1 ? (
                            <div className="flex items-start mt-5 gap-5">
                                <img src={spy} width={125} height={125} />
                                <img src={allie} width={125} height={125} />
                                <img src={attack} width={125} height={125} />
                            </div>
                        ) : null}
                        {step === 2 && (
                            <div className="relative flex h-full w-full items-start justify-center">
                                <img
                                    width={32}
                                    height={32}
                                    src={infoIcon}
                                    onClick={infoClick}
                                    className="absolute end-2 cursor-pointer"
                                />
                                <Zoom
                                    zoomMargin={40} // optional: spacing around zoomed image
                                    classDialog="z-[9999]" // ensure above your modal/backdrop
                                >
                                    <img
                                        src={table}
                                        alt="Decision matrix"
                                        className="max-h-[330px] cursor-zoom-in"
                                    />
                                </Zoom>
                            </div>
                        )}
                    </div>
                </div>
                {step == 2 ? <p className="text-xl">{t("compare")}</p> : null}
                <div className="mt-8 flex flex-row items-center">
                    <BorderButton
                        onClick={() => (step === 2 ? onEnd() : setStep(p => p + 1))}
                        text={t("next")}
                        size="sm"
                    />
                </div>
                {info ? (
                    <div className="absolute top-0 z-[10000] flex h-screen w-screen items-center justify-center bg-black/50">
                        <div ref={mapRef}>
                            <Zoom
                                zoomMargin={40} // optional: spacing around zoomed image
                                classDialog="z-[9999]" // ensure above your modal/backdrop
                            >
                                <img
                                    src={ex}
                                    alt="Decision matrix"
                                    className="max-h-[600px] cursor-zoom-in"
                                />
                            </Zoom>
                        </div>
                    </div>
                ) : null}
            </ModalWrapper>
        </>
    )
}
