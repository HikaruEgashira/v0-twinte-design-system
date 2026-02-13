"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface NewsBoxProps {
  title: string;
  publicationDate: string;
  content: string;
  className?: string;
}

function NewsBox({ title, publicationDate, content, className }: NewsBoxProps) {
  return (
    <div className={cn("", className)}>
      <div className="text-muted-foreground text-xs">{publicationDate}</div>
      <div className="mt-1 font-medium text-foreground text-lg leading-tight">
        {title}
      </div>
      <div className="mt-2 text-foreground text-sm leading-relaxed [&_a]:text-primary">
        {content}
      </div>
    </div>
  );
}

export { NewsBox };
export type { NewsBoxProps };
