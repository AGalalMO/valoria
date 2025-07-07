import type { Way_IN } from "./Enums"
import type { FLOW_ENUM } from "./FLowEnum"
import type { ManPower } from "./manPower"

export type UserProgressType = {
    currentFlow: FLOW_ENUM
    selectedWayIn: Way_IN | null
    manPower: ManPower
}