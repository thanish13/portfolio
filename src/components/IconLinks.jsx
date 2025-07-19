import { motion } from "framer-motion";
import { TbBrandFramerMotion, TbBrandSteam } from "react-icons/tb";
import { cn } from "../../lib/utils";
import {
	SiReact,
	SiTailwindcss,
	SiNodedotjs,
	SiSpringboot,
	SiApachemaven,
	SiOracle,
	SiPostgresql,
	SiApachekafka,
	SiKibana,
	SiSwagger,
	SiAzuredevops,
	SiGraphql,
	SiGooglecloud} from "react-icons/si";
import {BiLogoJava, BiLogoJavascript } from "react-icons/bi";


// Animation variants
const containerVariants = {
	visible: { transition: { staggerChildren: 0.16 } },
	hidden: {},
};

const itemVariants = {
	visible: {
		y: 0,
		opacity: 1,
		rotate: 0.01, // To make the animation render smoother
		transition: {
			y: { type: "tween", duration: 1, ease: "easeOut" },
			opacity: { duration: 2, ease: "easeInOut" },
		},
	},
	hidden: (y) => ({ y: y, opacity: 0 }),
};

const iconStyle = "opacity-40 group-hover:opacity-80 duration-500";

// Remap icon names to actual icons
const iconsRemap = {
	Java: <BiLogoJava size={36} className={iconStyle} />,
	SpringBoot: <SiSpringboot size={36} className={iconStyle} />,
	Maven: <SiApachemaven size={36} className={iconStyle} />,
	AzureDevOps : <SiAzuredevops size={36} className={iconStyle} />,
	Oracle : <SiOracle size={36} className={iconStyle} />,
	PostgresSQL : <SiPostgresql size={36} className={iconStyle} />,
	Kafka : <SiApachekafka size={36} className={iconStyle} />,
	Kibana : <SiKibana size={36} className={iconStyle} />,
	Swagger : <SiSwagger size={36} className={iconStyle} />,
	React: <SiReact size={36} className={iconStyle} />,
	"Tailwind CSS": <SiTailwindcss size={36} className={iconStyle} />,
	"Framer Motion": <TbBrandFramerMotion size={36} className={iconStyle} />,
	"Node.js": <SiNodedotjs size={36} className={iconStyle} />,
	GraphQL: <SiGraphql size={36} className={iconStyle} />,
	gRPC: <SiGooglecloud size={36} className={iconStyle} />,
	JavaScript: <BiLogoJavascript size={40} className={iconStyle} />
};

const IconLinks = ({ icons, direction, style = null, itemStyle = null, tooltipStyle = null }) => {
	return (
		<motion.ul
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className={cn("tablet:h-14 px-10 tablet:px-0 w-full flex justify-between", style)}>
			{icons.map((item, i) => (
				<motion.li
					key={item.name}
					style={{ zIndex: icons.length - i }}
					className={cn(
						"group relative w-10 h-10 tablet:w-14 tablet:h-14 flex flex-col items-center",
						itemStyle
					)}
					variants={itemVariants}
					custom={direction}>
					{/* Icon */}
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={item.link}
						className="h-full w-full flex items-center justify-center z-10 hover:text-sky-600"
						>
						{iconsRemap[item.icon]}
						{/* Tooltip */}
						<span
							className={cn(
								"absolute -bottom-5 scale-75 px-3 py-2 bg-primary rounded-lg text-sm shadow-xl opacity-0 group-hover:opacity-100 group-hover:-bottom-8 group-hover:scale-100 duration-300 z-0 text-nowrap pointer-events-none text-sky-600",
								tooltipStyle
							)}>
							{item.name}
						</span>
					</a>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default IconLinks;
