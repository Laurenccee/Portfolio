import { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface HackingTextProps {
	label?: string;
}

const MixText: React.FC<HackingTextProps> = ({ label = "LAURENCE" }) => {
	const [text, setText] = useState(label);
	let interval: ReturnType<typeof setInterval> | null = null;

	const handleMouseOver = () => {
		let iteration = 0;

		if (interval) {
			clearInterval(interval);
		}

		interval = setInterval(() => {
			setText((prev) =>
				prev
					.split("")
					.map((_, index) =>
						index < iteration ? label[index] : letters[Math.floor(Math.random() * 26)]
					)
					.join("")
			);

			if (iteration >= label.length) {
				clearInterval(interval!);
			}

			iteration += 1 / 3;
		}, 30);
	};

	return (
		<span
			className="rounded-border text-white bg-black transition-all transform hover:bg-main hover:text-black"
			style={{
				display: "inline-block", // Prevents collapsing during updates
				minWidth: `${label.length}ch`, // Reserves space based on text length
				whiteSpace: "nowrap", // Ensures text stays in a single line
				textAlign: "center", // Keeps text centered
			}}
			onMouseOver={handleMouseOver}
		>
			{text}
		</span>
	);
};

export { MixText };
