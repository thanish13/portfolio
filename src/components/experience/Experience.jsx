import { useEffect, useState, useRef} from "react";
import { cubicBezier, motion, useTransform, useScroll } from "framer-motion";
// import Title from "./Title";
// import Contact from "./Contact";
import { cn } from "../../../lib/utils";
// import TechStack from "./TechStack";
import { Helmet } from "react-helmet";
import Component from "./Component";

// Animation variants
const container = {
	visible: ([delayChildren, delay]) => ({
		opacity: 1,
		transition: {
			delayChildren,
			staggerChildren: 0.14,
			opacity: { delay, duration: 0.9, ease: "easeInOut" },
		},
	}),
	hidden: { opacity: 0 },
	exit: {
		opacity: 0,
		scale: 0.9,
		transition: { staggerChildren: 0.05, duration: 0.6, ease: "easeInOut" },
	},
};

const text = {
	visible: {
		y: 0,
		rotate: 0.01, // To make the animation render smoother
		opacity: 1,
		transition: { duration: 2.4, ease: cubicBezier(0.09, 0.64, 0.26, 1) },
	},
	hidden: { y: 60, opacity: 0 },
	exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const textContact = {
	...text,
	visible: {
		...text.visible,
		transition: {
			duration: 3.2,
			ease: cubicBezier(0.12, 0.42, 0.26, 1),
			delay: 2.2,
			opacity: { duration: 2.2, ease: "easeInOut", delay: 2.2 },
		},
	},
};


const Experience = ({ delayAnimation, performanceMode }) => {
	const [showTitle, setShowTitle] = useState(false);

	// Show title after a delay if user loads here initially
	useEffect(() => {
		if (!delayAnimation) return setShowTitle(true);
		const timeout = setTimeout(() => setShowTitle(true), 500);
		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		<section className="relative w-full h-full pb-1 pt-0 xl:pb-0 z-0 overflow-hidden">
		<Helmet>
				<title>Thanish - Experience</title>
				<meta name="robots" content="noindex" />
			</Helmet>
	
			{/* Container */}
			<div className="max-h-screen">
				{/* About card */}
				<motion.div
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={container}
					custom={delayAnimation ? [0.4, 0.3] : [0, 0]}
					>
					{/* <div className="flex flex-col h-full w-full gap-1 text-justify items-center justify-between text-xs tablet:text-sm tablet:leading-relaxed text-[#d6d6d6]"> */}
					<Component/>
				</motion.div>
				{/* This allows mobile view to smoothly transition to correct size */}
				<div
					className={cn(
						"duration-[3s] ease-in-out",
						showTitle ? "h-0" : "h-[40dvh] tablet:h-0",
						delayAnimation && "h-0"
					)}
				/>
			</div>
		</section>
		</>
	);
};

export default Experience;
