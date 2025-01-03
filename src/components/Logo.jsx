import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import useSessionStorage from "../hooks/useSessionStorage";
import useCheckMobile from "../hooks/useCheckMobile";
import { cn } from "../../lib/utils";

// Animation variants
const variants = {
	visible: ([yDur, opacityDur]) => ({
		y: 0,
		opacity: 1,
		transition: {
			y: { duration: yDur, type: "tween", ease: [0.45, 0.45, 0.15, 1] },
			opacity: { duration: opacityDur, type: "tween", ease: [0.61, 0, 0.59, 0.93], delay: 0.2 },
		},
	}),
	hidden: { y: 300, opacity: 0 },
};

const Logo = ({ setIntroAnimationOver, performanceMode, setPerformanceMode }) => {
	const { getSessionItem, setSessionItem } = useSessionStorage();
	const [firstLayoutAnimationComplete, setFirstLayoutAnimationComplete] = useState(false);
	const location = useLocation();
	const animationState = useRef(firstLayoutAnimationComplete);
	const isMobile = useCheckMobile();

	// Use faster animation for intro if user has visited the site before during the session
	const shouldAnimateFast = () => {
		if (location.pathname !== "/") return true;
		if (getSessionItem("storage", "hasVisited")) return true;
		return false;
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const fastAnimation = useMemo(() => shouldAnimateFast(), []);

	// Update the ref so setTimeout can access the latest state
	useEffect(() => {
		animationState.current = firstLayoutAnimationComplete;
	}, [firstLayoutAnimationComplete]);

	const handleInitialAnimationComplete = () => {
		setIntroAnimationOver(true);

		// Fail-safe if layoutAnimationComplete doesn't fire
		setTimeout(() => {
			handleLayoutAnimationComplete();
		}, 3000);
	};

	const handleLayoutAnimationComplete = () => {
		if (!animationState.current) {
			setFirstLayoutAnimationComplete(true);
			setSessionItem("storage", "hasVisited", true);
		}
	};

	const handlePerformanceButtonClick = () => {
		setSessionItem("storage", "performanceMode", !performanceMode);
		setPerformanceMode((prev) => !prev);
	};

	return (
		// Full height container that moves to the left after logo reveal
		<motion.div
			layout
			id="logoContainer"
			transition={{
				layout: {
					duration: fastAnimation ? 1.2 : 1.8,
					type: "tween",
					ease: [0.62, 0, 0.25, 1],
				},
			}}
			onLayoutAnimationComplete={handleLayoutAnimationComplete}
			className={cn(
				"relative w-[380px] h-full flex flex-col items-center justify-center drop-shadow-2xl z-10",
				performanceMode && "drop-shadow-none"
			)}>
			{/* Container for logo and socials */}
			<motion.div className="w-full h-[500px] flex flex-col items-center justify-center gap-8">
				{/* Container for logo, to move it upwards at start and after first layout animation */}
				<motion.div
					layout
					initial="hidden"
					animate="visible"
					variants={variants}
					custom={fastAnimation ? [0, 1] : [3.4, 2.5]}
					onAnimationComplete={handleInitialAnimationComplete}
					transition={{
						layout: {
							type: "tween",
							duration: fastAnimation ? 1.5 : 1.9,
							ease: [0.48, 0.13, 0.15, 1],
						},
					}} //1.4 | 0.45, 0.16, 0.28, 1 /  2.1 | 0.38, 0.2, 0.06, 1 / 1.9 | 0.48, 0.13, 0.15, 1
					className="relative group px-10 w-full z-20">
					{/* Hoverable logo */}
					<Tilt
						className="bg-[url('/assets/LogoBG.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center aspect-square rounded-[2rem] transform-style-3d"
						perspective={800}
						glareEnable={true}
						glareMaxOpacity={isMobile ? 0.1 : 0.2}
						glareColor="#FFC166"
						glarePosition="bottom"
						glareBorderRadius="2rem"
						transitionSpeed={2200}
						tiltReverse={isMobile}
						tiltMaxAngleX={isMobile ? 0 : 20}
						gyroscope={!performanceMode}>
						{/* Inner logo letter */}
						<img
							className="w-1/4 transform-style-3d translate-z-4 drop-shadow-2xl group-hover:scale-125 duration-500 ease-out select-none"
							src="assets/react.svg"
							alt="W letter logo"
							draggable="false"
						/>
					</Tilt>
				</motion.div>
			
			</motion.div>
		</motion.div>
	);
};

export default Logo;
