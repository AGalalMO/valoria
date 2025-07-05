import kill from "../../../assets/icons/kill.svg";
import crown from "../../../assets/icons/crown.svg";
import money from "../../../assets/icons/money.svg";

export default function UserPowers() {
	return (
		<div className='flex flex-row gap-6 items-end'>
			<Power
				img={crown}
				text={`${90}%`}
			/>
			<Power
				img={kill}
				text={`${90}%`}
			/>
			<Power
				img={money}
				text={`${90}%`}
			/>
		</div>
	);
}
const Power = ({img,text}:{img:string,text:string}) => {
	return (
		<div className='flex items-center gap-1'>
			<img
				src={img}
				width={'50px'}
				height={'50px'}
			/>
			<p className='font-trajan text-3xl text-white' >
				{text}
			</p>
		</div>
	);
};
