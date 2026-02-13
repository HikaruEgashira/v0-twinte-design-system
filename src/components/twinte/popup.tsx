"use client";

import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import { Popover as PopoverPrimitive } from "radix-ui";
import type * as React from "react";

function Popup({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popup" {...props} />;
}

function PopupTrigger({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popup-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

function PopupContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popup-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 inline-block rounded-lg py-1",
          "bg-[image:var(--gradient-base)] text-popover-foreground",
          "shadow-[var(--shadow-neu-convex)]",
          "data-[state=closed]:animate-out data-[state=open]:animate-in",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

type PopupItemColor = "normal" | "danger";

interface PopupItemProps extends React.ComponentProps<"li"> {
  link?: boolean;
  color?: PopupItemColor;
}

function PopupItem({
  className,
  link = false,
  color = "normal",
  children,
  ...props
}: PopupItemProps) {
  return (
    <li
      data-slot="popup-item"
      className={cn(
        "flex w-full cursor-pointer items-center px-4 py-2",
        "text-base leading-none transition-shadow",
        "active:shadow-[var(--shadow-neu-concave)]",
        color === "normal" && "text-muted-foreground",
        color === "danger" && "text-destructive",
        className,
      )}
      {...props}
    >
      {children}
      {link && <ExternalLinkIcon className="ml-1 size-4 text-primary" />}
    </li>
  );
}

export { Popup, PopupTrigger, PopupContent, PopupItem };
