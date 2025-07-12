import { useState } from "react"
import type { ManPower } from "../../../../types/manPower"
import { FLOW_ENUM } from "../../../../types/FLowEnum"

export default function useFireCannon({
    changePowers,
    changeFlowState
}: {
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
}) {
    const [tryAgain, setTryAgain] = useState(false)
    const [cannonDirection, setCannonDirection] = useState<CannonDirectType>({
        xAngle: {
            success: false,
            selected: false,
            value: null
        },
        yAngle: {
            success: false,
            selected: false,
            value: null
        },
        power: {
            success: false,
            selected: false,
            value: null
        }
    })

    const hitByCannon = () => {
        let powers = { money: 0, people: 0, army: 0 }
        if (
            cannonDirection.power.value == null ||
            cannonDirection.xAngle.value == null ||
            cannonDirection.yAngle.value == null
        ) {
            return
        } else {
            if (!cannonDirection.power.selected) {
                powers = {
                    army: powers.army - 1,
                    people: powers.people - 1,
                    money: powers.money - 2
                }
            }

            if (!cannonDirection.xAngle.selected) {
                powers = {
                    army: powers.army - 1,
                    people: powers.people - 1,
                    money: powers.money - 2
                }
            }
            if (!cannonDirection.yAngle.selected) {
                powers = {
                    army: powers.army - 1,
                    people: powers.people - 1,
                    money: powers.money - 2
                }
            }

          
            if (
                cannonDirection.power.selected &&
                cannonDirection.xAngle.selected &&
                cannonDirection.yAngle.selected
            ) {
                changePowers({ army: 0, people: 3, money: -3 })
                changeFlowState(FLOW_ENUM.CONTROL_VALORIA)
            }
            else if (
                !cannonDirection.power.selected ||
                !cannonDirection.xAngle.selected ||
                !cannonDirection.yAngle.selected
            ) {
                setCannonDirection(prev => {
                    return {
                        ...prev,
                        power: { ...prev.power, success: prev.power.selected },
                        xAngle: { ...prev.xAngle, success: prev.xAngle.selected },
                        yAngle: { ...prev.yAngle, success: prev.yAngle.selected }
                    }
                })
                setTryAgain(true)
                changePowers(powers)
            }
        }
    }

    const setXValue = (value: number) => {
        if (cannonDirection.xAngle.value == value)
            setCannonDirection(prev => ({
                ...prev,
                xAngle: { ...prev.xAngle, value: null, selected: false }
            }))
        else
            setCannonDirection(prev => ({
                ...prev,
                xAngle: { ...prev.xAngle, value: value, selected: value == -2.25 }
            }))
    }
    const setYValue = (value: number) => {
        if (cannonDirection.yAngle.value == value) {
            setCannonDirection(prev => ({
                ...prev,
                yAngle: { ...prev.yAngle, value: null, selected: false }
            }))
        } else {
            setCannonDirection(prev => ({
                ...prev,
                yAngle: { ...prev.yAngle, value: value, selected: value == 40 }
            }))
        }
    }
    const setPowers = (value: number) => {
        if (cannonDirection.yAngle.value == value) {
            setCannonDirection(prev => ({
                ...prev,
                power: { ...prev.power, value: null, selected: false }
            }))
        } else {
            setCannonDirection(prev => ({
                ...prev,
                power: { ...prev.power, value: value, selected: value == 380 }
            }))
        }
    }

    return {
        tryAgain,
        cannonDirection,
        setTryAgain,
        hitByCannon,
        setXValue,
        setYValue,
        setPowers
    }
}


export type CannonDirectType = {
    xAngle: {
        success: boolean
        selected: boolean
        value: number | null
    }
    yAngle: {
        success: boolean
        selected: boolean
        value: number | null
    }
    power: {
        success: boolean
        selected: boolean
        value: number | null
    }
}