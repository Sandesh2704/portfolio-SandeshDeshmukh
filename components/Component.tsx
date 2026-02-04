import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full" | "default"; 
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 xl:px-0",
          {
            "max-w-2xl": size === "sm",
            "max-w-3xl": size === "md",
            "max-w-5xl": size === "lg",
            "max-w-7xl": size === "xl",
            "max-w-full": size === "full",
            "max-w-[1480px]": size === "default",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = "Container";

export { Container };
