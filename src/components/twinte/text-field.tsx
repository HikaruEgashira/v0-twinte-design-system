"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import { X } from "lucide-react";
import type * as React from "react";

const textFieldVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      normal: "h-[4rem]",
      slim: "h-[3.6rem]",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof textFieldVariants> {
  added?: boolean;
  onClose?: () => void;
  onEnter?: () => void;
  ref?: React.Ref<HTMLInputElement>;
}

function TextField({
  className,
  size,
  added = false,
  disabled = false,
  onClose,
  onEnter,
  onKeyDown,
  ref,
  ...props
}: TextFieldProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnter?.();
    }
    onKeyDown?.(e);
  };

  return (
    <div className={cn(textFieldVariants({ size }), className)}>
      <div
        className={cn(
          "flex h-full w-full items-center rounded-lg bg-background px-4 shadow-neu-input",
          disabled && "opacity-30 shadow-neu-convex",
        )}
      >
        <input
          ref={ref}
          type="text"
          disabled={disabled}
          className="h-8 w-full bg-transparent text-foreground text-sm leading-none outline-none placeholder:text-muted-foreground"
          onKeyDown={handleKeyDown}
          {...props}
        />
      </div>
      {added && (
        <button
          type="button"
          className="cursor-pointer text-muted-foreground text-xl"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export { TextField, textFieldVariants };
export type { TextFieldProps };
