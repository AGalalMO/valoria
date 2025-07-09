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



export const MAP_MODAL_TYPE = {
    SOLIDER_PERCENTAGE: "SOLIDER_PERCENTAGE",
    CHANGE_ROUTE: "CHANGE_ROUTE",
    INCREASE_SOLDIERS: "INCREASE_SOLDIERS"
} as const
export const VALORIA_ROAD_METHOD_ENUM = {
    FOREST: "FOREST",
    GATES: "GATES",
    RIVER: "RIVER"
} as const
export const VALORIA_ROAD_ENUM = {
    SELECT_ROAD_TO_VALORILA: "SELECT_ROAD_TO_VALORILA",
    SELECT_SUITABLE_LEADER: "SELECT_SUITABLE_LEADER",
    SELECT_OPTION_TO_CONTINUE: "SELECT_OPTION_TO_CONTINUE",
} as const



export const LEADER_CONFLICT_ENUM = {
    ACT_FAST: "ACT_FAST",
    MEETING: "MEETING",
    CHANGE_LEADS: "CHANGE LEADS"
} as const
export type Way_IN = (typeof Way_IN)[keyof typeof Way_IN]
export type ROAD_ENUM = (typeof ROAD_ENUM)[keyof typeof ROAD_ENUM]
export type MAP_MODAL_TYPE = (typeof MAP_MODAL_TYPE)[keyof typeof MAP_MODAL_TYPE]
export type VALORIA_ROAD_METHOD_ENUM = (typeof VALORIA_ROAD_METHOD_ENUM)[keyof typeof VALORIA_ROAD_METHOD_ENUM]
export type VALORIA_ROAD_ENUM = (typeof VALORIA_ROAD_ENUM)[keyof typeof VALORIA_ROAD_ENUM]
export type LEADER_CONFLICT_ENUM = (typeof LEADER_CONFLICT_ENUM)[keyof typeof LEADER_CONFLICT_ENUM]

