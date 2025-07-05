import buttonIcon from '../../../assets/icons/buttonIcon.svg'

export default function ImageButton({ text, icon }: {
	text: string;
	icon: string;
}) {
    return (
			<button className='flex flex-col  items-center gap-2 bg-transparent cursor-pointer group'>
				<img
					src={icon}
					width={136}
					height={136}
				/>
				<div
					className=' flex
					flex-row gap-2 items-center'>
					<img
						src={buttonIcon}
						width={16}
						height={16}
					/>
					<p className='text-white text-[28px] m-0 font-trajan font-normal max-w-[200px] group-hover:text-[#DBBD51]'>
						{text}
					</p>
					<img
						src={buttonIcon}
						width={16}
						height={16}
					/>
				</div>
			</button>
		);
}