import { useState } from "react";
import { ModalWrapper } from "./features/enterValoria/components/modalWrapper";
import BorderButton from "./shared/borderButton";
import { useTranslation } from "react-i18next";
import table from '../assets/table1.png'
export default function Intro({  onEnd }: {  onEnd: VoidFunction }) {
    const { t } = useTranslation()
    const [step,setStep]=useState(0)
    console.log("step", step)
    return (
        <ModalWrapper classes="!px-4 !flex !flex-col  !justify-between">
            <div style={{ position: "relative", width: "100%" }}>
                <div className="flex h-full !min-h-[30vh] w-full flex-col items-center justify-center gap-3 px-4 text-center">
                    <p className="text-xl xl:text-3xl">
                        {step == 0
                            ? ` You are about to start a war to fight for justice for Valoria and every
                            decision will affect your success rate`
                            : step == 1
                              ? `You have 3 choices to decide the best way, to start your journey to Valoria, choose carefully!`
                              : step == 2
                                ? `Now you will use the decision matrix tool with the table given, for the best decisions`
                                : null}
                    </p>
                    {step == 2 ? <img src={table} width={"90%"} height={350} /> : null}
                </div>
            </div>
            <div className="flex flex-row items-center">
                <BorderButton
                    onClick={() => {
                        if (step == 2) onEnd()
                        else setStep(prev => prev + 1)
                    }}
                    text={t("next")}
                    size="sm"
                />
            </div>
        </ModalWrapper>
    )
}