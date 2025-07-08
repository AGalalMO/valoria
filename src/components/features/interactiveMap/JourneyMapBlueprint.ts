import spyMap from '../../../assets/maps/spy.png'
import allieMap from '../../../assets/maps/allieMap.png'
import attackMap from "../../../assets/maps/attackCheck.png"
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
                        phase: 1,

                        style: {
                            top: "7%",
                            right: "25%"
                        },
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
                        id: "Complete",
                        phase: 4,

                        style: {
                            top: "18%",
                            right: "72%"
                        },
                        visible: false,
                        advantage: {
                            army: 2,
                            money: 0,
                            people: 2
                        }
                    },

                    {
                        id: "enemy_hidden",
                        phase: 5,

                        style: {
                            top: "24%",
                            right: "78%"
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
                        id: "enemy",
                        phase: 1,

                        style: {
                            top: "33%",
                            right: "14%"
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
                            army: 3,
                            money: 0,
                            people: 2
                        }
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
                        id: "enemy_hidden",
                        phase: 6,

                        style: {
                            top: "39%",
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
                            top: "49%",
                            right: "11%"
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
                            army: 3,
                            people: 2,
                            money: 0
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
                            top: "72%",
                            right: "64%"
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
                            army: 2,
                            people: 2,
                            money: 0
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden2",
                        phase: 6,

                        style: {
                            top: "51%",
                            right: "85%"
                        },
                        visible: false
                    }
                ]
            }
        ]
    },
    Allie: {
        map: allieMap,
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
                        phase: 1,

                        style: {
                            top: "7%",
                            right: "25%"
                        },
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
                        id: "Complete",
                        phase: 4,

                        style: {
                            top: "18%",
                            right: "72%"
                        },
                        visible: false,
                        advantage: {
                            army: 2,
                            money: 0,
                            people: 2
                        }
                    },

                    {
                        id: "enemy_hidden",
                        phase: 5,

                        style: {
                            top: "24%",
                            right: "78%"
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
                        id: "enemy",
                        phase: 1,

                        style: {
                            top: "33%",
                            right: "14%"
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
                            army: 3,
                            money: 0,
                            people: 2
                        }
                    },
                    {
                        id: "enemy_hidden1",
                        phase: 4,
                        style: {
                            top: "51%",
                            right: "52%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden2",
                        phase: 6,

                        style: {
                            top: "39%",
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
                            top: "49%",
                            right: "11%"
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
                            top: "72%",
                            right: "64%"
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

                        visible: false
                    },
                    {
                        id: "enemy_hidden2",
                        phase: 6,

                        style: {
                            top: "51%",
                            right: "85%"
                        },
                        visible: false
                    }
                ]
            }
        ]
    },
    Attack: {
        map: attackMap,
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
                            top: "6.1%",
                            right: "44.1%"
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
                        phase: 1,

                        style: {
                            top: "7%",
                            right: "25%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy",
                        phase: 3,

                        style: {
                            top: "8%",
                            right: "54%"
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
                            army: 2,
                            money: 0,
                            people: 2
                        }
                    },

                    {
                        id: "enemy_hidden",
                        phase: 5,

                        style: {
                            top: "24%",
                            right: "78%"
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
                            top: "50.4%",
                            right: "60.9%"
                        }
                    }
                ],
                nextLabel: "Silk Road",
                road: [
                    {
                        id: "enemy",
                        phase: 1,

                        style: {
                            top: "39%",
                            right: "25%"
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
                        visible: false
                    },
                    {
                        id: "enemy_hidden1",
                        phase: 4,
                        style: {
                            top: "51%",
                            right: "52%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden2",
                        phase: 6,

                        style: {
                            top: "39%",
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
                            top: "49%",
                            right: "11%"
                        },
                        visible: false
                    },
                    {
                        id: "enemy_hidden0",
                        phase: 2,
                        style: {
                            top: "63.5%",
                            right: "26%"
                        },
                        visible: false
                    },
                  

                    {
                        id: "enemy_hidden1",
                        phase: 4,

                        style: {
                            top: "72%",
                            right: "64%"
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

                        visible: false
                    },
                    {
                        id: "enemy_hidden2",
                        phase: 6,

                        style: {
                            top: "51%",
                            right: "85%"
                        },
                        visible: false
                    }
                ]
            }
        ]
    }
}
 