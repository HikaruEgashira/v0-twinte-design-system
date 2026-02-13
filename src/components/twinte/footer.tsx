"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface FooterProps {
  className?: string;
}

const footerLinks = [
  {
    label: "寄付者一覧",
    href: "https://app.twinte.net/sponsorship/sponsors-list",
  },
  { label: "プライバシーポリシー", href: "/policy" },
  { label: "利用規約", href: "/terms" },
  { label: "Twin:teに参加", href: "/recruit" },
  { label: "外部連携機能に関する規約", href: "/APIterms" },
];

function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "grid items-end bg-background",
        "px-8 py-9 pb-5",
        "grid-cols-[auto_2rem_auto_1fr] grid-rows-[auto_2.8rem_2rem_auto] [grid-template-areas:'links_links_links_links'_'._._._.'_'logo_._._.'_'logo_._email_.']",
        "md:grid-cols-[auto_2.4rem_auto_1fr] md:grid-rows-[auto_2.8rem_2rem_auto] md:px-9 md:[grid-template-areas:'links_links_links_links'_'._._._.'_'logo_._._.'_'logo_._email_.']",
        "lg:grid-cols-[auto_4.8rem_auto_4.8rem_auto_1fr] lg:grid-rows-[auto_auto] lg:px-0 lg:py-[1.125rem] lg:pl-[4.5rem] lg:[grid-template-areas:'logo_._._._._.'_'logo_._email_._links_.']",
        className,
      )}
    >
      <img
        src="/placeholder.svg"
        alt="Twin:teのロゴ"
        className="h-auto w-[11.9rem] [grid-area:logo]"
      />
      <a
        href="mailto:info@twinte.net"
        className="font-medium text-muted-foreground leading-[140%] no-underline [grid-area:email]"
      >
        email: info@twinte.net
      </a>
      <div className="grid items-end gap-5 font-normal [grid-area:links] max-md:gap-3 lg:grid-flow-col">
        {footerLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-normal text-muted-foreground leading-[140%] no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

export { Footer };
export type { FooterProps };
