import { ModalWrapper } from "./modalWrapper"
import { leaders } from "../leaderData"
import BorderButton from "../../../shared/borderButton"
import type { LeaderType } from "../../../../types/leaders"
import { useState } from "react"
import LeaderPowers from "../../controlValoria/LeaderPowers"
import ImageButtonDoubleAuctions from "../../../shared/imageButton/doubleActions"
import { useTranslation } from "react-i18next"

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
        const {t}=useTranslation()
    return (
        <ModalWrapper
            parentClass="!w-full !justify-center"
            classes="!justify-between !w-[90%] !h-[90] !relative"
        >
            <p className="font-trajan w-full text-center text-2xl font-bold xl:text-[30px]">
                {t("choose_leaders")}
            </p>

            <div className="mb-5 grid grid-cols-4 content-center gap-x-2 xl:gap-x-4 justify-items-center gap-y-8 xl:!grid-cols-5">
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
                            text={t(item?.name)}
                        />
                    )
                })}
            </div>
            <BorderButton size="md" onClick={openValoriaHandler} text={t('open_valoria')} />
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