"use client";

import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import * as React from "react";

interface InputButtonFileProps {
  name: string;
  accept?: string;
  onChangeFile?: (file: File | undefined) => void;
  className?: string;
  children?: React.ReactNode;
}

function InputButtonFile({
  name,
  accept = "",
  onChangeFile,
  className,
  children,
}: InputButtonFileProps) {
  const [fileName, setFileName] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    setFileName(file?.name ?? "");
    onChangeFile?.(file);
  };

  const resetFileSelect = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={cn("flex w-full items-center", className)}>
      {fileName ? (
        <div className="flex items-center truncate text-foreground text-sm leading-7">
          <FileText className="mr-2 h-4 w-4 shrink-0" />
          {fileName}
        </div>
      ) : (
        <div className="text-muted-foreground text-sm leading-7">未選択</div>
      )}
      <label
        htmlFor={name}
        className={cn(
          "ml-auto inline-flex h-7 items-center justify-center px-4 leading-7",
          "whitespace-nowrap rounded-full bg-background text-muted-foreground text-sm",
          "cursor-pointer shadow-neu-convex transition-shadow",
          "hover:shadow-neu-base active:text-white active:shadow-neu-primary-concave",
        )}
      >
        {children}
        <input
          ref={inputRef}
          id={name}
          type="file"
          name={name}
          accept={accept}
          className="hidden"
          onClick={resetFileSelect}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export { InputButtonFile };
export type { InputButtonFileProps };
