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

const Navigation = ({ location, projectName, blogName }) => {
	return (
		<nav className="w-full">
			<motion.ul
				initial="hidden"
				animate="visible"
				variants={list}
				className={cn(
										"w-full flex gap-10 items-center pt-2 tablet:pt-0 justify-center",
										 "backdrop-blur-none bg-gradient-to-br from-[#131313] to-[#171717]"
									)}>
				{/* className= "w-full flex gap-10 items-center pt-2 tablet:pt-0 justify-center"> */}
				<NavItem name="About Me" url="/about" current={location} />
				<NavItem
					name="Projects"
					url="/project"
					current={location}
					projectName={projectName === "undefined" ? null : projectName}
				/>
				<NavItem name="Blog" url="/blog" current={location} projectName={blogName === "undefined" ? null : blogName} />
			</motion.ul>			
		</nav>
	);
};

export default Navigation;
