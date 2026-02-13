"use client";

import { cn } from "@/lib/utils";
import { Github, Link, Twitter } from "lucide-react";
import * as React from "react";

interface TeamMemberProps {
  className?: string;
}

interface MemberCardProps {
  name: string;
  imageSrc: string;
  description: string;
  link?: { text: string; href: string };
  iconLinks?: { github?: string; twitter?: string };
  className?: string;
}

type Member = {
  name: string;
  imagePath: string;
  description: string;
  isActive: boolean;
  links: {
    githubId?: string;
    twitterId?: string;
    website?: { label: string; url: string };
  };
};

const members: Member[] = [
  {
    isActive: true,
    name: "Arata",
    imagePath: "arata",
    description: "代表。情報科学類所属。主にインフラを担当。",
    links: {},
  },
  {
    isActive: true,
    name: "Takayuki Ueno (kichi2004)",
    imagePath: "kichi2004",
    description: "副代表。情報科学類所属。主にフロントエンドを担当。",
    links: {
      website: { label: "kichi2004.jp", url: "https://kichi2004.jp/" },
      githubId: "kichi2004",
      twitterId: "kichi2004_",
    },
  },
  {
    isActive: true,
    name: "raspi0124",
    imagePath: "raspi0124",
    description: "知識情報・図書館学類所属。",
    links: {
      website: { label: "raspi0124.dev", url: "https://raspi0124.dev/" },
      githubId: "raspi0124",
      twitterId: "raspi0124",
    },
  },
  {
    isActive: true,
    name: "Ryoga",
    imagePath: "ryoga",
    description: "",
    links: {
      website: { label: "ryoga.dev", url: "https://ryoga.dev" },
      githubId: "Ryoga-exe",
      twitterId: "Ryoga_exe",
    },
  },
  {
    isActive: true,
    name: "ao_ringo",
    imagePath: "ao_ringo",
    description: "",
    links: { twitterId: "ao_ringo_uni" },
  },
  {
    isActive: true,
    name: "zobio",
    imagePath: "zobio",
    description: "",
    links: {},
  },
  {
    isActive: true,
    name: "fami",
    imagePath: "fami",
    description: "",
    links: {},
  },
  {
    isActive: true,
    name: "PocoPota",
    imagePath: "pocopota",
    description: "",
    links: {
      website: { label: "pocopota.com", url: "https://pocopota.com/" },
      twitterId: "PocoPota_io",
      githubId: "PocoPota",
    },
  },
  {
    isActive: true,
    name: "appare45",
    imagePath: "appare",
    description: "",
    links: { twitterId: "appare45", githubId: "appare45" },
  },
  {
    isActive: true,
    name: "Sudy",
    imagePath: "sudy",
    description: "情報科学類所属。",
    links: {
      website: {
        label: "sudy-super.github.io",
        url: "https://sudy-super.github.io/index.html",
      },
      twitterId: "sudy_super",
      githubId: "sudy-super",
    },
  },
  {
    isActive: true,
    name: "Jyagapotato",
    imagePath: "jyagapotato",
    description: "工学システム学類所属。",
    links: {},
  },
];

function MemberCard({
  name,
  imageSrc,
  description,
  link,
  iconLinks,
  className,
}: MemberCardProps) {
  return (
    <section
      className={cn(
        "box-border rounded-xl bg-[image:var(--gradient-base)] p-6 shadow-neu-base",
        "w-full text-left",
        "grid grid-cols-[104px_28px_1fr] grid-rows-[auto_8px_auto_4px_auto_12px_auto]",
        "md:w-[220px] md:grid-cols-[1fr] md:grid-rows-[120px_28px_auto_8px_66px_16px_22px_12px_30px] md:text-center",
        className,
      )}
    >
      <div className="row-span-full flex h-[104px] w-[104px] items-center justify-center md:row-span-1 md:mx-auto md:h-[120px] md:w-[120px]">
        <img
          src={imageSrc}
          alt={`${name}のアイコン`}
          className="w-full rounded-full"
        />
      </div>
      <div className="col-start-3 self-center font-bold text-base leading-relaxed md:col-start-1 md:row-start-3">
        {name}
      </div>
      <div className="col-start-3 row-start-3 text-sm leading-relaxed md:col-start-1 md:row-start-5">
        {description}
      </div>
      {link?.href && (
        <a
          href={link.href}
          className="col-start-3 row-start-5 flex cursor-pointer items-center text-muted-foreground no-underline md:col-start-1 md:row-start-7 md:justify-center"
        >
          <Link className="mr-1 size-5" />
          {link.text}
        </a>
      )}
      <div className="col-start-3 row-start-7 flex gap-5 md:col-start-1 md:row-start-9 md:justify-center">
        {iconLinks?.twitter && (
          <a href={iconLinks.twitter} className="w-[30px]">
            <Twitter className="size-[30px] text-muted-foreground" />
          </a>
        )}
        {iconLinks?.github && (
          <a href={iconLinks.github} className="w-[30px]">
            <Github className="size-[30px] text-muted-foreground" />
          </a>
        )}
      </div>
    </section>
  );
}

function TeamMember({ className }: TeamMemberProps) {
  const activeMembers = members.filter((m) => m.isActive);

  return (
    <section
      id="member"
      className={cn(
        "px-5 py-20 md:px-16 lg:px-0 lg:py-20 lg:pb-[3.5rem]",
        className,
      )}
    >
      <h1 className="mb-16 flex flex-col items-center font-bold text-xl after:mt-2.5 after:h-[0.3125rem] after:w-6 after:bg-[image:var(--gradient-primary)] after:content-['']">
        主メンバー
      </h1>
      <div className="md:mx-auto md:w-[calc(220px*2+16px*3)] lg:w-[calc(220px*4+16px*3)]">
        <div className="grid grid-flow-row gap-4 md:grid-cols-[repeat(auto-fit,22rem)] lg:grid-cols-[repeat(auto-fit,22rem)]">
          {activeMembers.map((member) => (
            <MemberCard
              key={member.name}
              name={member.name}
              imageSrc="/placeholder.svg"
              description={member.description}
              link={
                member.links.website
                  ? {
                      text: member.links.website.label,
                      href: member.links.website.url,
                    }
                  : undefined
              }
              iconLinks={{
                github: member.links.githubId
                  ? `https://github.com/${member.links.githubId}`
                  : undefined,
                twitter: member.links.twitterId
                  ? `https://x.com/${member.links.twitterId}`
                  : undefined,
              }}
            />
          ))}
        </div>
        <div className="mt-4 mr-4 text-right">
          <a href="/othermember" className="text-blue-500 no-underline">
            OB / OG &gt;
          </a>
        </div>
      </div>
    </section>
  );
}

export { TeamMember, MemberCard };
export type { TeamMemberProps, MemberCardProps };
