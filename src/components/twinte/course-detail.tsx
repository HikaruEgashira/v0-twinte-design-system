"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface CourseDetailProps {
  item: string;
  value: string;
  icon?: React.ReactNode;
  className?: string;
}

function CourseDetail({ item, value, icon, className }: CourseDetailProps) {
  return (
    <div
      className={cn("grid text-left", className)}
      style={{
        gridTemplate:
          '"icon . item" auto "icon . ." 1fr "icon . value" auto / auto 1rem 1fr',
      }}
    >
      <div className="[grid-area:icon]">{icon}</div>
      <div className="text-muted-foreground text-xs leading-tight [grid-area:item]">
        {item}
      </div>
      <div className="truncate font-medium text-foreground text-sm [grid-area:value]">
        {value}
      </div>
    </div>
  );
}

export { CourseDetail };
export type { CourseDetailProps };
