/* eslint-disable @typescript-eslint/no-explicit-any */
import UserPowers from "../shared/userPowers";
import { ModalWrapper } from "./enterValoria/components/modalWrapper";

export default function TheEnd({ progress }:{progress:any}) {
    return (
        <ModalWrapper classes="min-w-[500px] lg:!min-w-[800px] xl:!min-w-[1000px]">
            <p className="font-trajan text-center text-[30px] font-bold text-white"> THE END</p>
            <p className="w-full text-center text-2xl text-white">FinalScore</p>
            <UserPowers isTheEnd powers={progress.manPower} />
        </ModalWrapper>
    )
}