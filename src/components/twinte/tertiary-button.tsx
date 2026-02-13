"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

const tertiaryButtonVariants = cva(
  "inline-flex w-max gap-1 px-1 py-2 rounded-sm text-sm transition-shadow cursor-pointer select-none hover:shadow-neu-convex active:shadow-neu-concave",
  {
    variants: {
      color: {
        ghost: "text-muted-foreground",
        primary: "text-primary",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
    },
    defaultVariants: {
      color: "ghost",
      iconPosition: "left",
    },
  },
);

interface TertiaryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof tertiaryButtonVariants> {
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

function TertiaryButton({
  className,
  color,
  iconPosition,
  icon,
  children,
  ref,
  ...props
}: TertiaryButtonProps) {
  return (
    <button
      ref={ref}
      className={cn(tertiaryButtonVariants({ color, iconPosition }), className)}
      {...props}
    >
      {icon && <span className="font-normal">{icon}</span>}
      <span className="font-medium">{children}</span>
    </button>
  );
}

export { TertiaryButton, tertiaryButtonVariants };
export type { TertiaryButtonProps };
