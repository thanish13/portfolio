import { TbBrandFramerMotion } from "react-icons/tb";
import { motion } from "framer-motion";
import {
	SiReact,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiRedux,
	SiNodedotjs,
	SiOpenai,
	SiSupabase,
	SiDiscord,
	SiFirebase,
	SiSpringboot,
	SiApachemaven,
	SiHibernate,
	SiOracle,
	SiPostgresql,
	SiApachekafka,
	SiApache,
	SiKibana,
	SiSwagger,
	SiAzuredevops,
	SiGraphql,
	SiGooglecloud} from "react-icons/si";
import { BiLogoJava, BiLogoJavascript } from "react-icons/bi";


const iconStyle = "w-4 h-4";

// Remap icon names to actual icons
const remapIcons = {
		Java: <BiLogoJava className={iconStyle} />,
		SpringBoot: <SiSpringboot className={iconStyle} />,
		Maven: <SiApachemaven className={iconStyle} />,
		AzureDevOps : <SiAzuredevops className={iconStyle} />,
		Oracle : <SiOracle className={iconStyle} />,
		PostgresSQL : <SiPostgresql className={iconStyle} />,
		Kafka : <SiApachekafka className={iconStyle} />,
		Kibana : <SiKibana className={iconStyle} />,
		Swagger : <SiSwagger className={iconStyle} />,
		React: <SiReact className={iconStyle} />,
		"Tailwind CSS": <SiTailwindcss className={iconStyle} />,
		"Framer Motion": <TbBrandFramerMotion className={iconStyle} />,
		"Node.js": <SiNodedotjs className={iconStyle} />,
		GraphQL: <SiGraphql className={iconStyle} />,
		gRPC: <SiGooglecloud className={iconStyle} />,
		JavaScript: <BiLogoJavascript className={iconStyle} />
};

const TechIcons = ({ items, variant, performanceMode = false, badge = false }) => {
	return (
		<>
			{items.map((item) => (
				<motion.span
					variants={variant}
					custom={performanceMode}
					className={
						badge
							? "flex justify-center h-5 tablet:h-6 px-2 text-[0.64rem] tablet:text-[0.7rem] rounded-md gap-2 items-center bg-gradient-to-tr from-primary to-secondary text-nowrap"
							: "drop-shadow-icon"
					}
					key={item}>
					{/* Icon */}
					{remapIcons[item]}
					{/* Name */}
					{badge && item}
				</motion.span>
			))}
		</>
	);
};

export default TechIcons;
