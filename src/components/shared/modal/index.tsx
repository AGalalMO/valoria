import type React from "react";
import bg from "../../../assets/backgrounds/modal.png";
export default function Modal({
	children,
}: {
	children:React.ReactNode
}) {
	return (
		<div className='w-screen h-screen flex flex-col justify-center  items-center  absolute left-0 top-0'>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundPosition:
						"center",
					backgroundSize:
						"cover",
				}}
				className={`max-w-[1400px]     p-8  border-5 border-[#DC8E2F]`}>
				{children}
			</div>
		</div>
	);
}