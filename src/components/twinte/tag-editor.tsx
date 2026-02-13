"use client";

import { IconButton } from "@/components/twinte/icon-button";
import { TextField } from "@/components/twinte/text-field";
import { cn } from "@/lib/utils";
import { Check, Plus, X } from "lucide-react";
import * as React from "react";

interface TagEditorProps {
  add: boolean;
  heading: string;
  onUpdateAdd?: (add: boolean) => void;
  onCreateTag?: (name: string) => void;
  tags?: React.ReactNode;
  addButtonLabel?: React.ReactNode;
  className?: string;
}

function TagEditor({
  add,
  heading,
  onUpdateAdd,
  onCreateTag,
  tags,
  addButtonLabel,
  className,
}: TagEditorProps) {
  const [tagName, setTagName] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const disabled = tagName === "";

  const handleClick = () => {
    setTagName("");
    onUpdateAdd?.(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleCheck = () => {
    if (disabled) return;
    onCreateTag?.(tagName);
    onUpdateAdd?.(false);
  };

  const handleClear = () => {
    onUpdateAdd?.(false);
  };

  return (
    <div className={cn("grid w-full gap-3 p-2", className)}>
      <p className="text-muted-foreground text-sm">{heading}</p>
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap gap-x-2 gap-y-3 text-muted-foreground text-sm leading-relaxed">
          {tags}
        </div>
        {add && (
          <div className="flex items-center gap-2">
            <TextField
              ref={inputRef}
              value={tagName}
              onChange={(e) => setTagName(e.target.value.trim())}
              placeholder="タグ名"
              onEnter={handleCheck}
              size="slim"
              className="flex-1"
            />
            <IconButton
              size="small"
              color="normal"
              state={disabled ? "disabled" : "default"}
              icon={<Check className="h-4 w-4" />}
              onClick={handleCheck}
            />
            <IconButton
              size="small"
              color="danger"
              icon={<X className="h-4 w-4" />}
              onClick={handleClear}
            />
          </div>
        )}
        {!add && (
          <button
            type="button"
            className="flex w-max cursor-pointer gap-1 px-1 py-2 text-muted-foreground text-sm"
            onClick={handleClick}
          >
            <Plus className="h-4 w-4" />
            <span className="font-medium">{addButtonLabel}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export { TagEditor };
export type { TagEditorProps };
