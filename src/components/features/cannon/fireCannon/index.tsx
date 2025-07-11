import { useState } from "react"
import { ModalWrapper } from "../../enterValoria/components/modalWrapper"
import BorderButton from "../../../shared/borderButton"
import angel from "../../../assets/angel.png"
import power from "../../../assets/power.png"
import note from "../../../assets/note.png"
export default function FireCannon() {
 const [cannonDirection, setCannonDirection] = useState<CannonDirectType>({
     xAngle: null,
     yAngle: null,
     power: null
 })
     const hitByCannon = () => {
         if (
             cannonDirection.power == null ||
             cannonDirection.xAngle == null ||
             cannonDirection.yAngle == null
         ) {
             console.log("ERROR")
         } else {
             console.log("POWERS", cannonDirection)
         }
     }
    
    return (
        <div className="ms-[5%] me-[5%] flex h-[100%] w-[90%] items-start justify-center gap-4">
            <ModalWrapper
                parentClass="!w-[65%] !h-[100%] !justify-start "
                classes=" !p-0 !gap-0 !overflow-y-auto h-[96%] !W-full  !min-w-full "
            >
                <div className="flex !w-full flex-col gap-4">
                    <div className="flex !w-full flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <img src={angel} height={135} width={135} />
                            <p className="font-trajan text-text text-[30px] !leading-none font-bold">
                                choose the <br />
                                vertical angle
                            </p>
                        </div>
                        <div className="flex items-center justify-around">
                            <BorderButton
                                size="xs"
                                text="35"
                                bottomBorder={false}
                                isSelected={cannonDirection?.yAngle == 35}
                                onClick={() => {
                                    if (cannonDirection?.yAngle == 35)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            yAngle: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            yAngle: 35
                                        }))
                                }}
                            />
                            <BorderButton
                                size="xs"
                                text="40"
                                bottomBorder={false}
                                isSelected={cannonDirection?.yAngle == 40}
                                onClick={() => {
                                    if (cannonDirection?.yAngle == 40)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            yAngle: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            yAngle: 40
                                        }))
                                }}
                            />
                            <BorderButton
                                size="xs"
                                text="43"
                                bottomBorder={false}
                                isSelected={cannonDirection?.yAngle == 43}
                                onClick={() => {
                                    if (cannonDirection?.yAngle == 43)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            yAngle: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            yAngle: 43
                                        }))
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex !w-full flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <img src={power} height={135} width={135} />
                            <p className="font-trajan text-text text-[30px] !leading-none font-bold">
                                choose the <br />
                                hit power
                            </p>
                        </div>
                        <div className="flex items-center justify-around">
                            <BorderButton
                                size="xs"
                                text="300"
                                bottomBorder={false}
                                isSelected={cannonDirection?.power == 300}
                                onClick={() => {
                                    if (cannonDirection?.power == 300)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            power: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            power: 300
                                        }))
                                }}
                            />
                            <BorderButton
                                size="xs"
                                text="410"
                                bottomBorder={false}
                                isSelected={cannonDirection?.power == 410}
                                onClick={() => {
                                    if (cannonDirection?.power == 410)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            power: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            power: 410
                                        }))
                                }}
                            />
                            <BorderButton
                                size="xs"
                                text="450"
                                bottomBorder={false}
                                isSelected={cannonDirection?.power == 450}
                                onClick={() => {
                                    if (cannonDirection?.power == 450)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            power: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            power: 450
                                        }))
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex !w-full flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <img src={angel} height={135} width={135} />
                            <p className="font-trajan text-text text-[30px] !leading-none font-bold">
                                choose the <br /> horizontal angel
                            </p>
                        </div>
                        <div className="flex items-center justify-around">
                            <BorderButton
                                size="xs"
                                text="2.25 to the left"
                                bottomBorder={false}
                                isSelected={cannonDirection?.xAngle == 2.25}
                                onClick={() => {
                                    if (cannonDirection?.xAngle == 2.25)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            xAngle: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            xAngle: 2.25
                                        }))
                                }}
                            />

                            <BorderButton
                                size="xs"
                                text="0 direct to the point"
                                bottomBorder={false}
                                isSelected={cannonDirection?.xAngle == 0}
                                onClick={() => {
                                    if (cannonDirection?.xAngle == 0)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            xAngle: 0
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            xAngle: 0
                                        }))
                                }}
                            />
                            <BorderButton
                                text={`2.25 to the right`}
                                size="xs"
                                bottomBorder={false}
                                isSelected={cannonDirection?.xAngle == -2.25}
                                onClick={() => {
                                    if (cannonDirection?.xAngle == -2.25)
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            xAngle: -2.25
                                        }))
                                    else
                                        setCannonDirection(prev => ({
                                            ...prev,
                                            xAngle: -2.25
                                        }))
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex w-full items-center justify-center pt-4">
                        <BorderButton onClick={hitByCannon} text="hit the enemy" />
                    </div>
                </div>
            </ModalWrapper>
            <ModalWrapper
                parentClass="!w-[34%] !h-[100%] !justify-start "
                classes=" !p-0 !gap-0 !overflow-y-auto max-h-[96%] !W-full  !min-w-full "
            >
                <div className="row mt-7 flex items-center">
                    <img src={note} height={140} width={140} />
                    <p className="font-trajan text-[40px] !leading-none font-bold text-[#DBBD51]">
                        NOTES
                    </p>
                </div>
                <div className="!mb-4 flex flex-col gap-4 px-6">
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-[18px] font-bold text-white uppercase">
                            -the distance between you and the enemy cannon is :
                        </p>
                        <p className="font-trajan text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            1500 meters
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-[18px] font-bold text-white uppercase">
                            -the wind direction from right to left is :
                        </p>
                        <p className="font-trajan text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            15 m/sec
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-[18px] font-bold text-white uppercase">
                            -the air resistance reduce hit power by:
                        </p>
                        <p className="font-trajan text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            20%
                        </p>
                    </div>
                    <p className="font-trajan w-full text-[22px] font-bold text-white uppercase">
                        *if their is no obstacles
                    </p>
                    <p className="font-trajan w-full text-start text-[24px] font-bold text-[#DBBD51] uppercase">
                        the ideal hit requirements
                        <br />
                        will be:
                    </p>
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-[18px] font-bold text-white uppercase">
                            -the vertical angel <br />
                            should be :
                        </p>
                        <p className="font-trajan text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            angle 38
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-[18px] font-bold text-white uppercase">
                            -the hit power should be :
                        </p>
                        <p className="font-trajan text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            350 m/sec
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-[18px] font-bold text-white uppercase">
                            the horizontal angle should be:
                        </p>
                        <p className="font-trajan text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            0 , direct to the point
                        </p>
                    </div>
                </div>
            </ModalWrapper>
        </div>
    )
}
type CannonDirectType={
      xAngle: null | number
     yAngle: null | number
     power: null | number
}