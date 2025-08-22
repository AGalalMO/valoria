import { VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import { ModalWrapper } from "./modalWrapper"
import forstBg from "../../../../assets/icons/forest.png"
import bridgeBG from "../../../../assets/icons/bridge.png"
import homesBg from "../../../../assets/river.png"
import { useTranslation } from "react-i18next"
import { ButtonDescription } from "../../../buttonDescription"
import { useState } from "react"
import BorderButton from "../../../shared/borderButton"
export const EnterValoriaMethod = ({
    selectedBefore,
    selectWayHandler
}: {
    selectedBefore: VALORIA_ROAD_METHOD_ENUM[]
    selectWayHandler: (way: VALORIA_ROAD_METHOD_ENUM) => void
    }) => {
    const { t } = useTranslation()
    const [selectedWay, setSelectedWay] = useState<VALORIA_ROAD_METHOD_ENUM>()
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !py-5 !relative px-10 xl:px-[80px] !gap-4"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                {t("choose_way")}
            </p>
            <div className="flex h-full flex-col justify-between">
                <div className="flex w-full flex-col items-center justify-around gap-2">
                    {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.RIVER) >=
                    0 ? null : (
                        <ButtonDescription
                            isSelected={selectedWay == VALORIA_ROAD_METHOD_ENUM.RIVER}
                            icon={homesBg}
                            onClick={() => {
                                setSelectedWay(VALORIA_ROAD_METHOD_ENUM.RIVER)
                            }}
                            text={t("river")}
                            description="Advantage: shorter path inside Valoria"
                            description2="Disadvantage: Possibility of traps and strong river flow"
                        />
                    )}
                    {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.FOREST) >=
                    0 ? null : (
                        <ButtonDescription
                            isSelected={selectedWay == VALORIA_ROAD_METHOD_ENUM.FOREST}
                            icon={forstBg}
                            onClick={() => {
                                setSelectedWay(VALORIA_ROAD_METHOD_ENUM.FOREST)
                            }}
                            text={t("forest")}
                            description="Advantage: Unexpected undercover attack."
                            description2="Disadvantage: Wild animals & predators’ presence."
                        />
                    )}
                    {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.GATES) >=
                    0 ? null : (
                        <ButtonDescription
                            isSelected={selectedWay == VALORIA_ROAD_METHOD_ENUM.GATES}
                            icon={bridgeBG}
                            onClick={() => {
                                setSelectedWay(VALORIA_ROAD_METHOD_ENUM.GATES)
                            }}
                            text={t("gates")}
                            description="Advantage:  Single point of entry"
                            description2="Disadvantage: facing Strong Defenses"
                        />
                    )}
                </div>
                <div className="flex w-full justify-center">
                    <BorderButton
                        size="sm"
                        disabled={!selectedWay}
                        text="SELECT"
                        onClick={() => {
                            selectWayHandler(selectedWay as VALORIA_ROAD_METHOD_ENUM)
                        }}
                    />
                </div>
            </div>
        </ModalWrapper>
    )
}