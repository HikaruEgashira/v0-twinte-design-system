"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  ref?: React.Ref<HTMLDivElement>;
}

function Card({
  className,
  width = "100%",
  children,
  ref,
  style,
  ...props
}: CardProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "h-auto rounded-xl bg-[image:var(--gradient-base)] px-6 py-4 shadow-neu-base",
        className,
      )}
      style={{ width, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card };
export type { CardProps };
