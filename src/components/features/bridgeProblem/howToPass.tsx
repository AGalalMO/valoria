import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import actFirst from "../../../assets/icons/actFast.png"
import race from "../../../assets/raace.png"

import favor from "../../../assets/favor.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import { ButtonDescription } from "../../buttonDescription"
import { useState } from "react"
import BorderButton from "../../shared/borderButton"
export default function HowToPass({
    changeFlowState,
    changePowers,
}: {
        changeFlowState: (flow: FLOW_ENUM) => void
    changePowers:VoidFunction
    }) {
    const [selectedOption, SetSelectedOption] = useState(-1)
    const [removeNote,setRemoveNote]=useState(false)
    const { t } = useTranslation()
    
    const onClickNext = () => {
        if (selectedOption < 0) return;
        else
        {
            if (selectedOption == 0 )
                changeFlowState(FLOW_ENUM.RACE_FOR_TIME)
            else if (selectedOption == 2)
                changeFlowState(FLOW_ENUM.IS_TRUST_ENGINEERS)

            else
                changeFlowState(FLOW_ENUM.BUILD_ANOTHER_BRIDGE_ISSUE)

            }
        
    }
    const onSelectBlackPowder = () => {
        SetSelectedOption(1)
        changePowers()
        setRemoveNote(true)
    }
    return (
        <div className="flex h-full w-full flex-col items-center justify-start xl:mt-10">
            <div className="relative h-[90vh] w-[100vw] xl:!h-[70vh] xl:!w-[80vw]">
                <ModalWrapper
                    parentClass="!w-full !justify-start"
                    classes="!justify-around !w-[100%]   !relative max-h-[95vh] !gap-2"
                >
                    <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                        {t("what_to_pass_brige")}
                    </p>
                    <div className="flex w-full flex-col flex-wrap items-center justify-center gap-3 xl:!flex-nowrap">
                        <ButtonDescription
                            isSelected={selectedOption == 0}
                            icon={race}
                            onClick={() => {
                                SetSelectedOption(0)
                            }}
                            small
                            text={t("race_time_now")}
                            description={t("race_time_now1")}
                        />

                        <ButtonDescription
                            description={t("alternate_bridge1")}
                            isSelected={selectedOption == 1}
                            icon={actFirst}
                            onClick={() => {
                                SetSelectedOption(1)
                            }}
                            small
                            text={t("alternate_bridge")}
                        />
                        <ButtonDescription
                            description={t("negotiate1")}
                            isSelected={selectedOption == 2}
                            icon={favor}
                            onClick={() => {
                                SetSelectedOption(2)
                            }}
                            small
                            text={t("negotiate")}
                        />
                        <div className="mt-1">
                            <BorderButton onClick={onClickNext} size="xs" text="SELECT" />
                        </div>
                    </div>
                    {!removeNote ? (
                        <div className="mt-4 flex flex-col justify-center bg-black/30 px-2">
                            <div className="flex flex-col items-center justify-between gap-3">
                                <p className="text-lg">
                                    * if you want to consult the black powder expert on the best
                                    decision, and it will cost 4 resources in exchange
                                </p>
                                <div className="flex w-full items-center justify-center gap-5">
                                    <BorderButton
                                        text="YES"
                                        size="xxs"
                                        bottomBorder={false}
                                        onClick={onSelectBlackPowder}
                                    />
                                    <BorderButton
                                        text="NO"
                                        size="xxs"
                                        bottomBorder={false}
                                        onClick={() => {

                                            setRemoveNote(true)
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : null}
                </ModalWrapper>
            </div>
        </div>
    )
}