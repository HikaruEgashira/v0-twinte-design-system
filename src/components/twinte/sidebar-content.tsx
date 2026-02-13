"use client";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type * as React from "react";

interface SidebarContentProps {
  selected?: boolean;
  link?: boolean;
  icon?: React.ReactNode;
  item?: string;
  className?: string;
  onClick?: () => void;
}

function SidebarContent({
  selected = false,
  link = false,
  icon,
  item = "",
  className,
  onClick,
}: SidebarContentProps) {
  return (
    <button
      type="button"
      className={cn(
        "flex w-[20.8rem] cursor-pointer items-center px-5 py-1 text-muted-foreground transition-shadow",
        "focus:outline-none active:shadow-[var(--shadow-neu-concave)]",
        selected &&
          "[&>*]:bg-gradient-to-r [&>*]:from-primary [&>*]:to-primary/80 [&>*]:bg-clip-text [&>*]:text-transparent",
        className,
      )}
      onClick={onClick}
    >
      <span
        className={cn(
          "text-[2.8rem] leading-tight",
          selected &&
            "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent",
        )}
      >
        {icon}
      </span>
      <p
        className={cn(
          "ml-4 font-medium text-base",
          selected &&
            "bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent",
        )}
      >
        {item}
        {link && (
          <ExternalLink className="-mt-0.5 ml-2 inline h-3.5 w-3.5 text-primary" />
        )}
      </p>
    </button>
  );
}

export { SidebarContent };
export type { SidebarContentProps };
