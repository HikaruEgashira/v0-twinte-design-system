"use client";

import { cn } from "@/lib/utils";
import { Switch } from "radix-ui";
import type * as React from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  ref?: React.Ref<HTMLButtonElement>;
}

function ToggleSwitch({
  checked = false,
  disabled = false,
  onCheckedChange,
  className,
  ref,
}: ToggleSwitchProps) {
  return (
    <Switch.Root
      ref={ref}
      checked={checked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      className={cn(
        "relative flex h-[2.8rem] w-[4.8rem] cursor-pointer items-center rounded-full border border-background",
        !checked &&
          "bg-[#b8c1c7] shadow-[var(--shadow-neu-convex),var(--shadow-neu-unselected-concave)]",
        checked &&
          "bg-[image:var(--gradient-primary)] shadow-[var(--shadow-neu-primary-concave),var(--shadow-neu-convex)]",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      <Switch.Thumb
        className={cn(
          "block h-[2.2rem] w-[2.2rem] rounded-full bg-background shadow-neu-drop transition-[transform,box-shadow]",
          "translate-x-[0.1875rem]",
          "data-[state=checked]:translate-x-[2rem]",
        )}
      />
    </Switch.Root>
  );
}

export { ToggleSwitch };
export type { ToggleSwitchProps };
