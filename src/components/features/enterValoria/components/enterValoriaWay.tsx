import { VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import ImageButton from "../../../shared/imageButton"
import { ModalWrapper } from "./modalWrapper"
import forstBg from "../../../../assets/icons/forest.png"
import bridgeBG from "../../../../assets/icons/bridge.png"
import homesBg from "../../../../assets/river.png"
import { useTranslation } from "react-i18next"
export const EnterValoriaMethod = ({
    selectedBefore,
    selectWayHandler
}: {
    selectedBefore: VALORIA_ROAD_METHOD_ENUM[]
    selectWayHandler: (way: VALORIA_ROAD_METHOD_ENUM) => void
    }) => {
    const {t}=useTranslation()
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !relative px-10 xl:px-[80px]"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                {t("choose_way")}
            </p>
            <div className="flex w-full items-center justify-around">
                {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.RIVER) >=
                0 ? null : (
                    <ImageButton
                        icon={homesBg}
                        onClick={() => {
                            selectWayHandler(VALORIA_ROAD_METHOD_ENUM.RIVER)
                        }}
                        text={t("river")}
                    />
                )}
                {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.FOREST) >=
                0 ? null : (
                    <ImageButton
                        icon={forstBg}
                        onClick={() => {
                            selectWayHandler(VALORIA_ROAD_METHOD_ENUM.FOREST)
                        }}
                        text={t("forest")}
                    />
                )}
                {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.GATES) >=
                0 ? null : (
                    <ImageButton
                        icon={bridgeBG}
                        onClick={() => {
                            selectWayHandler(VALORIA_ROAD_METHOD_ENUM.GATES)
                        }}
                        text={t('gates')}
                    />
                )}
            </div>
        </ModalWrapper>
    )
}