import { useState } from "react"
import { Way_IN } from "../../../types/Enums"

export const useValoria = () => {
    const [powers, setPowers] = useState({
        money: 90,
        people: 90,
        army: 90
    })
    const [selectedWay, setSelectedWay] = useState<Way_IN>()

    const onSelectEnteringWay = (way: Way_IN) => {
        setSelectedWay(way)
        if (way === Way_IN.ALLIE) {
            setPowers({
                money: 90,
                people: 88,
                army: 91
            })
        } else if (way === Way_IN.ATTACK) {
            setPowers({
                money: 85,
                people: 92,
                army: 90
            })
        } else {
            setPowers({
                money: 88,
                people: 88,
                army: 92
            })
        }
    }
    return {
        selectedWay,
        powers,
        onSelectEnteringWay
    }
}
