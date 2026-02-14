"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

type ToggleSelect = "left" | "right";

interface ToggleButtonProps {
  labels: { left: string; right: string };
  selected: ToggleSelect;
  disabled?: boolean;
  onSelect?: (selected: ToggleSelect) => void;
  className?: string;
}

function ToggleButton({
  labels,
  selected,
  disabled = false,
  onSelect,
  className,
}: ToggleButtonProps) {
  const isLeft = selected === "left";

  return (
    <div
      className={cn(
        "relative flex h-[2.8rem] w-[12rem] items-center rounded-full border border-background px-[0.1rem]",
        "cursor-pointer select-none bg-background text-center font-medium text-muted-foreground text-xs shadow-[var(--shadow-neu-concave),var(--shadow-neu-convex)]",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      <button
        type="button"
        className="w-full cursor-pointer border-none bg-transparent leading-7"
        onClick={() => onSelect?.("left")}
      >
        {labels.left}
      </button>
      <button
        type="button"
        className="w-full cursor-pointer border-none bg-transparent leading-7"
        onClick={() => onSelect?.("right")}
      >
        {labels.right}
      </button>
      <div
        className={cn(
          "absolute left-[0.1rem] h-[2.4rem] w-[6rem] rounded-full shadow-neu-drop",
          "bg-[image:var(--gradient-primary-button)] text-center text-white text-xs leading-[2.4rem] transition-transform",
          !isLeft && "translate-x-[5.6rem]",
        )}
      >
        {isLeft ? labels.left : labels.right}
      </div>
    </div>
  );
}

export { ToggleButton };
export type { ToggleButtonProps, ToggleSelect };
