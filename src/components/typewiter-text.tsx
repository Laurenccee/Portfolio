import { motion } from "framer-motion";
import { useEffect } from "react";

type TypewriterProps = {
	label: string;
	loadingTime?: number;
	className?: string;
	onComplete?: () => void;
	boxColor?: string;
	shouldType?: boolean;
};

const BOX_FADE_DURATION = 0.125;

const Typewriter: React.FC<TypewriterProps> = ({
	label,
	loadingTime = 4000,
	className,
	onComplete,
	boxColor,
	shouldType = true,
}) => {
	const totalLetters = label.length;
	const dynamicLetterDelay = loadingTime / 2000 / totalLetters;

	useEffect(() => {
		if (onComplete && shouldType) {
			const timer = setTimeout(() => {
				onComplete();
			}, totalLetters * dynamicLetterDelay * 1000); // convert to ms
			return () => clearTimeout(timer);
		}
	}, [totalLetters, dynamicLetterDelay, onComplete, shouldType]);
	if (!shouldType) return null;
	return (
		<p className={`${className} tracking-wide`}>
			<span className="whitespace-pre">
				{label.split("").map((letter, i) => (
					<motion.span key={i} className="relative inline-block">
						<motion.span
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								delay: i * dynamicLetterDelay,
								duration: 0,
							}}
						>
							{letter === " " ? "\u00A0" : letter}
						</motion.span>

						{letter !== " " && (
							<motion.span
								style={{ backgroundColor: boxColor ?? "#000000" }} // default to dark if not passed
								className="absolute top-[3px] bottom-[3px] left-[1px] right-0"
								initial={{ opacity: 0 }}
								animate={{ opacity: [0, 1, 0] }}
								transition={{
									delay: i * dynamicLetterDelay,
									times: [0, 0.1, 1],
									duration: BOX_FADE_DURATION,
									ease: "easeInOut",
								}}
							/>
						)}
					</motion.span>
				))}
			</span>
		</p>
	);
};

export default Typewriter;
