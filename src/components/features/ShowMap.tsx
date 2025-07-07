import Modal from "../shared/modal"
import mapVAL from "../../assets/valoria.png"
import { useEffect } from "react"

export const ShowValMap = () => {
    useEffect(() => {
        setTimeout(() => {
            console.log('end')
        }, 15000)
    },[])
    return (
        <Modal noBackground>
            <img src={mapVAL} width={800} height={600} />
        </Modal>
    )
}