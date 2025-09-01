import spyMap from "../../../assets/mapp.jpeg"
import type { JourneyMapsType } from '../../../types/RoadTypes'
export const JourneyMapBlueprint: JourneyMapsType = {
    Spy: {
        map: spyMap,
        roads: [
            {
                id: "Palm Road",
                index: 0,
                label: "Palm Road",
                style: {
                    top: "11%",
                    right: "3.5%"
                },
                nextLabel: "Cliff Road",
                phases: [
                    {
                        id: 2,
                        alternateIndex: 1,
                        alternatePhase: 4
                    }
                ],
                intersections: [
                    {
                        id: "Intersecting_01",
                        phase: 2,
                        style: {
                            top: "7%",
                            right: "44%"
                        }
                    }
                ],
                road: [
                    {
                        id: "Complete",
                        style: {
                            top: "16%",
                            right: "9%"
                        },
                        phase: 1,
                        visible: false
                    },
                    {
                        id: "Complete",
                        style: {
                            top: "12%",
                            right: "14%"
                        },
                        phase: 1,
                        visible: false
                    },
                    {
                        id: "Complete",
                        style: {
                            top: "10%",
                            right: "18%"
                        },
                        phase: 1,
                        visible: false
                    },

                    {
                        id: "Complete",
                        phase: 1,

                        style: {
                            top: "7%",
                            right: "25%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        style: {
                            top: "6%",
                            right: "29%"
                        },
                        phase: 1,
                        visible: false
                    },
                    {
                        id: "Complete",
                        style: {
                            top: "7%",
                            right: "34%"
                        },
                        phase: 1,
                        visible: false
                    },
                    {
                        id: "enemy",
                        phase: 3,

                        style: {
                            top: "8%",
                            right: "52%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy",
                        phase: 3,

                        style: {
                            top: "12%",
                            right: "59%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        phase: 4,

                        style: {
                            top: "18%",
                            right: "72%"
                        },
                        visible: false,
                        advantage: {
                            army: 1,
                            money: 3,
                            people: 2
                        }
                    },

                    {
                        id: "enemy_hidden",
                        phase: 5,

                        style: {
                            top: "20%",
                            right: "75%"
                        },
                        visible: false
                    }
                ]
            },
            {
                id: "Cliff Road",
                label: "Cliff Road",
                index: 1,
                style: {
                    top: "33%",
                    right: "7.5%"
                },
                phases: [
                    {
                        id: 3,
                        alternateIndex: 0,
                        alternatePhase: 3
                    },
                    {
                        id: 5,
                        alternateIndex: 2,
                        alternatePhase: 4
                    }
                ],
                intersections: [
                    {
                        id: "Intersecting_21",
                        phase: 3,
                        style: {
                            top: "52.5%",
                            right: "44%"
                        }
                    },
                    {
                        id: "Intersecting_22",
                        phase: 5,
                        style: {
                            top: "50%",
                            right: "60.5%"
                        }
                    }
                ],
                nextLabel: "Silk Road",
                road: [
                    {
                        id: "complete",
                        phase: 1,

                        style: {
                            top: "31%",
                            right: "9%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy",
                        phase: 1,

                        style: {
                            top: "33%",
                            right: "14%"
                        },
                        visible: false
                    },
                    {
                        id: "complete",
                        phase: 2,

                        style: {
                            top: "35%",
                            right: "18%"
                        },
                        visible: false
                    },
                    {
                        id: "complete",
                        phase: 2,

                        style: {
                            top: "38%",
                            right: "28%"
                        },
                        visible: false
                    },
                    {
                        id: "complete",
                        phase: 2,

                        style: {
                            top: "38%",
                            right: "34%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        phase: 2,

                        style: {
                            top: "48%",
                            right: "35%"
                        },
                        visible: false,
                        advantage: {
                            army: 2,
                            money: 1,
                            people: 2
                        }
                    },
                    {
                        id: "complete",
                        phase: 3,

                        style: {
                            top: "51%",
                            right: "40%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy",
                        phase: 4,
                        style: {
                            top: "51%",
                            right: "52%"
                        },
                        visible: false
                    },
                    {
                        id: "complete",
                        phase: 5,

                        style: {
                            top: "44%",
                            right: "63%"
                        },
                        visible: false
                    },
                    {
                        id: "complete",
                        phase: 5,

                        style: {
                            top: "45%",
                            right: "63%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden",
                        phase: 6,

                        style: {
                            top: "37%",
                            right: "68%"
                        },
                        visible: false
                    }
                ]
            },
            {
                id: "Silk Road",
                label: "Silk Road",
                index: 2,
                nextLabel: "Cliff Road",
                phases: [
                    {
                        id: 3,
                        alternateIndex: 1,
                        alternatePhase: 6
                    }
                ],
                style: {
                    top: "49%",
                    right: "5%"
                },
                intersections: [
                    {
                        id: "Intersecting_22",
                        phase: 3,
                        style: {
                            top: "74%",
                            right: "50.5%"
                        }
                    }
                ],
                road: [
                    {
                        id: "Complete",
                        phase: 1,

                        style: {
                            top: "40%",
                            right: "6%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        phase: 1,

                        style: {
                            top: "49%",
                            right: "11%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        phase: 1,

                        style: {
                            top: "64%",
                            right: "20%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        phase: 1,

                        style: {
                            top: "67%",
                            right: "15%"
                        },
                        visible: false
                    },

                    {
                        id: "Complete",
                        phase: 1,

                        style: {
                            top: "68%",
                            right: "32%"
                        },
                        advantage: {
                            army: 2,
                            money: 1,
                            people: 2
                        },
                        visible: false
                    },
                    {
                        id: "enemy",
                        phase: 2,

                        style: {
                            top: "71%",
                            right: "39%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden1",
                        phase: 4,

                        style: {
                            top: "70%",
                            right: "61%"
                        },
                        visible: false
                    },
                    {
                        id: "Complete",
                        phase: 5,
                        style: {
                            top: "66%",
                            right: "76%"
                        },
                         advantage: {
                            army: 1,
                            money: 3,
                            people: 2
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden2",
                        phase: 6,

                        style: {
                            top: "50%",
                            right: "84%"
                        },
                        visible: false
                    }
                ]
            }
        ]
    },
  
}