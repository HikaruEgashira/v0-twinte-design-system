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
        "flex h-[4rem] w-[4rem] items-center justify-center rounded-full bg-[image:var(--gradient-primary-light)] shadow-[var(--shadow-neu-liner-concave)]",
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
