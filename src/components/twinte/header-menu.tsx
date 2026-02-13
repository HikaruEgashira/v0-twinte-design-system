"use client";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import * as React from "react";

interface HeaderMenuProps {
  inTop?: boolean;
  className?: string;
}

const navItems = [
  { label: "Twin:te", href: "#twin-te" },
  { label: "Q&A", href: "#faq" },
  { label: "主メンバー", href: "#member" },
  { label: "リンク", href: "#link" },
  { label: "Twin:teに参加", href: "./recruit" },
];

function HeaderMenu({ inTop = false, className }: HeaderMenuProps) {
  const [opened, setOpened] = React.useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-10 min-h-[5.125rem] w-full",
        !inTop && !opened && "bg-background/85 backdrop-blur-[8px]",
        inTop && !opened && "absolute bg-transparent backdrop-blur-none",
        opened &&
          "flex flex-col items-center bg-background/85 backdrop-blur-[8px]",
        "lg:flex lg:justify-end",
        className,
      )}
    >
      {navItems.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          className={cn(
            "h-8 cursor-pointer leading-8 no-underline",
            inTop && !opened ? "text-white" : "text-muted-foreground",
            // PC layout
            "hidden lg:mt-[2.625rem] lg:inline-block",
            i > 0 && "lg:ml-9",
            i === 4 && "lg:mr-[4.625rem]",
            // Mobile opened
            opened && "!flex items-center justify-center",
            opened && i === 0 && "mt-[7.25rem]",
            opened && i > 0 && "mt-8",
            opened && i === 4 && "mb-8",
          )}
        >
          {item.label}
        </a>
      ))}
      <button
        type="button"
        onClick={() => setOpened(!opened)}
        className={cn(
          "absolute top-5 right-8 cursor-pointer text-4xl lg:hidden",
          inTop && !opened ? "text-white" : "text-muted-foreground",
        )}
        aria-label={opened ? "メニューを閉じる" : "メニューを開く"}
      >
        {opened ? <X className="size-10" /> : <Menu className="size-10" />}
      </button>
    </div>
  );
}

export { HeaderMenu };
export type { HeaderMenuProps };
