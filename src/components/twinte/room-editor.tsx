"use client";

import { CheckContent } from "@/components/twinte/check-content";
import { Label } from "@/components/twinte/label";
import { TertiaryButton } from "@/components/twinte/tertiary-button";
import { TextField } from "@/components/twinte/text-field";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import * as React from "react";

interface RoomSchedule {
  module: string;
  day: string;
  period: number;
}

interface Room {
  name: string;
  schedules: RoomSchedule[];
}

interface ScheduleLabel {
  label: string;
  checked: boolean;
}

interface RoomEditorProps {
  rooms: Room[];
  schedules: RoomSchedule[];
  placeholder: string;
  label?: string;
  mandatory?: boolean;
  size?: "normal" | "slim";
  className?: string;
  onUpdateRooms?: (rooms: Room[]) => void;
  formatSchedule?: (schedule: RoomSchedule) => string;
  isEqualSchedule?: (a: RoomSchedule, b: RoomSchedule) => boolean;
}

function defaultFormatSchedule(s: RoomSchedule): string {
  return `${s.module} ${s.day} ${s.period}`;
}

function defaultIsEqual(a: RoomSchedule, b: RoomSchedule): boolean {
  return a.module === b.module && a.day === b.day && a.period === b.period;
}

function RoomEditor({
  rooms,
  schedules,
  placeholder,
  label = "",
  mandatory = false,
  size = "normal",
  className,
  onUpdateRooms,
  formatSchedule = defaultFormatSchedule,
  isEqualSchedule = defaultIsEqual,
}: RoomEditorProps) {
  const data = rooms.map((room) => {
    const contents: ScheduleLabel[] = schedules.map((schedule) => ({
      label: formatSchedule(schedule),
      checked: room.schedules.some((target) =>
        isEqualSchedule(target, schedule),
      ),
    }));
    return { name: room.name, contents };
  });

  const addRoom = () => {
    onUpdateRooms?.([...rooms, { name: "", schedules: [] }]);
  };

  const updateName = (i: number, v: string) => {
    const newRooms = [...rooms];
    newRooms.splice(i, 1, { ...rooms[i], name: v });
    onUpdateRooms?.(newRooms);
  };

  const updateChecked = (i: number, j: number, checked: boolean) => {
    const targetRoom = rooms[i];
    const targetSchedule = schedules[j];
    const k = targetRoom.schedules.findIndex((s) =>
      isEqualSchedule(s, targetSchedule),
    );
    const newRooms = [...rooms];

    if (checked && k === -1) {
      newRooms.splice(i, 1, {
        name: targetRoom.name,
        schedules: [...targetRoom.schedules, targetSchedule],
      });
      onUpdateRooms?.(newRooms);
    } else if (!checked && k !== -1) {
      newRooms.splice(i, 1, {
        name: targetRoom.name,
        schedules: targetRoom.schedules.filter((_, l) => l !== k),
      });
      onUpdateRooms?.(newRooms);
    }
  };

  const deleteRoom = (i: number) => {
    const newRooms = [...rooms];
    newRooms.splice(i, 1);
    onUpdateRooms?.(newRooms);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      {label !== "" && (
        <Label value={label} mandatory={mandatory} size={size} />
      )}
      <div className="grid gap-8">
        {data.map(({ name, contents }, i) => (
          <div key={name} className="grid gap-3">
            <TextField
              value={name}
              placeholder={placeholder}
              added
              onChange={(e) => updateName(i, e.target.value)}
              onClose={() => deleteRoom(i)}
            />
            <div className="grid gap-5">
              {contents.map((content, j) => (
                <CheckContent
                  key={content.label}
                  checked={content.checked}
                  onCheckedChange={(checked) => updateChecked(i, j, !!checked)}
                >
                  {content.label}
                </CheckContent>
              ))}
            </div>
          </div>
        ))}
      </div>
      <TertiaryButton
        color="ghost"
        iconPosition="left"
        icon={<Plus className="h-4 w-4" />}
        onClick={addRoom}
      >
        追加する
      </TertiaryButton>
    </div>
  );
}

export { RoomEditor };
export type { RoomEditorProps, Room, RoomSchedule };
