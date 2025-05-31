// components/Layout.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import { opacity, expand } from "./anim";

const nbOfColumns = 10;

const Layout = (
	WrappedComponent: React.FC,
	backgroundColor: string = "#ffffff",
	skipEnter = false
) => {
	return function WithLayout(props: any) {
		const anim = (variants: Variants, custom: number | null = null) => ({
			initial: "initial",
			...(skipEnter ? {} : { animate: "enter" }), // <- only apply animate if not skipping
			exit: "exit",
			custom,
			variants,
		});

		return (
			<div className="page stairs" style={{ backgroundColor }}>
				{/* Fade Background */}
				<motion.div
					{...anim(opacity)}
					className="fixed top-0 left-0 w-full h-screen bg-black z-[1] pointer-events-none"
				/>

				{/* Stairs Columns */}
				<div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-[2]">
					{[...Array(nbOfColumns)].map((_, i) => (
						<motion.div
							key={i}
							className="relative h-full w-full bg-black"
							{...(skipEnter
								? {
										initial: { top: "100vh", height: "0" },
										exit: expand.exit(i),
								  }
								: anim(expand, nbOfColumns - i))}
						/>
					))}
				</div>

				<WrappedComponent {...props} />
			</div>
		);
	};
};

export default Layout;
