import { motion } from "framer-motion";
import * as React from "react";

// Define the types for the props
interface StaggeredLinkProps {
	children: string;
	href: string;
	className?: string; // Optional className prop for custom styling
}

const DURATION = 0.25;
const STAGGER = 0.025;

// Create the StaggeredLink component
const StaggeredText: React.FC<StaggeredLinkProps> = ({ children, href, className = "" }) => {
	return (
		<motion.a
			initial="initial"
			whileHover="hovered"
			href={href}
			className={`relative inline-flex items-center overflow-hidden whitespace-pre ${className}`}
			style={{
				lineHeight: 0.85, // Ensure proper line height for vertical alignment
			}}
		>
			<div className="relative flex items-center">
				{children.split("").map((l, i) => {
					return (
						<motion.span
							variants={{
								initial: { y: 0 },
								hovered: { y: "-100%" },
							}}
							transition={{
								duration: DURATION,
								delay: STAGGER * i,
								ease: "easeInOut",
							}}
							className="inline-block font-normal"
							key={i}
						>
							{l}
						</motion.span>
					);
				})}
			</div>
			<div className="absolute inset-0 flex items-center">
				{children.split("").map((l, i) => {
					return (
						<motion.span
							variants={{
								initial: { y: "100%" },
								hovered: { y: 0 },
							}}
							transition={{
								duration: DURATION,
								delay: STAGGER * i,
								ease: "easeInOut",
							}}
							className="inline-block font-normal"
							key={i}
						>
							{l}
						</motion.span>
					);
				})}
			</div>
		</motion.a>
	);
};

export default StaggeredText;
