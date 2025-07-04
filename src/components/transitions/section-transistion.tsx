// components/FadeInSection.tsx
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={{
				hidden: { opacity: 0, y: 100 },
				visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
			}}
		>
			{children}
		</motion.div>
	);
};

export default FadeInSection;
