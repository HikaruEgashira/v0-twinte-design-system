"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

const tagVariants = cva(
  "inline-flex items-center justify-center w-max h-8 text-sm rounded-sm cursor-pointer select-none",
  {
    variants: {
      assigned: {
        false:
          "px-[0.7rem] py-[0.3rem] text-muted-foreground bg-background border border-muted-foreground",
        true: "px-2 py-1 text-white bg-[image:var(--gradient-primary)] border-none",
      },
    },
    defaultVariants: {
      assigned: false,
    },
  },
);

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  assigned?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

function Tag({
  className,
  assigned = false,
  children,
  ref,
  ...props
}: TagProps) {
  return (
    <div
      ref={ref}
      className={cn(tagVariants({ assigned }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Tag, tagVariants };
export type { TagProps };
