"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  ref?: React.Ref<HTMLDivElement>;
}

function Loader({ className, size = 20, ref, ...props }: LoaderProps) {
  const dotSize = size / 8;
  const r1 = (size / 8) * 3;
  const r2 = (size / 8) * 2;

  const keyframes = `
    @keyframes twinte-loader {
      0%, 100% { box-shadow: ${generateBoxShadow(0, r1, r2, dotSize)}; }
      12.5%    { box-shadow: ${generateBoxShadow(1, r1, r2, dotSize)}; }
      25%      { box-shadow: ${generateBoxShadow(2, r1, r2, dotSize)}; }
      37.5%    { box-shadow: ${generateBoxShadow(3, r1, r2, dotSize)}; }
      50%      { box-shadow: ${generateBoxShadow(4, r1, r2, dotSize)}; }
      62.5%    { box-shadow: ${generateBoxShadow(5, r1, r2, dotSize)}; }
      75%      { box-shadow: ${generateBoxShadow(6, r1, r2, dotSize)}; }
      87.5%    { box-shadow: ${generateBoxShadow(7, r1, r2, dotSize)}; }
    }
  `;

  const styleId = "twinte-loader-style";

  React.useEffect(() => {
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = keyframes;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, [keyframes]);

  return (
    <div
      ref={ref}
      className={cn("rounded-full text-foreground", className)}
      style={{
        width: dotSize,
        height: dotSize,
        margin: r1,
        animation: "twinte-loader 1.3s infinite linear",
        transform: "translateZ(0)",
      }}
      {...props}
    />
  );
}

function generateBoxShadow(
  shift: number,
  r1: number,
  r2: number,
  dotSize: number,
): string {
  const positions = [
    [0, -r1],
    [r2, -r2],
    [r1, 0],
    [r2, r2],
    [0, r1],
    [-r2, r2],
    [-r1, 0],
    [-r2, -r2],
  ];

  const spreadBase = dotSize * 0.2;
  const spreads = [
    spreadBase * 3,
    0,
    -dotSize,
    -dotSize,
    -dotSize,
    -dotSize,
    -dotSize,
    0,
  ];

  return positions
    .map(([x, y], i) => {
      const j = (i - shift + 8) % 8;
      return `${x}px ${y}px 0 ${spreads[j]}px currentColor`;
    })
    .join(", ");
}

export { Loader };
export type { LoaderProps };
