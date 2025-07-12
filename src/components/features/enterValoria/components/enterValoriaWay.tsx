import { VALORIA_ROAD_METHOD_ENUM } from "../../../../types/Enums"
import ImageButton from "../../../shared/imageButton"
import { ModalWrapper } from "./modalWrapper"
import forstBg from "../../../../assets/icons/forest.svg"
import bridgeBG from "../../../../assets/icons/bridge.png"
import homesBg from "../../../../assets/icons/home.svg"
export const EnterValoriaMethod = ({
    selectedBefore,
    selectWayHandler
}: {
    selectedBefore: VALORIA_ROAD_METHOD_ENUM[]
    selectWayHandler: (way: VALORIA_ROAD_METHOD_ENUM) => void
}) => {
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center "
            classes="!justify-around !w-[90%] !h-[90] !max-w-[1000px] !relative px-20 lg:px-[80px]"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
                choose way to enter valoria
            </p>
            <div className="flex w-full items-center justify-around">
                {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.RIVER) >=
                0 ? null : (
                    <ImageButton
                        icon={homesBg}
                        onClick={() => {
                            selectWayHandler(VALORIA_ROAD_METHOD_ENUM.RIVER)
                        }}
                        text="RIVER"
                    />
                )}
                {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.FOREST) >=
                0 ? null : (
                    <ImageButton
                        icon={forstBg}
                        onClick={() => {
                            selectWayHandler(VALORIA_ROAD_METHOD_ENUM.FOREST)
                        }}
                        text="FOREST"
                    />
                )}
                {selectedBefore?.findIndex(item => item == VALORIA_ROAD_METHOD_ENUM.GATES) >=
                0 ? null : (
                    <ImageButton
                        icon={bridgeBG}
                        onClick={() => {
                            selectWayHandler(VALORIA_ROAD_METHOD_ENUM.GATES)
                        }}
                        text="GATES"
                    />
                )}
            </div>
        </ModalWrapper>
    )
}