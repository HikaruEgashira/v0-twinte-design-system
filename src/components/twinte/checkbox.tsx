"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { Checkbox as RadixCheckbox } from "radix-ui";
import type * as React from "react";

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

function Checkbox({
  checked = false,
  disabled = false,
  onCheckedChange,
  className,
  ref,
}: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      ref={ref}
      checked={checked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      className={cn(
        "flex h-[2.4rem] w-[2.4rem] cursor-pointer items-center justify-center rounded-lg transition-shadow",
        !checked &&
          "bg-background text-muted-foreground shadow-neu-convex hover:shadow-neu-convex-hover",
        checked &&
          "bg-[image:var(--gradient-primary)] text-white shadow-neu-primary-concave",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      <RadixCheckbox.Indicator>
        <Check className="h-[1.125rem] w-[1.125rem]" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}

export { Checkbox };
export type { CheckboxProps };
