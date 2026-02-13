"use client";

import { Label } from "@/components/twinte/label";
import { TertiaryButton } from "@/components/twinte/tertiary-button";
import { TextField } from "@/components/twinte/text-field";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import * as React from "react";

interface MultiTextFieldEditorProps {
  elements: string[];
  placeholder?: string;
  label?: string;
  mandatory?: boolean;
  size?: "normal" | "slim";
  className?: string;
  onUpdateElements?: (elements: string[]) => void;
}

function MultiTextFieldEditor({
  elements,
  placeholder = "",
  label = "",
  mandatory = false,
  size = "normal",
  className,
  onUpdateElements,
}: MultiTextFieldEditorProps) {
  const nextId = React.useRef(0);
  const keysRef = React.useRef<number[]>([]);

  // Sync keys with elements length
  while (keysRef.current.length < elements.length) {
    keysRef.current.push(nextId.current++);
  }
  if (keysRef.current.length > elements.length) {
    keysRef.current = keysRef.current.slice(0, elements.length);
  }

  const addElement = () => {
    onUpdateElements?.([...elements, ""]);
  };

  const updateElement = (i: number, v: string) => {
    const newElements = [...elements];
    newElements.splice(i, 1, v.trim());
    onUpdateElements?.(newElements);
  };

  const deleteElement = (i: number) => {
    const newElements = [...elements];
    newElements.splice(i, 1);
    keysRef.current.splice(i, 1);
    onUpdateElements?.(newElements);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      {label !== "" && (
        <Label value={label} mandatory={mandatory} size={size} />
      )}
      {elements.map((el, i) => (
        <TextField
          key={keysRef.current[i]}
          value={el}
          placeholder={placeholder}
          added
          onChange={(e) => updateElement(i, e.target.value)}
          onClose={() => deleteElement(i)}
        />
      ))}
      <TertiaryButton
        color="ghost"
        iconPosition="left"
        icon={<Plus className="h-4 w-4" />}
        onClick={addElement}
      >
        追加する
      </TertiaryButton>
    </div>
  );
}

export { MultiTextFieldEditor };
export type { MultiTextFieldEditorProps };
