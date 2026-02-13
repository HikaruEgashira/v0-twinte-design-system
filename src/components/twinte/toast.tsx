"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import type { CSSProperties } from "react";
import { Toaster as SonnerToaster, type ToasterProps, toast } from "sonner";

type TwinteToastType = "primary" | "danger";

function showToast(message: string, type: TwinteToastType = "danger") {
  const baseClass =
    "!rounded-md !bg-[image:var(--gradient-base)] !shadow-[var(--shadow-neu-convex)]";

  if (type === "primary") {
    toast(message, {
      className: cn(baseClass, "!border-primary"),
      descriptionClassName: "!text-primary",
    });
  } else {
    toast(message, {
      className: cn(baseClass, "!border-destructive"),
      descriptionClassName: "!text-destructive",
    });
  }
}

function TwinteToaster({ className, ...props }: ToasterProps) {
  const { theme = "system" } = useTheme();

  return (
    <SonnerToaster
      theme={theme as ToasterProps["theme"]}
      className={cn("toaster group", className)}
      toastOptions={{
        classNames: {
          toast: cn(
            "!rounded-md !border !bg-[image:var(--gradient-base)]",
            "!shadow-[var(--shadow-neu-convex)] !text-foreground",
          ),
          closeButton: "!text-muted-foreground",
        },
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as CSSProperties
      }
      closeButton
      {...props}
    />
  );
}

export { showToast, TwinteToaster };
