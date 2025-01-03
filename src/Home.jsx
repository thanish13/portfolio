import Logo from "./components/Logo";
import { useEffect, useRef, useState } from "react";
import Background from "./components/background/Background";
import useSessionStorage from "./hooks/useSessionStorage";

const defaultImagesToPreload = ["/assets/image.png", "/assets/react.svg"];

const preloadImage = (url) => {
	const img = new Image();
	img.src = url;
};

const preloadImages = () => {
	defaultImagesToPreload.forEach((url) => preloadImage(url));
};

function Home() {
	const [introAnimationOver, setIntroAnimationOver] = useState(false);
	const { getSessionItem } = useSessionStorage();
	const [performanceMode, setPerformanceMode] = useState(
		getSessionItem("storage", "performanceMode") || false
	);
	const ref = useRef(null);
	useEffect(() => preloadImages(), []);

	return (
		<main
			ref={ref}
			className="relative h-screen tablet:min-h-screen tablet:h-auto w-full overflow-x-hidden pt-10 pb-5 px-2 tablet:p-6 flex flex-col items-center xl:flex-row xl:justify-center gap-24 font-poppins">
			<Background performanceMode={performanceMode} />
			{/* Main container */}
			<section className="h-full flex justify-center">
				<Logo
					setIntroAnimationOver={setIntroAnimationOver}
					performanceMode={performanceMode}
					setPerformanceMode={setPerformanceMode}
				/>
			</section>
		</main>
	);
}

export default Home;
