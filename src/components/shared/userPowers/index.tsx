import kill from "../../../assets/icons/kill.svg"
import crown from "../../../assets/icons/crown.svg"
import money from "../../../assets/icons/money.svg"
import type { ManPower } from "../../../types/manPower"

export default function UserPowers({ powers }: { powers :ManPower}) {
    return (
        <div className="flex flex-row items-center gap-6">
            <Power img={crown} text={`${powers.people}%`} />
            <Power img={kill} text={`${powers?.army}%`} />
            <Power img={money} text={`${powers.money}%`} />
        </div>
    )
}
const Power = ({ img, text }: { img: string; text: string }) => {
    return (
        <div className="flex items-center gap-1">
            <img src={img} width={"50px"} height={"50px"} />
            <p className="font-trajan text-3xl text-white">{text}</p>
        </div>
    )
}
