// cspell:ignore VALORIA
export const Way_IN = {
    SPY: "SPY",
    ALLIE: "ALLIE",
    ATTACK: "ATTACK"
} as const

export const ROAD_ENUM = {
    PALM: "PALM",
    CLIFF: "CLIFF",
    SILK: "SILK"
} as const

export const WAYS_ENTER_VALORIA = {
    HOMES: "HOMES",
    FOREST: "FOREST",
    BRIDGE: "BRIDGE"
} as const

export const MAP_MODAL_TYPE = {
    SOLIDER_PERCENTAGE: "SOLIDER_PERCENTAGE",
    CHANGE_ROUTE: "CHANGE_ROUTE",
    INCREASE_SOLDIERS: "INCREASE_SOLDIERS"
} as const
export type Way_IN = (typeof Way_IN)[keyof typeof Way_IN]
export type ROAD_ENUM = (typeof ROAD_ENUM)[keyof typeof ROAD_ENUM]
export type WAYS_ENTER_VALORIA = (typeof WAYS_ENTER_VALORIA)[keyof typeof WAYS_ENTER_VALORIA]
export type MAP_MODAL_TYPE = (typeof MAP_MODAL_TYPE)[keyof typeof MAP_MODAL_TYPE]
