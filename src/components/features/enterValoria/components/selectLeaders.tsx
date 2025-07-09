import { ModalWrapper } from "./modalWrapper"
import { leaders } from "../leaderData"
import BorderButton from "../../../shared/borderButton"
import type { LeaderType } from "../../../../types/leaders"
import ImageButton from "../../../shared/imageButton"

export const ChooseFiveLeaders = ({
    selectedLeaders,
    setSelectedLeaders,
    openValoriaHandler
}: {
    selectedLeaders: LeaderType[]
    setSelectedLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
    openValoriaHandler: () => void
}) => {
    return (
        <ModalWrapper>
            <p className="font-trajan w-full text-center text-[30px] font-bold">
                choose five leaders from your army
                <br />
                to help you enter valoria
            </p>

            <div className="mb-5 grid grid-cols-5 justify-items-center gap-y-8">
                {leaders?.map(item => {
                    const isSelected = selectedLeaders?.findIndex(
                        leader => leader?.name == item?.name
                    )
                    return (
                        <ImageButton
                            icon={item?.icon}
                            selected={isSelected >= 0 ? true : false}
                            onClick={() => {
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
        </ModalWrapper>
    )
}