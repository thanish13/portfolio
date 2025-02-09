import { useLocation, useParams } from "react-router-dom";
import Navigation from "./Navigation";
import Projects from "./projects/Projects";
import { AnimatePresence } from "framer-motion";
import About from "./about/About";
import { useEffect, useState } from "react";
import useScrollDirection from "../hooks/useScrollDirection";
import Experience from "./experience/Experience";

const ContainerRight = ({ mainRef, performanceMode }) => {
	const [delayAnimation, setDelayAnimation] = useState(true);
	const [hasScrolled, setHasScrolled] = useState(false);
	const { scrollDir, scrollPos } = useScrollDirection(mainRef?.current);
	const location = useLocation();
	const { projectName } = useParams();

	// Scroll to bottom when the user scrolls down after a certain point
	if (scrollDir === "down" && scrollPos > 250 && !hasScrolled) {
		setHasScrolled(true);
		mainRef?.current?.scrollTo({ top: mainRef?.current?.scrollHeight, behavior: "smooth" });
	} else if (scrollDir === "up" && hasScrolled) setHasScrolled(false);

	// Delay animation on initial render to give time for the logo to move away
	useEffect(() => {
		if (delayAnimation) setDelayAnimation(false);
	}, [delayAnimation]);

	return (
		<div className="h-full w-full tablet:w-[800px] flex flex-col items-center justify-start tablet:justify-center gap-4">
			<Navigation location={location} projectName={encodeURIComponent(projectName)} />
				<AnimatePresence mode="wait">
				{location.pathname === "/about" &&
						(
						<About 
							key="About" 
							delayAnimation={delayAnimation} 
							performanceMode={performanceMode} 
						/>)
				}
				{location.pathname === "/" &&
						(<Projects
							key="Projects"
							projectName={encodeURIComponent(projectName)}
							delayAnimation={delayAnimation}
							performanceMode={performanceMode}
						/>)
				}{location.pathname === "/experience" &&
					(<Experience 
						key="About" 
						delayAnimation={delayAnimation} 
						performanceMode={performanceMode} 
					/>)
				}
				</AnimatePresence>
			<footer className="xl:absolute bottom-0 right-1">
				<a
					href="https://github.com/Thanish"
					target="_blank"
					rel="noreferrer noopener"
					className="text-[#FBFBFB]/30 tablet:text-[#FBFBFB]/20 hover:text-[#FBFBFB] hover:drop-shadow-icon animate-fadeIn font-light text-xs duration-300 hover:underline">
					© 2024 Thanish. All rights reserved.
				</a>
			</footer>
		</div>
	);
};

export default ContainerRight;
