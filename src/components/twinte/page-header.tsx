"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface Calendar {
  schedule: string;
  month: number;
  day: number;
  week: string;
}

interface PageHeaderProps {
  atHome?: boolean;
  calendar?: Calendar | null;
  darkMode?: boolean;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function PageHeader({
  atHome = false,
  calendar = null,
  darkMode = false,
  leftButton,
  rightButton,
  title,
  className,
  onClick,
}: PageHeaderProps) {
  return (
    <header
      className={cn("w-full pt-5 pb-0", className)}
      style={{ height: "calc(env(safe-area-inset-top, 0px) + 6rem)" }}
    >
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0">{leftButton}</div>
        {atHome ? (
          <div className="-translate-x-1/2 -ml-1 absolute bottom-1 left-1/2">
            {/* Logo placeholder - replace with actual logo */}
            <span className="font-bold text-primary text-xl">Twin:te</span>
          </div>
        ) : (
          <h1 className="-translate-x-1/2 absolute bottom-1 left-1/2 font-medium text-foreground text-lg leading-tight">
            {title}
          </h1>
        )}
        {atHome && calendar ? (
          <div className="absolute top-0 right-0 text-right leading-tight">
            <p className="font-bold text-foreground">
              {calendar.month}/{calendar.day} ({calendar.week})
            </p>
            <p className="overflow-auto whitespace-nowrap pt-0.5 text-muted-foreground text-sm">
              {calendar.schedule}
            </p>
          </div>
        ) : (
          <div className="absolute top-0 right-0">{rightButton}</div>
        )}
      </div>
    </header>
  );
}

export { PageHeader };
export type { PageHeaderProps, Calendar };
