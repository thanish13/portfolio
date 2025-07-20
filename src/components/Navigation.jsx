import { motion } from "framer-motion";
import NavItem from "./NavItem";
import { cn } from "../../lib/utils";

const list = {
	visible: {
		transition: {
			delayChildren: 1.6,
			staggerChildren: 0.4,
		},
	},
	hidden: {},
};

const Navigation = ({ location, projectName }) => {
	return (
		<nav className="w-full">
			<motion.ul
				initial="hidden"
				animate="visible"
				variants={list}
				className={cn(
										"w-full flex gap-10 items-center pt-2 tablet:pt-0 justify-center",
										 "backdrop-blur bg-gradient-to-br from-[#131313] to-[#171717]"
									)}>
				{/* className= "w-full flex gap-10 items-center pt-2 tablet:pt-0 justify-center"> */}
				<NavItem name="About Me" url="/about" current={location} />
				<NavItem
					name="Home"
					url="/"
					current={location}
					projectName={projectName === "undefined" ? null : projectName}
				/>
				<NavItem name="Experience" url="/experience" current={location} />

			</motion.ul>			
		</nav>
	);
};

export default Navigation;
