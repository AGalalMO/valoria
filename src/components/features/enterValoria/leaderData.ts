import type { LeaderType } from "../../../types/leaders";
import leadIcon from '../../../assets/icons/lead.png'
import aws from '../../../assets/backgrounds/aws.png'
import slam from '../../../assets/backgrounds/salama.png'
import bother from '../../../assets/backgrounds/b7er.png'
import sabet from "../../../assets/backgrounds/sabt.png"
export const leaders: LeaderType[] = [
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "DRAR",
        icon: leadIcon,
        pros: ["leader_power.DRAR.1", "leader_power.DRAR.2", "leader_power.DRAR.3"],
        cons: ["leader_power.DRAR.4", "leader_power.DRAR.5"],
        rightJobIndex: 1
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "AWS",
        icon: aws,
        pros: ["leader_power.AWS.1", "leader_power.AWS.2", "leader_power.AWS.3"],
        cons: ["leader_power.AWS.4", "leader_power.AWS.5"],
        rightJobIndex: 2
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "SLAM",
        icon: slam,
        pros: ["leader_power.SLAM.1", "leader_power.SLAM.2", "leader_power.SLAM.3"],
        cons: ["leader_power.SLAM.4", "leader_power.SLAM.5"],
        rightJobIndex: 3
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "BOTHER",
        icon: bother,
        pros: ["leader_power.DRAR.1", "leader_power.DRAR.2", "leader_power.DRAR.3"],
        cons: ["leader_power.DRAR.4", "leader_power.DRAR.5"],
        rightJobIndex: 4
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "SABET",
        icon: sabet,
        pros: ["leader_power.SABET.1", "leader_power.SABET.2", "leader_power.SABET.3"],
        cons: ["leader_power.SABET.4", "leader_power.SABET.5"],
        rightJobIndex: 0
    },

    {
        advantage: {
            army: -3,
            money: 0,
            people: -2
        },
        name: "QSAM",
        icon: leadIcon
    },
    {
        advantage: {
            army: -3,
            money: 0,
            people: -2
        },
        name: "GLWAN",
        icon: leadIcon
    },
    {
        advantage: {
            army: -3,
            money: 0,
            people: -2
        },
        name: "HARES",
        icon: leadIcon
    },
    {
        advantage: {
            army: -3,
            money: 0,
            people: -2
        },
        name: "SAHAR",
        icon: leadIcon
    },
    {
        advantage: {
            army: -3,
            money: 0,
            people: -2
        },
        name: "GHAWAS",
        icon: leadIcon
    }
]
export const RightLeaders = ["DRAR", "AWS", "SLAM", "BOTHER", "SABET"]