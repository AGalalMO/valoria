import type { Dispatch, SetStateAction } from "react"
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
    setFeedBack: Dispatch<
        SetStateAction<{
            people: string | null
            army: string | null
            money: string | null
            info: string | null
        }>
    >
}
export type MapModalPropsType = {
    modalOptions: {
        isOpen: boolean
        modalType: MAP_MODAL_TYPE | null
    }

    onClickCancelChangeRoute: () => void
    onClickChangeRoute: () => void
    passed:VoidFunction
    continueWithoutMoreMen: () => void
    askForMen: () => void
    onCloseModal: () => void
    onSacrifice: () => void
    isHidden?: boolean | null
}