"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

interface CtaSectionProps {
  className?: string;
}

function CtaSection({ className }: CtaSectionProps) {
  return (
    <div
      className={cn(
        "relative bg-[image:var(--gradient-primary)] bg-center bg-cover",
        "flex h-[19.2rem] items-center justify-center lg:h-[25.2rem]",
        className,
      )}
    >
      <div
        className={cn(
          "grid w-[29.4rem] lg:w-[35.9rem]",
          "grid-cols-[auto_0.583rem_auto] grid-rows-[auto_3.2rem_auto] [grid-template-areas:'text_text_text'_'._._.'_'apple_._google']",
          "lg:grid-rows-[auto_2rem_auto_1rem_auto] lg:[grid-template-areas:'text_text_text'_'._._.'_'apple_._google'_'._._.'_'pc_pc_pc']",
          "lg:-translate-y-1/2 lg:absolute lg:top-1/2 lg:right-[calc(50%+7rem)]",
        )}
      >
        <div className="ml-4 self-center justify-self-center font-bold text-[2.2rem] text-white leading-relaxed [grid-area:text] lg:justify-self-start lg:text-lg">
          Twin:teを今すぐ使う
        </div>
        <a
          href="https://apps.apple.com/jp/app/twin-te/id1489274755?mt=8"
          className="flex items-center justify-center [grid-area:apple] lg:w-[17.7rem]"
        >
          <img
            src="/placeholder.svg"
            alt="Apple Store からダウンロード"
            className="w-full"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=net.twinte.android"
          className="flex items-center justify-center [grid-area:google] lg:w-[17.6rem]"
        >
          <img
            src="/placeholder.svg"
            alt="Google Play からダウンロード"
            className="w-full"
          />
        </a>
        <a
          href="https://app.twinte.net/"
          className={cn(
            "hidden items-center justify-center [grid-area:pc] lg:flex",
            "mt-4 ml-5 h-[4.4rem] w-[22.6rem] rounded-[4.5rem] bg-white no-underline",
          )}
        >
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text font-medium text-transparent text-xl leading-relaxed">
            PC版
          </span>
        </a>
      </div>
      <img
        src="/placeholder.svg"
        alt=""
        className="absolute bottom-0 left-[calc(50%+3.3rem)] hidden w-[37.8rem] lg:block"
      />
    </div>
  );
}

export { CtaSection };
export type { CtaSectionProps };
