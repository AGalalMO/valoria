import { useState } from "react"
import { ModalWrapper } from "./features/enterValoria/components/modalWrapper"
import BorderButton from "./shared/borderButton"
import { useTranslation } from "react-i18next"
import table from "../assets/table1.jpeg"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

export default function Intro({ onEnd }: { onEnd: VoidFunction }) {
    const { t } = useTranslation()
    const [step, setStep] = useState(0)

    return (
        <>
            <ModalWrapper classes="!px-4 !flex !flex-col !justify-between">
                <div className="w-full">
                    <div className="flex min-h-[30vh] w-full flex-col items-center justify-center gap-3 px-4 text-center">
                        <p className="text-xl xl:text-3xl">
                            {step === 0
                                ? t("intro1")
                                : step === 1
                                  ? t("intro2")
                                  : step === 2
                                    ? t("intro3")
                                    : null}
                        </p>

                        {step === 2 && (
                            <Zoom
                                zoomMargin={40} // optional: spacing around zoomed image
                                classDialog="z-[9999]" // ensure above your modal/backdrop
                            >
                                <img
                                    src={table}
                                    alt="Decision matrix"
                                    className="max-h-[450px] cursor-zoom-in"
                                />
                            </Zoom>
                        )}
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <BorderButton
                        onClick={() => (step === 2 ? onEnd() : setStep(p => p + 1))}
                        text={t("next")}
                        size="sm"
                    />
                </div>
            </ModalWrapper>
        </>
    )
}
