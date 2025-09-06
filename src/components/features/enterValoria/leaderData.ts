import type { LeaderType } from "../../../types/leaders";
import leadIcon from '../../../assets/icons/lead.png'
import aws from '../../../assets/backgrounds/aws.png'
import slam from '../../../assets/backgrounds/salama.png'
import bother from '../../../assets/backgrounds/b7er.png'
import sabet from "../../../assets/backgrounds/sabt.png"
import lead1 from "../../../assets/lead1.jpeg"
import lead2 from "../../../assets/lead2.jpeg"
import lead3 from "../../../assets/lead3.jpeg"
import lead4 from "../../../assets/lead4.jpeg"
import lead5 from "../../../assets/lead5.jpeg"
export const leaders: LeaderType[] = [
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "DRAR",
        icon: leadIcon,
        desc: `drar1`,
        desc2: `drar2`,
        pros: ["leader_power.DRAR.1", "leader_power.DRAR.2", "leader_power.DRAR.3"],
        cons: ["leader_power.DRAR.4", "leader_power.DRAR.5"],
        rightJobIndex: 1
    },

    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "HARES",
        desc: `hares1`,
        icon: lead3
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "SABET",
        desc2: "sabet1",
        desc: `sabet2`,
        icon: sabet,
        pros: ["leader_power.SABET.1", "leader_power.SABET.2", "leader_power.SABET.3"],
        cons: ["leader_power.SABET.4", "leader_power.SABET.5"],
        rightJobIndex: 0
    },

    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "QSAM",
        icon: lead4,
        desc: `qasm1`
    },
    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "SAHAR",
        desc: `sahar1`,
        icon: lead5
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "SLAM",
        desc: `slam1`,
        desc2: `slam2`,
        icon: slam,
        pros: ["leader_power.SLAM.1", "leader_power.SLAM.2", "leader_power.SLAM.3"],
        cons: ["leader_power.SLAM.4", "leader_power.SLAM.5"],
        rightJobIndex: 3
    },
    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "GLWAN",
        desc: `glwan1`,
        icon: lead1
    },

    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "BEHER",
        desc: `bother1`,
        icon: bother,
        pros: ["leader_power.DRAR.1", "leader_power.DRAR.2", "leader_power.DRAR.3"],
        desc2: `bother2`,
        cons: ["leader_power.DRAR.4", "leader_power.DRAR.5"],
        rightJobIndex: 4
    },

    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "GHAWAS",
        desc: `gawas1`,
        icon: lead2
    },
    {
        advantage: {
            army: 2,
            money: 0,
            people: 1
        },
        name: "AWS",
        desc: `aws1`,
        desc2: `aws2`,
        icon: aws,
        pros: ["leader_power.AWS.1", "leader_power.AWS.2", "leader_power.AWS.3"],
        cons: ["leader_power.AWS.4", "leader_power.AWS.5"],
        rightJobIndex: 2
    }
]
export const RightLeaders = ["DRAR", "AWS", "SLAM", "BEHER", "SABET"]