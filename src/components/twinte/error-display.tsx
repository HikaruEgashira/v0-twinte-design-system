"use client";

import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import type * as React from "react";
import { IconButton } from "./icon-button";

interface ErrorDisplayProps extends React.HTMLAttributes<HTMLDivElement> {
  errorMessage: string;
  onReload?: () => void;
  ref?: React.Ref<HTMLDivElement>;
}

function ErrorDisplay({
  className,
  errorMessage,
  onReload,
  ref,
  ...props
}: ErrorDisplayProps) {
  const handleReload = () => {
    if (onReload) {
      onReload();
    } else {
      window.location.reload();
    }
  };

  return (
    <div ref={ref} className={cn("relative", className)} {...props}>
      <div className="flex items-center p-4">
        <IconButton
          size="large"
          color="normal"
          icon={<ArrowLeft />}
          onClick={handleReload}
        />
      </div>
      <div className="absolute inset-0 mx-auto flex w-4/5 flex-col items-center justify-center">
        <AlertCircle className="h-40 w-40 opacity-20" />
        <div className="mt-4 text-center opacity-70">{errorMessage}</div>
      </div>
    </div>
  );
}

export { ErrorDisplay };
export type { ErrorDisplayProps };
