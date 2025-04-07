import * as React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
	leftIcon?: React.ReactElement<React.ComponentProps<"svg">>; // Accepts React element with svg props for left icon
	rightIcon?: React.ReactElement<React.ComponentProps<"svg">>; // Accepts React element with svg props for right icon
}

const NInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, leftIcon, rightIcon, ...props }, ref) => {
		return (
			<div className="relative flex items-center w-full">
				{/* Left Icon and Divider */}
				{leftIcon && (
					<div className="absolute inset-y-0 left-3 flex items-center gap-2">
						{React.cloneElement(leftIcon, {
							className: "h-6 w-6 text-muted-foreground", // 24px icon size (1:1 ratio)
						})}
						<div className="w-px h-6 bg-border" /> {/* Divider with 24px height */}
					</div>
				)}

				{/* Input Field */}
				<input
					type={type}
					className={cn(
						"w-full h-10 text-mtext bg-main border-2 border-border shadow-shadow px-3 rounded-md focus:outline-none focus:ring-0",
						leftIcon ? "pl-12" : "pl-3", // Adjust padding-left if there's a left icon
						rightIcon ? "pr-12" : "pr-3", // Adjust padding-right if there's a right icon
						className
					)}
					ref={ref}
					{...props}
				/>

				{/* Right Icon and Divider */}
				{rightIcon && (
					<div className="absolute inset-y-0 right-3 flex items-center gap-2">
						<div className="w-px h-6 bg-border mr-2" /> {/* Divider with 24px height */}
						{React.cloneElement(rightIcon, {
							className: "h-6 w-6 text-muted-foreground", // 24px icon size (1:1 ratio)
						})}
					</div>
				)}
			</div>
		);
	}
);

NInput.displayName = "NInput";

export { NInput };
