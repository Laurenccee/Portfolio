import * as React from "react";
import { cn } from "@/lib/utils"; // utility for conditional class merging

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex w-full rounded-base border-4 border-white shadow-shadow bg-black px-3 py-2 text-white placeholder:text-white resize-none outline:none focus:outline-none",
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
