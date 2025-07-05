import React, {
	useEffect,
	useState,
} from "react";
import homeBg from "../../../assets/backgrounds/home.svg";
import loading1 from "../../../assets/loading/1.svg";
import loading2 from "../../../assets/loading/2.svg";
import loading3 from "../../../assets/loading/3.svg";
import loading4 from "../../../assets/loading/4.svg";
import loading5 from "../../../assets/loading/5.svg";
import loading6 from "../../../assets/loading/6.svg";
import loading7 from "../../../assets/loading/7.svg";

function LoadingScreen({
	setBgImage,
}: {
	setBgImage: React.Dispatch<
		React.SetStateAction<string>
	>;
}) {
	const [index, setIndex] =
		useState(0);
	const [fade, setFade] =
		useState(true);

	const loadingImages = [
		loading1,
		loading2,
		loading3,
		loading4,
		loading5,
		loading6,
		loading7,
	];

	useEffect(() => {
		if (index === 6) return; // Stop if last image
		const interval =
			setInterval(() => {
				setFade(false);
				setTimeout(() => {
					setIndex((prev) => {
						if (prev < 6) {
							return prev + 1;
						}
						return prev;
					});
					setFade(true);
				}, 200); // fade out duration
			}, 500);
		return () =>
			clearInterval(interval);
	}, [index]);

	useEffect(() => {
		if (index === 6) {
			const timeout =
				setTimeout(() => {
					setBgImage(homeBg);
				}, 300);
			return () =>
				clearTimeout(timeout);
		}
	}, [index]);
	return (
		<>
			<img
				src={
					loadingImages[index]
				}
				className={`w-1/2 mb-[100px] transition-opacity duration-500 ${
					fade
						? "opacity-100"
						: "opacity-50"
				}`}
				alt='loading'
			/>
		</>
	);
}

export default LoadingScreen;
