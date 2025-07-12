import type { LeaderType } from "../../../types/leaders";
import leadIcon from '../../../assets/icons/lead.png'
export const leaders: LeaderType[] = [
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "DRAR",
        icon: leadIcon,
        pros: [
            "Deploying forces to secure rooftops of high-rise buildings first",
            "Conducting a thorough sweeping operation from street to street",
            "Deploying forces as a surprise from back doors"
        ],
        cons: ["The streets will be exposed", "conflict with BOTHER. — out of scope"],
        rightJobIndex:1
        
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "AWS",
        icon: leadIcon,
        pros: [
            "Building an additional bridge in the area to reinforce the engineering teams",
            "Assigning forces to patrol the city's streets",
            "Sealing the western entrances of the city to prevent enemy infiltration"
        ],
        cons: [
            "Consumes engineering resources in inappropriate tasks",
            "Conflicts with the rest of the internal visits"
        ],
        rightJobIndex:2
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "SLAM",
        icon: leadIcon,
        pros: [
            "Deploying light units using natural terrain as cover to ambush and extract the enemy",
            "Setting fire to the location to force resistance",
            "Building concrete walls in green areas to isolate them"
        ],
        cons: [
            "Causes the city to lose its natural and strategic value",
            "Massive effort without tactical value and hinders mobility"
        ],
        rightJobIndex:3
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "BOTHER",
        icon: leadIcon,
        pros: [
            "Establishing water barriers to block any boats or ships",
            "Setting up complete inspection points and running patrols around the river",
            "Moving part of the front to the other bank and completely evacuating the river"
        ],
        cons: [
            "Disrupts movement for friendly forces",
            "Weakens the positions in the city and creates logistical isolation"
        ],
        rightJobIndex:4
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "SABET",
        icon: leadIcon,
        pros: [
            "Leading the attack from inside the city with backup forces to support the advance",
            "Fortifying the perimeter of the main roundabout and establishing a permanent observation post",
            "Sending forces to monitor the outer borders of the city"
        ],
        cons: [
            "Out of scope and exposes friendly forces to chaos",
            "Too far from the core combat zones"
        ],
        rightJobIndex:0
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