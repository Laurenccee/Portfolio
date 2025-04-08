import { motion } from "framer-motion";
import { ComponentType } from "react";

const transition = <P extends object>(OgComponent: ComponentType<P>) => {
	const TransitionWrapper = (props: P) => {
		return (
			<>
				{/* Black Overlay (Covering the page) */}
				<motion.div
					className="fixed top-0 left-0 w-full h-screen bg-black origin-bottom z-10"
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 1 }}
					transition={{
						duration: 1,
						ease: [0.22, 1, 0.36, 1],
					}}
				></motion.div>
				<motion.div
					className="fixed top-0 left-0 w-full h-screen bg-black origin-top z-10"
					initial={{ scaleY: 1 }}
					animate={{ scaleY: 0 }}
					exit={{ scaleY: 0 }}
					transition={{
						duration: 1,
						ease: [0.22, 1, 0.36, 1], // This matches the transition delay of the overlay
					}}
				></motion.div>
				<OgComponent {...props} />
			</>
		);
	};

	return TransitionWrapper;
};

export default transition;
