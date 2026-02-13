"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";
import { Loader } from "./loader";

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-base)] cursor-pointer select-none outline-none transition-shadow shadow-neu-convex",
  {
    variants: {
      size: {
        small: "w-[2.8rem] h-[2.8rem] text-[1.6rem]",
        medium: "w-[3.3rem] h-[3.3rem] text-[1.8rem]",
        large: "w-16 h-16 text-[2.4rem]",
      },
      color: {
        normal:
          "text-muted-foreground hover:shadow-neu-base active:text-white active:shadow-neu-primary-concave",
        danger:
          "text-destructive hover:shadow-neu-base active:text-white active:shadow-neu-danger-concave",
        primary:
          "text-primary hover:shadow-neu-base active:text-white active:shadow-neu-primary-concave",
      },
    },
    defaultVariants: {
      size: "large",
      color: "normal",
    },
  },
);

interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof iconButtonVariants> {
  state?: "default" | "disabled";
  loading?: boolean;
  icon?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

function IconButton({
  className,
  size,
  color,
  state = "default",
  loading = false,
  icon,
  children,
  onClick,
  ref,
  ...props
}: IconButtonProps) {
  const disabled = state === "disabled";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  const loaderSize = size === "small" ? 14 : size === "medium" ? 16 : 20;

  return (
    <button
      ref={ref}
      className={cn(
        iconButtonVariants({ size, color }),
        disabled && "pointer-events-none opacity-30",
        className,
      )}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {loading ? <Loader size={loaderSize} /> : icon}
      {children}
    </button>
  );
}

export { IconButton, iconButtonVariants };
export type { IconButtonProps };
