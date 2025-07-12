import { ModalWrapper } from "./modalWrapper"
import { leaders } from "../leaderData"
import BorderButton from "../../../shared/borderButton"
import type { LeaderType } from "../../../../types/leaders"
import { useState } from "react"
import LeaderPowers from "../../controlValoria/LeaderPowers"
import ImageButtonDoubleAuctions from "../../../shared/imageButton/doubleActions"

export const ChooseFiveLeaders = ({
    selectedLeaders,
    setSelectedLeaders,
    openValoriaHandler
}: {
    selectedLeaders: LeaderType[]
    setSelectedLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
    openValoriaHandler: () => void
    }) => {
        const [powerModal, setPowerModal] = useState<LeaderType | null>(null)

    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold lg:text-[30px]">
                choose five leaders from your army
                <br />
                to help you enter valoria
            </p>

            <div className="mb-5 grid grid-cols-4 content-center justify-items-center gap-y-8 lg:!grid-cols-5">
                {leaders?.map(item => {
                    const isSelected = selectedLeaders?.findIndex(
                        leader => leader?.name == item?.name
                    )
                    return (
                        <ImageButtonDoubleAuctions
                            icon={item?.icon}
                            selected={isSelected >= 0 ? true : false}
                            onClickImage={() => {
                                setPowerModal(item)
                            }}
                            onClickButton={() => {
                                if (isSelected >= 0) {
                                    const newLeaders = selectedLeaders
                                    newLeaders?.splice(isSelected, 1)
                                    setSelectedLeaders([...newLeaders])
                                } else if (selectedLeaders?.length == 5) {
                                    const slice = selectedLeaders?.slice(0, 4)
                                    setSelectedLeaders([...slice, item])
                                } else {
                                    setSelectedLeaders(prev => [...prev, item])
                                }
                            }}
                            text={item?.name}
                        />
                    )
                })}
            </div>
            <BorderButton size="md" onClick={openValoriaHandler} text={"OPEN VALORIA"} />
            {powerModal ? (
                <LeaderPowers
                    closeModal={() => {
                        setPowerModal(null)
                    }}
                    leader={powerModal}
                />
            ) : null}
        </ModalWrapper>
    )
}