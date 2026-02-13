"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface DecoratedIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

function DecoratedIcon({ className, icon, ref, ...props }: DecoratedIconProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-neu-concave",
        className,
      )}
      {...props}
    >
      <span className="text-[2.6rem] text-primary leading-none drop-shadow-[var(--shadow-neu-icon)]">
        {icon}
      </span>
    </div>
  );
}

export { DecoratedIcon };
export type { DecoratedIconProps };
