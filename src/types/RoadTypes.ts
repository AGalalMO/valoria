import type { ManPower } from "./manPower"

export type RoadType = {
    id: string
    index:number,
    label: string
    style: RoadPointType
    nextLabel: string
    phases: RoadPhasesType[]
    intersections: RoadIntersectionType[]
    road: RoadCheckPointType[]

}
export type RoadPointType = {
    top: string;
    right: string;
}
export type RoadCheckPointType = {
    id:string
    style: RoadPointType
    phase: number
    visible: boolean
    advantage?:ManPower
}
export type RoadIntersectionType = {
    id:string
    phase: number
    style:RoadPointType
}
export type RoadPhasesType = {
    id: number
    alternateIndex: number
    alternatePhase: number
}

export type JourneyMapsType = {
    Spy: {
        map: string
        roads: RoadType[]
    }
    Allie: {
        map: string

        roads: RoadType[]
    }
    Attack: {
        map: string

        roads: RoadType[]
    }
}