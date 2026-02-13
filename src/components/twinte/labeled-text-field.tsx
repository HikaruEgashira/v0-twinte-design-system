"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

const labelVariants = cva("mb-2", {
  variants: {
    size: {
      normal: "mb-2",
      slim: "mb-1",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

interface LabeledTextFieldProps extends VariantProps<typeof labelVariants> {
  label: string;
  mandatory?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function LabeledTextField({
  label,
  mandatory = false,
  size,
  className,
  children,
}: LabeledTextFieldProps) {
  return (
    <div className={cn("h-[6.8rem]", className)}>
      <div className={cn(labelVariants({ size }))}>
        <span className="text-foreground text-sm">{label}</span>
        {mandatory && <span className="ml-1 text-destructive text-xs">*</span>}
      </div>
      <div>{children}</div>
    </div>
  );
}

export { LabeledTextField, labelVariants };
export type { LabeledTextFieldProps };
