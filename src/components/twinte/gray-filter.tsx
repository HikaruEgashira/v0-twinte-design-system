"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface GrayFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

function GrayFilter({ className, ref, ...props }: GrayFilterProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-foreground/30 backdrop-blur-[8px]",
        className,
      )}
      {...props}
    />
  );
}

export { GrayFilter };
export type { GrayFilterProps };
