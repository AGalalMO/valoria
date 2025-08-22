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
        desc: `expert in fighting in narrow streets and inside neighborhoods `,
        desc2: `Low Directive & High Supportive Behavior, Derar thrives with a Participating Style, rallying the troops through shared decision-making and emotional engagement, ensuring that skill is matched with unshakable resolve.`,
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
        desc: `expert in fighting mountains`,
        desc2: `Highly Directive & Low Supportive Behavior. AWS embrace the Directing Style, issuing clear, non-negotiable orders, monitoring execution closely, and ensuring that every move serves the singular goal: crossing the bridge before it’s too late`,
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
        desc: `can fight in landscapes & Forests.`,
        desc2:`Low Directive & Low Supportive Behavior. Salam uses the Delegating Style, trusting skilled, motivated soldiers to act independently. He sets the vision, steps back, and lets his team adapt and deliver the mission with minimal oversight.`,
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
        desc: `expert in fighting in rivers`,
        icon: bother,
        pros: ["leader_power.DRAR.1", "leader_power.DRAR.2", "leader_power.DRAR.3"],
        desc2:` Highly Directive & Low Supportive Behavior. Beher embrace the Directing Style, issuing clear, non-negotiable orders, monitoring execution closely, and ensuring that every move serves the singular goal: crossing the bridge before it’s too late.`,
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
        desc2: `Highly Directive & Highly Supportive Behavior, Thabet adopt a Coaching Style, providing step-by-step instructions while fueling morale, turning raw enthusiasm into precise, coordinated maneuvers that outwit the opposition.`,
        desc: `expert in conquering bridges & cross points.`,
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
        icon: leadIcon,
        desc: `expert in fighting in dark places and caves`
    },
    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "GLWAN",
        desc: `expert in fighting in snow weather`,
        icon: leadIcon
    },
    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "HARES",
        desc: `expert in fighting in hot weather`,
        icon: leadIcon
    },
    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "SAHAR",
        desc: `expert in fighting in deserts`,
        icon: leadIcon
    },
    {
        advantage: {
            army: -1,
            money: -1,
            people: -1
        },
        name: "GHAWAS",
        desc: `expert in fighting in oceans and deep seas.`,
        icon: leadIcon
    }
]
export const RightLeaders = ["DRAR", "AWS", "SLAM", "BOTHER", "SABET"]