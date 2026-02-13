"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface HeroSectionProps {
  className?: string;
}

function HeroSection({ className }: HeroSectionProps) {
  return (
    <div
      id="twin-te"
      className={cn(
        "relative w-full bg-[image:var(--gradient-primary)] bg-center bg-cover",
        "h-screen lg:h-[50vw]",
        "md:h-[140vw] md:max-h-[900px]",
        className,
      )}
    >
      {/* Hero image */}
      <img
        src="/placeholder.svg"
        alt="Twin:teの画像"
        className={cn(
          "w-full md:w-full md:max-w-[650px]",
          "lg:absolute lg:top-0 lg:left-0 lg:w-[55vw]",
          "max-md:w-[57rem] max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:w-[57rem] max-lg:opacity-50",
        )}
      />

      {/* Logo and download links */}
      <div
        className={cn(
          "grid",
          "grid-cols-[1fr_1.6%_1fr]",
          "[grid-template-areas:'logo_logo_logo'_'._._.'_'apple_._google']",
          "lg:grid-rows-[auto_16%_auto_8%_20%] lg:[grid-template-areas:'logo_logo_logo'_'._._.'_'apple_._google'_'._._.'_'pc_pc_pc']",
          "lg:-translate-y-1/2 lg:absolute lg:top-1/2 lg:left-[55vw] lg:w-[22vw]",
          "md:absolute md:right-[7vw] md:bottom-[10.5vmax] md:w-[50vw] md:max-w-[325px]",
          "max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:w-[25.5rem]",
        )}
      >
        <img
          src="/placeholder.svg"
          alt="Twin:teのロゴ"
          className="h-auto w-full drop-shadow-[14.28px_14.28px_35.7px_rgba(54,184,176,0.25)] [grid-area:logo]"
        />
        <a
          href="https://apps.apple.com/jp/app/twin-te/id1489274755?mt=8"
          className="h-auto w-full cursor-pointer self-center [grid-area:apple]"
        >
          <img
            src="/placeholder.svg"
            alt="Apple Store からダウンロード"
            className="h-auto w-full"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=net.twinte.android"
          className="h-auto w-full cursor-pointer self-center [grid-area:google]"
        >
          <img
            src="/placeholder.svg"
            alt="Google Play からダウンロード"
            className="h-auto w-full"
          />
        </a>
        <a
          href="https://app.twinte.net/"
          className={cn(
            "hidden items-center justify-center [grid-area:pc] lg:flex",
            "mx-auto w-[70%] cursor-pointer rounded-[4rem] bg-white font-medium text-xl",
          )}
        >
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            PC版
          </span>
        </a>
      </div>
    </div>
  );
}

export { HeroSection };
export type { HeroSectionProps };
