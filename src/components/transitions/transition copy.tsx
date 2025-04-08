import { motion } from "framer-motion";
import { ComponentType } from "react";



export default function Stairs ({children}) {
	const anim = (variants: any) => {
		return {
			initial: "initials",
			animate:"enter",
			exit:"exit",
			variants
		}
	}

	const numberOfColumns = 5;
	return (
		<div className="page">
			<div className="transition-container">
				{
					[...Array(5)].map((_, i) => {
						return <div key={i}/>
					})
				}
			</div>
			{children}
		</div>
	)
};
