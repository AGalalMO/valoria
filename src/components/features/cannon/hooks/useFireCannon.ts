import { useState } from "react"
import type { ManPower } from "../../../../types/manPower"
import { FLOW_ENUM } from "../../../../types/FLowEnum"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

export default function useFireCannon({
    changePowers,
    changeFlowState,
    setFeedBack
}: {
    changePowers: (powers: ManPower) => void
    changeFlowState: (flow: FLOW_ENUM) => void
    setFeedBack: React.Dispatch<
        React.SetStateAction<{
            people: string | null
            army: string | null
            money: string | null
            info: string | null
        }>
    >
}) {
    const [tryAgain, setTryAgain] = useState(false)
    const { t } = useTranslation()
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
    const [wrongAnswers, setWrongAnswers] = useState<number[]>([])
    const notify = () =>
        toast(t("please_Select_cannon_angles"), {
            progress: 0,
            theme: "dark",
            autoClose: 1500,
            position: "top-center"
        })
    const hitByCannon = () => {
        let powers = { money: 0, people: 0, army: 0 }
        if (
            cannonDirection.power.value == null ||
            cannonDirection.xAngle.value == null ||
            cannonDirection.yAngle.value == null
        ) {
            {
                notify()
                return
            }
        } else {
            if (!cannonDirection.power.selected) {
                powers = {
                    army: powers.army - 1,
                    people: powers.people - 1,
                    money: powers.money - 1
                }
                setWrongAnswers(prev => [...prev, cannonDirection.power.value as number])
            }

            if (!cannonDirection.xAngle.selected) {
                powers = {
                    army: powers.army - 1,
                    people: powers.people - 1,
                    money: powers.money - 1
                }
                setWrongAnswers(prev => [...prev, cannonDirection.xAngle.value as number])
            }
            if (!cannonDirection.yAngle.selected) {
                powers = {
                    army: powers.army - 1,
                    people: powers.people - 1,
                    money: powers.money - 1
                }
                setWrongAnswers(prev => [...prev, cannonDirection.yAngle.value as number])
            }

            if (
                cannonDirection.power.selected &&
                cannonDirection.xAngle.selected &&
                cannonDirection.yAngle.selected
            ) {
                changePowers({ army: 0, people: 3, money: -3 })
                 changePowers(powers)
                 setFeedBack({
                     army: null,
                     people: `people_increaseXX3`,
                     money: `money_decreaseXX3`,
                     info: "Firing"
                 })
                changeFlowState(FLOW_ENUM.FIRE_CANNON_SUCCESS)
            } else if (
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
                  setFeedBack({
                      army: `army_decreaseXX${powers.army*-1}`,
                      people: `people_decreaseXX${powers.people*-1}`,
                      money: `money_decreaseXX${powers.money*-1}`,
                      info: "wrongChoice"
                  })
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
                xAngle: {
                    ...prev.xAngle,
                    value: value,
                    selected: value == -2.25
                }
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
                yAngle: { ...prev.yAngle, value: value, selected: value == 45 }
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
                power: { ...prev.power, value: value, selected: value == 420 }
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
        setPowers,
        wrongAnswers
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
