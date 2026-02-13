"use client";

import { Card } from "@/components/twinte/card";
import { DecoratedIcon } from "@/components/twinte/decorated-icon";
import { IconButton } from "@/components/twinte/icon-button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type * as React from "react";

interface CardAddProps {
  icon: React.ReactNode;
  heading: string;
  text: string;
  width?: string;
  className?: string;
  onClickNext?: (e: React.MouseEvent) => void;
}

function CardAdd({
  icon,
  heading,
  text,
  width = "100%",
  className,
  onClickNext,
}: CardAddProps) {
  return (
    <Card width={width} className={className}>
      <div
        className="grid items-center text-left"
        style={{
          gridTemplate:
            '"icon . heading . button" auto "icon . . . button" 0.5rem "icon . text . button" auto / auto 1.25rem 1fr 1.25rem auto',
        }}
      >
        <div className="flex items-center justify-center [grid-area:icon]">
          <DecoratedIcon icon={icon} />
        </div>
        <div className="font-medium text-foreground text-sm leading-tight [grid-area:heading]">
          {heading}
        </div>
        <div className="text-muted-foreground text-xs leading-tight [grid-area:text]">
          {text}
        </div>
        <div className="flex items-center justify-center [grid-area:button]">
          <IconButton
            size="medium"
            color="normal"
            icon={<ArrowRight className="h-5 w-5" />}
            onClick={onClickNext}
          />
        </div>
      </div>
    </Card>
  );
}

export { CardAdd };
export type { CardAddProps };
