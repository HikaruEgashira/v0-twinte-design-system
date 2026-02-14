"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface RadioButtonOption {
  value: string;
  label: string;
}

interface RadioButtonProps {
  options: RadioButtonOption[];
  value?: string;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  className?: string;
}

function RadioButton({
  options,
  value,
  disabled = false,
  onValueChange,
  className,
}: RadioButtonProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {options.map((option) => {
        const checked = value === option.value;
        return (
          <label
            key={option.value}
            className={cn(
              "flex cursor-pointer select-none items-center gap-[0.8rem]",
              disabled && "pointer-events-none opacity-50",
            )}
          >
            <input
              type="radio"
              name="radio-button"
              value={option.value}
              checked={checked}
              onChange={() => onValueChange?.(option.value)}
              className="hidden"
            />
            <span
              className={cn(
                "relative block h-[2rem] w-[2rem] rounded-full transition-shadow",
                !checked &&
                  "shadow-[var(--shadow-neu-convex)] hover:shadow-neu-convex-hover",
                checked &&
                  "bg-[image:var(--gradient-primary-button)] shadow-neu-primary-concave",
              )}
            >
              <span
                className={cn(
                  "absolute top-1/2 left-1/2 block h-[0.8rem] w-[0.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full",
                  !checked && "bg-background shadow-neu-concave",
                  checked && "bg-white shadow-none",
                )}
              />
            </span>
            <span className="text-[1.4rem] font-medium leading-[135%] text-foreground">
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export { RadioButton };
export type { RadioButtonProps, RadioButtonOption };
