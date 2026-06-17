"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const labelVariants = cva("flex items-center h-8 leading-none", {
  variants: {
    size: {
      normal: "text-base font-medium text-foreground",
      slim: "text-xs font-medium text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

interface LabelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof labelVariants> {
  value: string;
  mandatory?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

function Label({
  className,
  value,
  mandatory = false,
  size,
  ref,
  ...props
}: LabelProps) {
  return (
    <div
      ref={ref}
      className={cn(labelVariants({ size }), className)}
      {...props}
    >
      {value}
      {mandatory && (
        <span className="ml-2 rounded-sm bg-muted-foreground px-1 font-normal text-white text-xs">
          必須
        </span>
      )}
    </div>
  );
}

export type { LabelProps };
export { Label, labelVariants };
