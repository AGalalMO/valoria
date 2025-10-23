import { ModalWrapper } from "./modalWrapper"
import { leaders } from "../leaderData"
import BorderButton from "../../../shared/borderButton"
import type { LeaderType } from "../../../../types/leaders"
import { useEffect, useState } from "react"
import LeaderPowers from "../../controlValoria/LeaderPowers"
import { useTranslation } from "react-i18next"
import { ButtonDescription } from "../../../buttonDescription"

export const ChooseFiveLeaders = ({
    selectedLeaders,
    setSelectedLeaders,
    openValoriaHandler,
    wrongChoices,
    doneLeaders
}: {
    selectedLeaders: LeaderType[]
    setSelectedLeaders: React.Dispatch<React.SetStateAction<LeaderType[]>>
    openValoriaHandler: () => void
    wrongChoices: LeaderType[]
    doneLeaders:string[]
}) => {
    const [powerModal, setPowerModal] = useState<LeaderType | null>(null)
    const { t } = useTranslation()
    useEffect(() => {
        if (wrongChoices?.length) {
            const result = selectedLeaders.filter(item => !wrongChoices.includes(item))
            setSelectedLeaders(result)
        }
    }, [wrongChoices])
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            <p className="font-trajan text-white w-full text-center text-2xl font-bold xl:text-[30px]">
                {t("choose_leaders")}
            </p>

            <div className="mb-5 flex flex-col w-full content-center justify-items-center gap-x-2 gap-y-4 xl:!grid-cols-5 xl:gap-x-4">
                {leaders?.map(item => {
                    const isSelected = selectedLeaders?.findIndex(
                        leader => leader?.name == item?.name
                    )
                    return (
                        <ButtonDescription
                            isWrong={wrongChoices?.findIndex(lead => lead?.name == item?.name) >= 0}
                            description={t(item?.desc)}
                            icon={item?.icon}
                            removeDesc={false}
                            isSelected={isSelected >= 0 ? true : false}
                            isDone={doneLeaders?.includes(item?.name)}
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
                            text={t(item?.name)}
                        />
                    )
                })}
            </div>
            <BorderButton size="md" onClick={openValoriaHandler} text={t("open_valoria")} />
            {powerModal ? (
                <LeaderPowers
                    closeModal={() => {
                        setPowerModal(null)
                    }}
                    isSelected={selectedLeaders?.findIndex(
                        leader => leader?.name == powerModal?.name
                    )}
                    onClickButton={() => {
                        const isSelected = selectedLeaders?.findIndex(
                            leader => leader?.name == powerModal?.name
                        )
                        if (isSelected >= 0) {
                            const newLeaders = selectedLeaders
                            newLeaders?.splice(isSelected, 1)
                            setSelectedLeaders([...newLeaders])
                        } else if (selectedLeaders?.length == 5) {
                            const slice = selectedLeaders?.slice(0, 4)
                            setSelectedLeaders([...slice, powerModal])
                        } else {
                            setSelectedLeaders(prev => [...prev, powerModal])
                        }
                        setPowerModal(null)
                    }}
                    leader={powerModal}
                />
            ) : null}
        </ModalWrapper>
    )
}