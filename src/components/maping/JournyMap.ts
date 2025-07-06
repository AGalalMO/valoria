export const journeyMap = {
    start: {
        options: ["Palm Road", "Cliff Road", "Silk Road"]
    },
    "Palm Road": {
        steps: ["Farm", "Lake", "Palm Road End"],
        next: "intersection-palm-cliff"
    },
    "Cliff Road": {
        steps: ["Lake", "Cliff", "Mountain Edge"],
        next: "intersection-cliff-silk"
    },
    "Silk Road": {
        steps: ["Lake", "Hill", "Silk Road End"],
        next: "intersection-cliff-silk"
    },
    "intersection-cliff-silk": {
        action: "You reach a crossroad. Choose your next destination:",
        options: ["Forest Path", "Ruins Trail"]
    }
}
