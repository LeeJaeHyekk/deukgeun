import * as React from "react";
import { cn } from "@/shared/lib/utils/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative h-3 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <div
        className="h-full bg-primary transition-all"
        style={{ width: `${(value / max) * 100}%` }}
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
