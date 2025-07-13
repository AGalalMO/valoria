import { Way_IN } from "../../../types/Enums"
import { FLOW_ENUM } from "../../../types/FLowEnum"
import type { ManPower } from "../../../types/manPower"
import ImageButton from "../../shared/imageButton"
import allie from "../../../assets/icons/allie.svg"
import spy from "../../../assets/icons/spy.svg"
import attack from "../../../assets/icons/attack.svg"
import type { UserProgressType } from "../../../types/UserProgress"
import { ModalWrapper } from "./components/modalWrapper"
export const SelectValoriaWayIn = ({
    setProgress,
    progress
}: {
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
    progress: UserProgressType
}) => {
    const calculateManPower = (way: Way_IN, currentPower: ManPower) => {
        let result: ManPower = currentPower
        switch (way) {
            case Way_IN.SPY:
                result = { money: 88, people: 88, army: 92 }
                break
            case Way_IN.ALLIE:
                result = { money: 90, people: 88, army: 91 }
                break
            case Way_IN.ATTACK:
                result = { money: 85, people: 92, army: 90 }
                break
            default:
                break
        }
        return result
    }
    const onSelectWayIn = (way: Way_IN) => {
        const newPowers = calculateManPower(way, progress.manPower)
        setProgress(prev => {
            return {
                ...prev,
                manPower: newPowers,
                selectedWayIn: way,
                currentFlow: FLOW_ENUM.SELECT_ROAD
            }
        })
    }
 
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-around !w-[90%] !h-[90]
            !relative"
        >
            <p className="font-trajan w-full text-center text-2xl lg:text-[30px] font-bold">
                to start the war you need to get the map of valoria choose the best way to get it
            </p>
            <div className="flex items-center gap-8">
                <ImageButton
                    onClick={() => {
                        onSelectWayIn(Way_IN.SPY)
                    }}
                    icon={spy}
                    text="SEND SPY"
                />
                <ImageButton
                    onClick={() => {
                        onSelectWayIn(Way_IN.ALLIE)
                    }}
                    icon={allie}
                    text="favour from allie"
                />
                <ImageButton
                    onClick={() => {
                        onSelectWayIn(Way_IN.ATTACK)
                    }}
                    icon={attack}
                    text="Attack Now"
                />
            </div>
        </ModalWrapper>
    )
}
