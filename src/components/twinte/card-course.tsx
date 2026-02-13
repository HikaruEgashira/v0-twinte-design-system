"use client";

import { Button } from "@/components/twinte/button";
import { Checkbox } from "@/components/twinte/checkbox";
import { cn } from "@/lib/utils";
import {
  Calendar,
  ChevronDown,
  CreditCard,
  Layers,
  MapPin,
  User,
} from "lucide-react";
import type * as React from "react";

interface DisplayCourse {
  code: string;
  name: string;
  year: number;
  credit: string;
  instructor: string;
  room: string;
  method: string;
  overview: string;
  schedule: { full: string };
}

interface CourseDetailMiniProps {
  icon: React.ReactNode;
  text: string;
}

function CourseDetailMini({ icon, text }: CourseDetailMiniProps) {
  return (
    <div className="inline-flex items-center gap-1 text-muted-foreground text-xs">
      {icon}
      <span className="truncate">{text}</span>
    </div>
  );
}

interface CardCourseProps {
  isChecked: boolean;
  isDetailed?: boolean;
  isExpanded?: boolean;
  course: DisplayCourse;
  width?: string;
  withHr?: boolean;
  className?: string;
  onClickCard?: (e: React.MouseEvent) => void;
  onClickCheckbox?: (e: React.MouseEvent) => void;
  onOpenSyllabus?: () => void;
}

function CardCourse({
  isChecked,
  isDetailed = true,
  isExpanded = false,
  course,
  width = "100%",
  withHr = true,
  className,
  onClickCard,
  onClickCheckbox,
  onOpenSyllabus,
}: CardCourseProps) {
  return (
    <div
      style={{ width }}
      onClick={onClickCard}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          onClickCard?.(e as unknown as React.MouseEvent);
      }}
      className={className}
    >
      <div
        className="grid gap-x-3 text-left"
        style={{ gridTemplateColumns: "auto 1.25rem 1fr auto" }}
      >
        {/* Checkbox */}
        <div
          className="row-span-full flex items-center pl-2"
          onClick={(e) => {
            e.stopPropagation();
            onClickCheckbox?.(e);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
              onClickCheckbox?.(e as unknown as React.MouseEvent);
            }
          }}
        >
          <Checkbox checked={isChecked} onCheckedChange={() => {}} />
        </div>

        {/* Course ID */}
        <div className="col-start-3 text-muted-foreground text-xs leading-tight">
          {course.code}
        </div>

        {/* Course Name */}
        <div className="col-start-3 mt-0.5 truncate font-medium text-foreground text-sm">
          {course.name}
        </div>

        {/* Detail section */}
        {(isExpanded || isDetailed) && (
          <div className="col-start-3 mt-1 flex flex-wrap gap-x-2 gap-y-0.5">
            <CourseDetailMini
              icon={<Calendar className="h-3 w-3" />}
              text={course.schedule.full}
            />
            <CourseDetailMini
              icon={<CreditCard className="h-3 w-3" />}
              text={course.credit}
            />
            <CourseDetailMini
              icon={<User className="h-3 w-3" />}
              text={course.instructor}
            />
            <CourseDetailMini
              icon={<MapPin className="h-3 w-3" />}
              text={course.room}
            />
            <CourseDetailMini
              icon={<Layers className="h-3 w-3" />}
              text={course.method}
            />
          </div>
        )}

        {/* Overview */}
        {(isDetailed || isExpanded) && (
          <div
            className={cn(
              "col-start-3 mt-1 text-muted-foreground text-xs leading-relaxed",
              isDetailed && !isExpanded && "truncate",
              isExpanded && "whitespace-normal",
            )}
          >
            {course.overview}
          </div>
        )}

        {/* Expand icon (mobile) */}
        {!isExpanded && (
          <div className="col-start-4 row-start-2 flex cursor-pointer items-end pb-1 lg:hidden">
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        )}

        {/* Syllabus button */}
        {isExpanded && (
          <div className="col-start-3 mt-2 flex items-center">
            <Button
              size="small"
              layout="flexible"
              color="base"
              onClick={onOpenSyllabus}
            >
              シラバス
            </Button>
          </div>
        )}
      </div>

      {withHr && (
        <div className="mt-3 h-1 w-full rounded-sm bg-background shadow-[var(--shadow-neu-input)]" />
      )}
    </div>
  );
}

export { CardCourse };
export type { CardCourseProps, DisplayCourse };
