import type { ManPower } from "./manPower";

export type LeaderType = {
    name: string
    advantage: ManPower
    icon: string
    pros?: string[]
    cons?: string[]
    rightJobIndex?:number
}