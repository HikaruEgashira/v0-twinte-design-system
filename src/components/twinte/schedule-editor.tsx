"use client";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownTrigger,
} from "@/components/twinte/dropdown";
import { cn } from "@/lib/utils";
import { Plus, X } from "lucide-react";
import * as React from "react";

interface OptionItem {
  value: string;
  label: string;
}

interface EditableSchedule {
  module: OptionItem;
  day: OptionItem;
  period?: OptionItem;
}

interface ScheduleEditorProps {
  schedules: EditableSchedule[];
  moduleOptions: OptionItem[];
  dayOptions: OptionItem[];
  periodOptions: OptionItem[];
  notSpecified: OptionItem;
  isSpecialDay?: (day: OptionItem) => boolean;
  className?: string;
  onUpdateSchedule?: (index: number, schedule: EditableSchedule) => void;
  onClickAdd?: () => void;
  onClickRemove?: (index: number) => void;
}

function ScheduleEditor({
  schedules,
  moduleOptions,
  dayOptions,
  periodOptions,
  notSpecified,
  isSpecialDay = () => false,
  className,
  onUpdateSchedule,
  onClickAdd,
  onClickRemove,
}: ScheduleEditorProps) {
  const updateModule = (
    index: number,
    schedule: EditableSchedule,
    moduleValue: string,
  ) => {
    const mod =
      moduleOptions.find((m) => m.value === moduleValue) ?? schedule.module;
    onUpdateSchedule?.(index, { ...schedule, module: mod });
  };

  const updateDay = (
    index: number,
    schedule: EditableSchedule,
    dayValue: string,
  ) => {
    const day = dayOptions.find((d) => d.value === dayValue) ?? schedule.day;
    if (isSpecialDay(day)) {
      onUpdateSchedule?.(index, { module: schedule.module, day });
    } else {
      onUpdateSchedule?.(index, {
        ...schedule,
        day,
        period: schedule.period ?? notSpecified,
      });
    }
  };

  const updatePeriod = (
    index: number,
    schedule: EditableSchedule,
    periodValue: string,
  ) => {
    if ("period" in schedule) {
      const period =
        periodOptions.find((p) => p.value === periodValue) ?? notSpecified;
      onUpdateSchedule?.(index, { ...schedule, period });
    }
  };

  return (
    <div className={cn("", className)}>
      {schedules.map((schedule, index) => (
        <div
          key={`${schedule.module.value}-${schedule.day.value}-${schedule.period?.value ?? "none"}`}
          className={cn("flex items-center", index > 0 && "mt-5")}
        >
          <div className="grid w-[30rem] grid-cols-3 gap-2">
            <div>
              {index === 0 && <DropdownLabel>学期</DropdownLabel>}
              <Dropdown
                value={schedule.module.value}
                onValueChange={(v) => updateModule(index, schedule, v)}
              >
                <DropdownTrigger>{schedule.module.label}</DropdownTrigger>
                <DropdownContent>
                  {moduleOptions.map((opt) => (
                    <DropdownItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>
            <div>
              {index === 0 && <DropdownLabel>曜日</DropdownLabel>}
              <Dropdown
                value={schedule.day.value}
                onValueChange={(v) => updateDay(index, schedule, v)}
              >
                <DropdownTrigger>{schedule.day.label}</DropdownTrigger>
                <DropdownContent>
                  {dayOptions.map((opt) => (
                    <DropdownItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>
            <div>
              {index === 0 && <DropdownLabel>時限</DropdownLabel>}
              <Dropdown
                value={schedule.period?.value ?? notSpecified.value}
                onValueChange={(v) => updatePeriod(index, schedule, v)}
                disabled={isSpecialDay(schedule.day)}
              >
                <DropdownTrigger>
                  {schedule.period?.label ?? notSpecified.label}
                </DropdownTrigger>
                <DropdownContent>
                  {(isSpecialDay(schedule.day)
                    ? [notSpecified]
                    : periodOptions
                  ).map((opt) => (
                    <DropdownItem key={opt.value} value={opt.value}>
                      {opt.label}
                    </DropdownItem>
                  ))}
                </DropdownContent>
              </Dropdown>
            </div>
          </div>
          {index > 0 && (
            <button
              type="button"
              className="ml-2 cursor-pointer text-muted-foreground text-sm"
              onClick={() => onClickRemove?.(index)}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        className="mt-2 flex w-max cursor-pointer items-center gap-1 px-1 py-2 text-muted-foreground text-sm"
        onClick={onClickAdd}
      >
        <Plus className="h-4 w-4" />
        追加する
      </button>
    </div>
  );
}

export { ScheduleEditor };
export type { ScheduleEditorProps, EditableSchedule, OptionItem };
