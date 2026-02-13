"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: React.Ref<HTMLTextAreaElement>;
}

function Textarea({ className, style, ...props }: TextareaProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-background px-4 shadow-neu-input",
        className,
      )}
    >
      <textarea
        className="w-full resize-none bg-transparent text-foreground text-sm leading-relaxed outline-none placeholder:text-muted-foreground"
        style={{ width: "100%", height: "10rem", ...style }}
        {...props}
      />
    </div>
  );
}

export { Textarea };
export type { TextareaProps };
