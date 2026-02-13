"use client";

import { Checkbox } from "@/components/twinte/checkbox";
import { cn } from "@/lib/utils";
import type * as React from "react";

interface CheckContentProps {
  checked: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

function CheckContent({
  checked,
  disabled = false,
  onCheckedChange,
  children,
  className,
}: CheckContentProps) {
  return (
    <div className={cn("flex w-max items-center", className)}>
      <Checkbox
        checked={checked}
        disabled={disabled}
        onCheckedChange={onCheckedChange}
      />
      <div className="px-3 leading-tight">{children}</div>
    </div>
  );
}

export { CheckContent };
export type { CheckContentProps };
