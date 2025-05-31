import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
import { cn } from "@/lib/utils";

type NProgressProps = {
  value: number;
  className?: string;
};

const NProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & NProgressProps
>(({ className, value, ...props }, ref) => {
  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-5 w-full overflow-hidden shadow-shadow rounded-base border-4 border-black bg-main",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 border-black bg-[#50A99A] transition-all border-r-4"
        style={{
          transform: `translateX(-${100 - value}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
});

NProgress.displayName = "NProgress";

export default NProgress;
