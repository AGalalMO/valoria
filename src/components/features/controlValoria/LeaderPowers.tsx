import type { LeaderType } from "../../../types/leaders";
import bg from "../../../assets/backgrounds/modal.png"
import check from "../../../assets/check.png"
import wrong from "../../../assets/x.png"
import closeModalIcon from "../../../assets/closeModal.png"

export default function LeaderPowers({ leader, closeModal }: { leader: LeaderType; closeModal :VoidFunction}) {
    return (
        <div
            className="absolute start-5 top-5 z-50 h-[90%] w-[90%] border-5 border-[#DC8E2F] p-4 py-10"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center"
            }}
        >
            <div className="relative -me-6 -mt-12 flex justify-end">
                <img
                    src={closeModalIcon}
                    height={50}
                    width={50}
                    className="cursor-pointer"
                    onClick={closeModal}
                />
            </div>
            <div className="flex items-center gap-4">
                <img
                    src={leader?.icon}
                    width={300}
                    height={300}
                    className="!h-[180] !w-[190px] lg:!h-[300px] lg:!w-[340px]"
                />
                <div className="flex flex-col gap-2">
                    {leader?.pros?.map(adv => (
                        <div className="flex items-center gap-1">
                            <img src={check} className="h-6 w-6 lg:h-10 lg:w-10" />
                            <p className="text-sm text-white lg:text-lg">{adv}</p>
                        </div>
                    ))}
                    {leader?.cons?.map(adv => (
                        <div className="flex items-center gap-1">
                            <img src={wrong} className="h-6 w-6 lg:h-10 lg:w-10" />
                            <p className="text-sm text-white lg:text-lg">{adv}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}