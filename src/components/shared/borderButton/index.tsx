import buttonIcon from '../../../assets/icons/buttonIcon.svg'
import buttonBorder from '../../../assets/icons/buttonBorder.svg'

export default function BorderButton() {
    return (
			<button className='flex flex-col  items-center gap-2 bg-transparent cursor-pointer'>
				<div
					className=' flex
					flex-row gap-1 items-center'>
					<img
						src={buttonIcon}
						width={16}
						height={16}
					/>
					<p
						className='text-white text-[48px] m-0 font-trajan font-normal'
					>
						START GAME
					</p>
					<img
						src={buttonIcon}
						width={16}
						height={16}
					/>
				</div>
				<img
					width={"100%"}
					src={buttonBorder}
				/>
			</button>
		);
}