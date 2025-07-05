import { useEffect, useState } from "react";
import BorderButton from "../../shared/borderButton";
import UserPowers from "../../shared/userPowers";
import Modal from "../../shared/modal";
import ImageButton from "../../shared/imageButton";
import allie from "../../../assets/icons/allie.svg";
import spy from "../../../assets/icons/spy.svg";
import attack from "../../../assets/icons/attack.svg";

export default function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])
    return (
			<div className='p-10 flex flex-col justify-between h-screen w-screen relative'>
				{!loading ? (
					<div className='w-full flex justify-end'>
						<UserPowers />
					</div>
				) : null}
				{!loading ? (
					<div className='flex  w-full justify-center'>
						<BorderButton />
					</div>
				) : null}
				<Modal>
					<div className='max-w-[900px] flex flex-col gap-8 items-center'>
						<p className='font-trajan text-center w-full text-[30px] font-bold'>
							to start the war
							you need to get
							the map of
							valoria choose
							the best way to
							get it
						</p>
						<div className='flex gap-8 items-start'>
							<ImageButton
								icon={spy}
								text='SEND SPY'
							/>
							<ImageButton
								icon={allie}
								text='favour from allie'
							/>
							<ImageButton
								icon={attack}
								text='Attack Now'
							/>
						</div>
					</div>
				</Modal>
			</div>
		);
}