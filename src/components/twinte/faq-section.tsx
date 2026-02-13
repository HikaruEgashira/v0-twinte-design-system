"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

interface FaqSectionProps {
  className?: string;
}

interface FaqItemProps {
  question: string;
  answer: string;
  children?: React.ReactNode;
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h1 className="mb-16 flex flex-col items-center font-bold text-xl after:mt-2.5 after:h-[0.3125rem] after:w-6 after:bg-[image:var(--gradient-primary)] after:content-['']">
      {title}
    </h1>
  );
}

function FaqItem({ question, answer, children }: FaqItemProps) {
  return (
    <section className="rounded-xl bg-background p-5 px-8 pb-6">
      <div className="mb-2.5 font-medium text-base leading-relaxed">
        <span className="mr-2 bg-[image:var(--gradient-primary)] bg-clip-text font-bold text-transparent">
          Q.
        </span>
        {question}
      </div>
      <div className="mb-2.5 font-medium text-base leading-relaxed">
        <span className="mr-2 font-bold text-amber-400">A.</span>
        {answer}
      </div>
      {children && (
        <div className="text-muted-foreground text-sm leading-relaxed">
          {children}
        </div>
      )}
    </section>
  );
}

function FaqSection({ className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className={cn(
        "bg-[image:var(--gradient-primary)] bg-center bg-cover",
        "px-5 py-20 md:px-16 lg:px-0 lg:py-20",
        className,
      )}
    >
      <SectionTitle title="Q&A" />

      <div className="mb-8 lg:mx-auto lg:w-[56.25rem]">
        <FaqItem
          question="このサービスは大学公式のものですか？"
          answer="いいえ。筑波大学生の有志によるものです。"
        >
          筑波大学生によって構成されたグループ（Twin:te）が、日常の不便を解消するために製作したサービスです。
          <br />
          主な構成員は
          <a href="#member" className="text-blue-500 no-underline">
            主メンバー
          </a>
          をご覧ください。
        </FaqItem>
      </div>

      <div className="mb-8 lg:mx-auto lg:w-[56.25rem]">
        <FaqItem
          question="Twin:teが保存するデータは何ですか？"
          answer="ユーザーの所有する端末間で情報を共有するためのデータのみを保存しています。"
        >
          複数端末で時間割情報を共有するため、
          Twin:teはユーザーがTwin:teのログインに利用した外部アカウントと、保存した時間割の情報（メモ・出席欠席遅刻回数・変更した教室情報等を含む）
          を結び付けて保存します。
          <br />
          この情報はログインしたユーザーのみが見ることができる物であり、他のユーザーには共有されません。
          <br />
          なお、Twin:teはログインに利用した外部アカウントのパスワードや、学籍番号等の情報は一切保存しておりません。
          詳細は
          <a href="/terms" className="text-blue-500 no-underline">
            利用規約
          </a>
          をご覧ください。
        </FaqItem>
      </div>

      <div className="mb-8 lg:mx-auto lg:w-[56.25rem]">
        <FaqItem question="利用は無料ですか？" answer="利用は完全無料です。">
          また、広告もございません。 なお、
          <a
            href="https://app.twinte.net/sponsorship"
            className="text-blue-500 no-underline"
          >
            こちら
          </a>
          にて寄付を受け付けております。
          これまでの寄付金総額や寄付にご協力いただいた方々は
          <a
            href="https://app.twinte.net/sponsorship/sponsors-list"
            className="text-blue-500 no-underline"
          >
            こちら
          </a>
          のページに掲載しています。
        </FaqItem>
      </div>

      <div className="mb-8 lg:mx-auto lg:w-[56.25rem]">
        <FaqItem
          question="TWINSの履修情報を自動で読み込めますか？"
          answer="はい。Twin:teのサーバーがユーザーの情報を取得することなく、TWINSの情報を読み込めます。"
        >
          ユーザーが自分でTWINSにログインしたあと、「Twin:teにインポート」ボタンを押すことで利用できます。
          <br />
          ユーザーが自分でTWINSにログインをするので、Twin:teはユーザーの学籍番号・パスワードを取得することはございません。
          <br />
          この機能はiOS・Android版Twin:teのみで利用できます。
          この機能に不安を覚える場合は他の時間割登録方法をご利用いただけます。
        </FaqItem>
      </div>
    </section>
  );
}

export { FaqSection, FaqItem, SectionTitle };
export type { FaqSectionProps, FaqItemProps };
