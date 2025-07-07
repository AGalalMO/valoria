import type { MAP_MODAL_TYPE, Way_IN } from "./Enums"
import type { UserProgressType } from "./UserProgress"

export type ModalOptionType = {
    isOpen: boolean
    modalType: MAP_MODAL_TYPE | null
    index?: number
}

export type InteractiveMapPropsType = {
    selectedWayIn: Way_IN | null
    setProgress: React.Dispatch<React.SetStateAction<UserProgressType>>
}
export type  MapModalPropsType = {
     modalOptions: {
         isOpen: boolean
         modalType: MAP_MODAL_TYPE | null
     }
     onClickCancelChangeRoute: () => void
     onClickChangeRoute: () => void
     onSelectSoliderPercentage: (percentage: number) => void
     continueWithoutMoreMen: () => void
     askForMen: () => void
 }