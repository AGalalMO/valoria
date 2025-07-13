import note from "../../../../../assets/note.png"
import { ModalWrapper } from "../../../enterValoria/components/modalWrapper"

export default function NotesSection() {
       const notes = [
           {
               title: ` -the distance between you and the enemy cannon is :`,
               value: `1500 meters`
           },
           {
               title: `-the wind direction from right to left is :`,
               value: `15 m/sec`
           },
           {
               title: ` -the air resistance reduce hit power by:`,
               value: `20%`
           }
       ]
       const notes2 = [
           {
               title: `-the vertical angel <br/>
                            should be :`,
               value: `angel 38`
           },
           {
               title: ` -the hit power should be :`,
               value: `350 m/sec`
           },
           {
               title: ` the horizontal angle should be:`,
               value: ` 0 , direct to the point`
           }
       ]
    return (
        <ModalWrapper
            parentClass="!w-[34%] !h-[100%] !justify-start "
            classes=" !p-0 !gap-0 !overflow-y-auto max-h-[96%] !W-full  !min-w-full "
        >
            <div className="row mt-7 flex items-center">
                <img src={note} height={140} width={140} className="w-[40px] lg:!w-[100px] h-[40px] lg:!h-[100px] mb-2 lg:mb-0" />
                <p className="font-trajan text-xl lg:text-[40px] !leading-none font-bold text-[#DBBD51]">
                    NOTES
                </p>
            </div>
            <div className="!mb-4 flex flex-col gap-4 px-6">
                {notes?.map(item => (
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-xs lg:!text-[18px] font-bold text-white uppercase">
                            {item?.title}
                        </p>
                        <p className="font-trajan text-[10px] lg:!text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            {item?.value}
                        </p>
                    </div>
                ))}

                <p className="font-trajan w-full text-xs lg:text-[22px] font-bold text-white uppercase">
                    *if their is no obstacles
                </p>
                <p className="font-trajan w-full text-start text-xs lg:text-[24px] font-bold text-[#DBBD51] uppercase">
                    the ideal hit requirements
                    <br />
                    will be:
                </p>
                {notes2?.map(item => (
                    <div className="flex flex-col gap-1">
                        <p className="font-trajan text-xs lg:text-[18px] font-bold text-white uppercase">
                            {item?.title?.includes("<br") ? (
                                <>
                                    {item?.title?.split("<br/>")?.[0]}
                                    {item?.title?.split("<br/>")?.[1]}
                                </>
                            ) : (
                                item?.title
                            )}
                        </p>
                        <p className="font-trajan text-sm lg:text-[20px] !leading-none font-bold text-[#DBBD51] uppercase">
                            {item?.value}
                        </p>
                    </div>
                ))}
            </div>
        </ModalWrapper>
    )
}
