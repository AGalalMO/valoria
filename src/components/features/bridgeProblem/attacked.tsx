import valoriaMap from "../../../assets/valoriaMap-min.png"
import ImageButton from "../../shared/imageButton"
import { ModalWrapper } from "../enterValoria/components/modalWrapper"
import seeme from "../../../assets/seeme.png"
import alliez from "../../../assets/alliez.png"
import deadBody from "../../../assets/deadBody.png"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { LeaderType } from "../../../types/leaders"
import type { ManPower } from "../../../types/manPower"
import { useTranslation } from "react-i18next"
export default function Attacked({
    setSelectedSubLeaders,
    changeFlowState,
    changePowers
}: {
    changeFlowState: (flow: FLOW_ENUM) => void
    setSelectedSubLeaders: React.Dispatch<React.SetStateAction<LeaderType | null>>
    changePowers: (powers: ManPower) => void
    }) {
    const {t}=useTranslation()
    return (
        <div className="flex h-full w-full flex-col items-center justify-start xl:mt-10">
            <div
                style={{
                    backgroundImage: `url(${valoriaMap})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
                className="h-[80vh] w-[95vw] xl:!h-[70vh] xl:!w-[80vw]"
            >
                <ModalWrapper
                    parentClass="!w-full !justify-center"
                    classes="!justify-around !w-[90%] !h-[90] !relative"
                >
                    <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                        {t("attacked_building")}
                    </p>
                    <div className="flex w-full items-center justify-center gap-6">
                        <ImageButton
                            icon={deadBody}
                            onClick={() => {
                                setSelectedSubLeaders(null)
                                changeFlowState(FLOW_ENUM.OVER_MY_DEAD_BODY)
                            }}
                            text={t("dead_body")}
                        />
                        <ImageButton
                            icon={seeme}
                            onClick={() => {
                                setSelectedSubLeaders(null)

                                changeFlowState(FLOW_ENUM.SEE_ME)
                            }}
                            text={t("see_me")}
                        />
                        <ImageButton
                            icon={alliez}
                            onClick={() => {
                                changePowers({ money: -7, army: -7, people: -1 })
                                setSelectedSubLeaders(null)

                                changeFlowState(FLOW_ENUM.CANNON_ATTACK)
                            }}
                            text={t("allez")}
                        />
                    </div>
                </ModalWrapper>
            </div>
        </div>
    )
}
