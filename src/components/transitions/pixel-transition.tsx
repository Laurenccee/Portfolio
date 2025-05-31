import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const anim = {
	initial: { opacity: 0 },
	open: (i: number) => ({
		opacity: 1,
		transition: { duration: 0, delay: 0.03 * i },
	}),
	closed: (i: number) => ({
		opacity: 0,
		transition: { duration: 0, delay: 0.03 * i },
	}),
};

// Higher-Order Component version
const PixelBackground = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
	const ComponentWithPixel = (props: P) => {
		const [hasLoaded, setHasLoaded] = useState(false);
		const [dimensions, setDimensions] = useState({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		useEffect(() => {
			const handleResize = () => {
				setDimensions({
					width: window.innerWidth,
					height: window.innerHeight,
				});
			};
			window.addEventListener("resize", handleResize);
			setHasLoaded(true);
			return () => window.removeEventListener("resize", handleResize);
		}, []);

		const shuffle = (a: number[]) => {
			let j, x, i;
			for (i = a.length - 1; i > 0; i--) {
				j = Math.floor(Math.random() * (i + 1));
				x = a[i];
				a[i] = a[j];
				a[j] = x;
			}
			return a;
		};

		const getBlocks = () => {
			const blockSize = dimensions.width * 0.05;
			const nbOfBlocks = Math.ceil(dimensions.height / blockSize);
			const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));

			return shuffledIndexes.map((randomIndex, index) => (
				<motion.div
					key={index}
					className="w-full aspect-square bg-black"
					variants={anim}
					initial="initial"
					animate={hasLoaded ? "open" : "initial"}
					custom={randomIndex}
				/>
			));
		};

		return (
			<div className="relative h-screen overflow-hidden">
				{/* background blocks */}
				<div className="absolute inset-0 z-[1] flex h-full w-full pointer-events-none">
					{[...Array(20)].map((_, index) => (
						<div key={index} className="w-[5vw] h-full flex flex-col">
							{getBlocks()}
						</div>
					))}
				</div>

				{/* actual page content */}
				<div className="relative z-10">
					<WrappedComponent {...props} />
				</div>
			</div>
		);
	};

	return ComponentWithPixel;
};

export default PixelBackground;
