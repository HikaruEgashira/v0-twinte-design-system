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
        "relative flex h-7 w-12 cursor-pointer items-center rounded-full border border-background",
        !checked &&
          "bg-muted-foreground shadow-[var(--shadow-neu-convex),inset_0_0_0.4rem_oklch(0.64_0.017_235.6/0.3)]",
        checked &&
          "bg-[image:var(--gradient-primary)] shadow-[var(--shadow-neu-convex),inset_0_0_0.4rem_oklch(0.55_0.100_194.8/0.5)]",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      <Switch.Thumb
        className={cn(
          "block h-[1.375rem] w-[1.375rem] rounded-full bg-[image:var(--gradient-base)] shadow-md transition-transform",
          "translate-x-[0.1875rem]",
          "data-[state=checked]:translate-x-[1.3125rem]",
        )}
      />
    </Switch.Root>
  );
}

export { ToggleSwitch };
export type { ToggleSwitchProps };
