"use client";

import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center relative rounded-full transition-shadow outline-none cursor-pointer select-none",
  {
    variants: {
      size: {
        small: "h-[2.8rem] px-4 text-sm leading-[2.8rem]",
        medium: "px-12 text-base leading-[4rem]",
        large: "h-[4.6rem] px-9 text-base leading-[4.6rem]",
      },
      color: {
        base: "bg-background text-muted-foreground shadow-neu-convex",
        primary:
          "bg-[image:var(--gradient-primary)] text-white shadow-neu-convex",
        danger: "bg-destructive text-white shadow-neu-convex",
      },
      layout: {
        flexible: "w-auto",
        fill: "block w-full max-w-[60rem] px-0",
        half: "w-[35%] max-w-[200px]",
      },
    },
    defaultVariants: {
      size: "large",
      color: "base",
      layout: "flexible",
    },
  },
);

type ButtonState = "active" | "default" | "disabled";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  state?: ButtonState;
  pauseActiveStyle?: boolean;
  icon?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

function Button({
  className,
  size,
  color,
  layout,
  state = "default",
  pauseActiveStyle = false,
  icon = false,
  children,
  onClick,
  ref,
  ...props
}: ButtonProps) {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (state === "disabled") return;
    if (pauseActiveStyle) {
      setIsActive((prev) => !prev);
    }
    onClick?.(e);
  };

  const active = isActive || state === "active";
  const disabled = state === "disabled";

  return (
    <button
      ref={ref}
      className={cn(
        buttonVariants({ size, color, layout }),
        active && !disabled && "bg-[image:var(--gradient-primary-button)] text-white shadow-neu-primary-concave",
        active &&
          !disabled &&
          color === "danger" &&
          "shadow-neu-danger-concave",
        disabled && "pointer-events-none opacity-30 shadow-neu-convex",
        !disabled &&
          "hover:shadow-neu-convex-hover active:text-white active:shadow-neu-primary-concave",
        !disabled && color === "danger" && "active:shadow-neu-danger-concave",
        className,
      )}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
      {icon && <span className="ml-1 text-[100%] leading-none">&#xe895;</span>}
    </button>
  );
}

export { Button, buttonVariants };
export type { ButtonProps, ButtonState };
