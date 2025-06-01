import { motion } from "framer-motion";
import LinkButton from "./LinkButton";
import TechIcons from "./TechIcons";
import { cn } from "../../../lib/utils";
import Experience from "../experience/Experience";
import CloseButton from "./CloseButton";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// Animation variants
const containerVariant = {
	visible: { transition: { delayChildren: 0.2, staggerChildren: 0.12 } },
	hidden: {},
	exit: {},
};

const itemVariant = {
	visible: (performanceMode) => ({
		y: 0,
		opacity: 1,
		rotate: !performanceMode ? 0.01 : 0,
		transition: !performanceMode ? { type: "spring", stiffness: 52, damping: 14 } : { duration: 0 },
	}),
	hidden: { y: 10, opacity: 0 },
	exit: { y: 0, opacity: 0, transition: { duration: 0 } },
};

const SelectedItemBlog = ({ item, isMobile, performanceMode }) => {
	return (
		<>
			{/* Content container */}
			<motion.div
				layout
				initial="hidden"
				animate="visible"
				exit="exit"
				variants={!performanceMode ? containerVariant : null}
				className={cn(
					"w-full h-full overflow-hidden flex flex-col items-center justify-center gap-6 px-2 py-4 z-10 drop-shadow",
					performanceMode && "drop-shadow-none"
				)}>
				<motion.div
				variants={itemVariant}
				custom={performanceMode}
				style={{ position: "absolute",
						 top: 0,
						 right: 0,}}>
					<CloseButton/>
				</motion.div>
				{/* Title and Badges */}
				<div className="w-full flex flex-col items-center gap-2 tablet:gap-1">
					{/* Name and Year */}
					<div className="flex items-center gap-2 tablet:-mt-1">
						<motion.h1
							variants={itemVariant}
							custom={performanceMode}
							className="font-semibold text-xl tablet:text-2xl">
							{item.title}
						</motion.h1>
						<motion.p
							variants={itemVariant}
							custom={performanceMode}
							className="font-light text-sm mt-[0.16rem]">
							({item.year})
						</motion.p>
					</div>
					{/* Badges */}
					<motion.div
						variants={!performanceMode ? containerVariant : null}
						className="flex flex-wrap w-full items-center justify-center gap-2">
						<TechIcons
							items={item.tech}
							variant={itemVariant}
							performanceMode={performanceMode}
							badge={true}
						/>
					</motion.div>
				</div>
				{/* Description */}
				<motion.p
					className="px-1 tablet:px-4 text-center text-sm tablet:text-[0.92rem] tablet:leading-normal"
					variants={itemVariant}
					custom={performanceMode}>
				{
					function () {
					const [markdown, setMarkdown] = useState("");

					useEffect(() => {
						fetch()
						.then((res) => res.text())
						.then((text) => setMarkdown(text));
					}, []);

					return (
						<>
						<ReactMarkdown source={markdown} />
						</>
						);
					}
				}
				</motion.p>

				{/* Links */}
				<motion.div
					variants={itemVariant}
					custom={performanceMode}
					className="w-full flex justify-center items-center gap-4 tablet:gap-5">
					{item?.links.map((link) => (
						<LinkButton key={`${item.title}-${link.type}`} link={link} />
					))}
				</motion.div>
			</motion.div>
		</>
	);
};

export default SelectedItemBlog;
