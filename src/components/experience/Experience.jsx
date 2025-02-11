import { useEffect, useState, useRef} from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";
import { Helmet } from "react-helmet";
import Component from "./Component";

// Animation variants


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
		<section className="relative w-full h-full tablet:h-[40rem] pb-1 xl:pb-0 z-0 overflow-hidden">
		<Helmet>
				<title>Thanish - Experience</title>
				<meta name="robots" content="noindex" />
			</Helmet>
	
			{/* Container */}
			<div className="max-h-screen">
				{/* About card */}
				<motion.div
					className={cn(
						"h-[40rem] w-full bg-gradient-to-br from-[#19191942] to-[#2a2a2a3b] backdrop-blur rounded-2xl py-10 tablet:py-12 px-10 tablet:px-4 overflow-hidden scrollbar-thin scrollbar-track scrollbar-track-rounded-full scrollbar-thumb-accent scrollbar-thumb-rounded-full",
						performanceMode && "backdrop-blur-none bg-gradient-to-br from-[#131313] to-[#171717] "
					)}
					style = {{ overflowY :"scroll",position:"relative"}}>
					
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
