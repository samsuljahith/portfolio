import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-none border-2 border-black bg-card px-4 py-3 text-sm text-foreground transition-shadow placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:shadow-[3px_3px_0_0_hsl(var(--primary))] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
