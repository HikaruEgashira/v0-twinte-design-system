"use client";

import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import type * as React from "react";

type ModalSize = "small" | "large";

interface ModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  size?: ModalSize;
  className?: string;
  children: React.ReactNode;
}

function Modal({
  open,
  onOpenChange,
  size = "large",
  className,
  children,
}: ModalProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

function ModalTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      data-slot="modal-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

function ModalContent({
  className,
  size = "large",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  size?: ModalSize;
}) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        data-slot="modal-overlay"
        className="data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 fixed inset-0 z-[99] bg-black/40 data-[state=closed]:animate-out data-[state=open]:animate-in"
      />
      <DialogPrimitive.Content
        data-slot="modal-content"
        className={cn(
          "-translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-[100]",
          "flex flex-col rounded-xl p-6 pt-8 text-left",
          "bg-[image:var(--gradient-base)] text-foreground",
          "shadow-[var(--shadow-neu-base)]",
          "data-[state=closed]:animate-out data-[state=open]:animate-in",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
          size === "large" && "h-[56rem] w-[34rem] md:h-[50rem] md:w-[40rem]",
          size === "small" && "h-[40rem] w-[34rem] md:h-[30rem] md:w-[40rem]",
          className,
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          data-slot="modal-close"
          className="absolute top-4 right-4 cursor-pointer text-muted-foreground transition-opacity hover:opacity-70"
        >
          <XIcon className="size-5" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function ModalTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="modal-title"
      className={cn(
        "mb-4 font-bold text-foreground text-lg leading-tight",
        className,
      )}
      {...props}
    />
  );
}

function ModalDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="modal-description"
      className={cn(
        "flex-1 overflow-y-auto text-muted-foreground text-sm",
        className,
      )}
      {...props}
    />
  );
}

function ModalFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="modal-footer"
      className={cn("mt-4 flex shrink-0 flex-row gap-2", className)}
      {...props}
    />
  );
}

export {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalDescription,
  ModalFooter,
};
