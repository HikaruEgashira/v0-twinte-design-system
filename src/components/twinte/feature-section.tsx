"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface FeatureSectionProps {
  className?: string;
}

interface FeatureBlockProps {
  title: React.ReactNode;
  description: React.ReactNode;
  primary?: boolean;
}

function FeatureDescription({
  title,
  description,
  primary,
}: FeatureBlockProps) {
  return (
    <div className="box-border w-full px-8 pt-5 pb-11 md:px-12 lg:px-0">
      <p
        className={cn(
          "mb-5 font-bold text-xl leading-relaxed lg:mb-8 lg:text-2xl",
          primary &&
            "bg-[image:var(--gradient-primary)] bg-clip-text text-transparent",
        )}
      >
        {title}
      </p>
      <p className="text-inherit text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureSection({ className }: FeatureSectionProps) {
  return (
    <section className={cn("bg-background", className)}>
      {/* Feature 1: Main intro */}
      <div className="flex w-full flex-col-reverse items-center pt-24 lg:grid lg:h-[72.5rem] lg:grid-cols-[42.8rem_40rem] lg:justify-center lg:gap-[4.5rem] lg:pt-64 lg:pb-24">
        <section>
          <FeatureDescription
            primary
            title={
              <>
                筑波大学生による筑波大学生のための
                <br />
                時間割アプリ
              </>
            }
            description={
              <>
                Twin:te(ついんて)は筑波大学生による筑波大学生のための時間割アプリです。
                <br />
                数ステップでアプリにすべての時間割を登録することができるなど、筑波大学生専用アプリだからこその機能が満載。
                筑波大学生の半数に上るユーザーにご利用いただいています。
                <br />
                もちろん広告なんてものはありません。完全無料のアプリです。
              </>
            }
          />
          <img
            alt="マスコットキャラクター"
            src="/placeholder.svg"
            className="mt-5 ml-5 w-[264px] lg:w-[360px]"
          />
        </section>
        <section className="h-full w-full overflow-hidden lg:overflow-visible">
          <div className="relative mx-auto h-[350px] w-[250px] md:h-[550px] md:w-[420px] lg:h-full lg:w-full">
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="hidden lg:absolute lg:block lg:w-[383px]"
            />
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="hidden lg:absolute lg:right-0 lg:block lg:w-[282px]"
            />
          </div>
        </section>
        <img
          alt="スクリーンショット"
          src="/placeholder.svg"
          className="w-[300px] lg:hidden"
        />
      </div>

      {/* Feature 2: Timetable */}
      <div className="flex w-full flex-col items-center pb-[11.2rem] lg:z-20 lg:grid lg:h-[56.5rem] lg:grid-cols-[42.8rem_40rem] lg:justify-center lg:gap-[4.5rem] lg:pb-0">
        <section className="h-full w-full overflow-hidden lg:overflow-visible">
          <div className="relative mx-auto h-[350px] w-[250px] md:h-[550px] md:w-[420px] lg:h-full lg:w-full">
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="absolute top-[50px] left-0 w-[160px] shadow-neu-base md:w-[250px] lg:top-0 lg:w-[245px]"
            />
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="absolute top-[115px] right-0 w-[160px] shadow-neu-base md:top-[155px] md:w-[250px] lg:top-[104px] lg:w-[245px]"
            />
          </div>
        </section>
        <section>
          <FeatureDescription
            title={
              <>
                特殊授業や7,8限にも
                <br />
                対応した時間割
              </>
            }
            description={
              <>
                普段の授業はもちろん、他の時間割アプリでは管理の難しかった集中授業のような特殊授業も管理できます。
                <br />
                大学院生向けに、7,8限の授業も管理できます。
              </>
            }
          />
          <img
            alt="マスコットキャラクター"
            src="/placeholder.svg"
            className="absolute right-5 w-[124px] lg:static lg:mt-8 lg:ml-[277px] lg:w-[165px]"
          />
        </section>
      </div>

      {/* Feature 3: Search & Import */}
      <div className="flex w-full flex-col-reverse items-center overflow-hidden bg-[image:var(--gradient-primary)] bg-center bg-cover text-white lg:grid lg:h-[60.3rem] lg:grid-cols-[40rem_42.8rem] lg:justify-center lg:gap-[4.5rem]">
        <FeatureDescription
          title={
            <>
              選べる授業追加方法
              <br />
              仮組みにも最適
            </>
          }
          description={
            <>
              従来の時間割アプリと同様に手動で授業を追加できることはもちろん、TWINSからすべての時間割情報を安全にインポートすることが可能です。
              <br />
              また、強力な授業検索機能によって空きコマに入れられる授業を検索できたり、一時的に授業を重複して登録できたりと仮組みにも最適な設計になっています。
              <br />
              ※Twin:teがTWINSから安全に時間割をインポートする方法については
              <a
                href="https://twinte.hatenablog.com/entry/2019/12/20/200652"
                className="text-inherit underline"
              >
                こちら
              </a>
              をご確認ください。
            </>
          }
        />
        <section className="h-full w-full overflow-hidden lg:overflow-visible">
          <div className="relative mx-auto h-[350px] w-[250px] md:h-[550px] md:w-[420px] lg:h-full lg:w-full">
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="absolute top-[-10px] left-0 w-[145px] md:w-[230px] lg:top-0 lg:w-[245px]"
            />
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="absolute top-[20px] right-0 w-[145px] md:w-[230px] lg:top-[40px] lg:w-[245px]"
            />
            <img
              alt="スクリーンショット"
              src="/placeholder.svg"
              className="absolute bottom-0 left-0 w-[145px] md:w-[230px] lg:top-[253px] lg:bottom-auto lg:w-[245px]"
            />
          </div>
        </section>
      </div>

      {/* Feature 4: Course management */}
      <div className="flex w-full flex-col items-center bg-[image:var(--gradient-base)] lg:grid lg:h-[66.7rem] lg:grid-cols-[25.2rem_57.6rem] lg:items-start lg:justify-center lg:pt-[12.2rem]">
        <img
          alt="スクリーンショット"
          src="/placeholder.svg"
          className="relative hidden w-[252px] shadow-neu-base lg:block"
        />
        <div className="flex flex-col-reverse lg:grid lg:h-full lg:gap-[4.125rem]">
          <FeatureDescription
            title="履修中の授業をかんたんに管理"
            description={
              <>
                このアプリ1つで出欠の管理やメモの記録ができます。
                <br />
                さらに、授業のシラバスやresponに加えてマップをすぐに参照することができます。
                <br />
                授業追加の方法によっては授業場所や授業形式も自動的に追加されるので、KdBで授業詳細を調べる手間が省けます。
              </>
            }
          />
          <section className="h-full w-full overflow-hidden lg:overflow-visible">
            <div className="relative mx-auto h-[350px] w-[250px] md:h-[550px] md:w-[420px] lg:h-full lg:w-full">
              <img
                alt="スクリーンショット"
                src="/placeholder.svg"
                className="absolute bottom-0 left-0 hidden w-[252px] shadow-neu-base lg:block"
              />
              <img
                alt="スクリーンショット"
                src="/placeholder.svg"
                className="absolute right-1/2 bottom-0 w-[190px] translate-x-1/2 shadow-neu-base md:w-[260px] lg:right-0 lg:w-[252px] lg:translate-x-0"
              />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export { FeatureSection };
export type { FeatureSectionProps };
