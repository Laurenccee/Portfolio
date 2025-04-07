import { useState } from "react";
import { Download, Github, Linkedin, Instagram, Mail } from "lucide-react";
import React from "react";

const Input = () => {
	const [value, setValue] = useState("tejadarevertlaurence@gmail.com");

	// Create a ref for the span element
	const spanRef = React.useRef<HTMLSpanElement>(null);

	// Function to handle value change
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<div className="flex flex-row items-center gap-2.5 bg-main border-2 border-border shadow-shadow h-full">
			<Mail />

			{/* Invisible span for measuring the width of the input text */}
			<span
				ref={spanRef}
				className="absolute invisible"
				style={{ whiteSpace: "pre", fontSize: "0.875rem" }}
			>
				{value}
			</span>

			{/* The input width will be based on the span's width */}
			<input
				type="text"
				value={value}
				onChange={handleChange}
				className="h-full text-sm"
				style={{
					width: spanRef.current ? `${spanRef.current.offsetWidth}px` : "auto", // Adjust width based on span width
				}}
			/>
		</div>
	);
};

export default Input;
