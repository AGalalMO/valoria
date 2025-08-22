import { useTranslation } from "react-i18next"
import note from "../../../../../assets/note.png"
import { ModalWrapper } from "../../../enterValoria/components/modalWrapper"

export default function NotesSection() {
    const {t}=useTranslation()
       const notes = [
           {
               title: t("note1"),
               value: t("note1_desc")
           },
           {
               title: t("note2"),
               value: t('note2_desc')
           },
           {
               title: t('note3'),
               value: ``
           }
       ]
       const notes2 = [
           {
               title: t("note4"),
               value: t("note4_desc")
           },
           {
               title: t("note5"),
               value: ``
           },
           {
               title: t("note6"),
               value: ''
           }
       ]
    return (
        <ModalWrapper
            parentClass="!w-[34%] !h-[100%] !justify-start "
            classes=" !p-0 !gap-0  !overflow-y-auto max-h-[96%] !W-full  !min-w-full "
        >
            <div className="row mt-7 flex items-center">
                <img
                    src={note}
                    height={120}
                    width={120}
                    className="mb-2 h-[40px] w-[40px] xl:mb-0 xl:!h-[100px] xl:!w-[100px]"
                />
                <p className="font-trajan text-xl !leading-none font-bold text-[#DBBD51] xl:text-[30px]">
                    {t("notes")}
                </p>
            </div>
            <div className="!mb-4 flex flex-col gap-4 px-6 pb-12 xl:pb-0">
                {notes?.map(item => (
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-xs font-bold text-white uppercase xl:!text-base">
                            {item?.title}
                        </p>
                        <p className="font-trajan text-[10px] !leading-none font-bold text-[#DBBD51] uppercase xl:!text-lg">
                            {item?.value}
                        </p>
                    </div>
                ))}

                <p className="font-trajan w-full text-xs font-bold text-[#DBBD51] uppercase xl:text-lg">
                    {t("if_there_obstacles")}
                </p>

                {notes2?.map(item => (
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-xs font-bold text-white uppercase xl:text-base">
                            {item?.title?.includes("<br") ? (
                                <>
                                    {item?.title?.split("<br/>")?.[0]}
                                    {item?.title?.split("<br/>")?.[1]}
                                </>
                            ) : (
                                item?.title
                            )}
                        </p>
                        <p className="font-trajan text-sm !leading-none font-bold text-[#DBBD51] uppercase xl:text-lg">
                            {item?.value}
                        </p>
                    </div>
                ))}
            </div>
        </ModalWrapper>
    )
}
