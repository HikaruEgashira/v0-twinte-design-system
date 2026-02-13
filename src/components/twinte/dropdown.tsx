"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import type * as React from "react";

interface DropdownProps {
  value?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

function Dropdown({ value, onValueChange, disabled, children }: DropdownProps) {
  return (
    <SelectPrimitive.Root
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
    >
      {children}
    </SelectPrimitive.Root>
  );
}

function DropdownLabel({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dropdown-label"
      className={cn(
        "mb-1 block select-none font-medium text-foreground text-sm leading-5",
        className,
      )}
      {...props}
    />
  );
}

function DropdownTrigger({
  className,
  placeholder = "指定なし",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  placeholder?: string;
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="dropdown-trigger"
      className={cn(
        "flex w-full cursor-pointer items-center justify-between rounded-md px-2 py-2",
        "bg-background text-foreground text-sm leading-5",
        "shadow-[var(--shadow-neu-input)]",
        "transition-shadow focus:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-20",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.Value placeholder={placeholder}>
        {children}
      </SelectPrimitive.Value>
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 text-muted-foreground transition-transform" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function DropdownContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="dropdown-content"
        position="popper"
        sideOffset={6}
        className={cn(
          "z-10 w-[var(--radix-select-trigger-width)] rounded-md py-1",
          "bg-background shadow-[var(--shadow-neu-convex)]",
          "data-[state=closed]:animate-out data-[state=open]:animate-in",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[side=bottom]:slide-in-from-top-2",
          className,
        )}
        {...props}
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function DropdownItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="dropdown-item"
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center px-3 py-2",
        "font-medium text-foreground text-sm",
        "bg-background transition-shadow",
        "active:shadow-[var(--shadow-neu-concave)]",
        "focus:bg-accent focus:outline-none",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span className="absolute right-2 flex size-4 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

export {
  Dropdown,
  DropdownLabel,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
};
