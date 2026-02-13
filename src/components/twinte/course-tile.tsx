"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

type CourseTileState = "default" | "none";

interface CourseTileProps {
  name: string;
  room: string;
  state: CourseTileState;
  caution?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

function CourseTile({
  name,
  room,
  state,
  caution = "",
  className,
  onClick,
}: CourseTileProps) {
  const hasCaution = caution !== "";

  return (
    <div
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-md p-2 text-left transition-shadow",
        state === "default" &&
          "bg-primary/10 active:shadow-[var(--shadow-neu-concave)]",
        state === "none" && "bg-muted",
        hasCaution &&
          "before:absolute before:inset-0 before:rounded-md before:bg-black/20",
        className,
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          onClick?.(e as unknown as React.MouseEvent);
      }}
    >
      <div className="font-medium text-[0.65rem] text-foreground leading-tight">
        {name}
      </div>
      <div className="w-full truncate text-[0.55rem] text-muted-foreground">
        {room}
      </div>
      {hasCaution && (
        <div className="absolute bottom-1 left-1 z-10 w-[calc(100%-0.5rem)] rounded-md bg-background py-1 text-center font-medium text-[0.65rem] text-primary/70">
          {caution}
        </div>
      )}
    </div>
  );
}

export { CourseTile };
export type { CourseTileProps, CourseTileState };
