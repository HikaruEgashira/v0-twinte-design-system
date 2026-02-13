import { Calendar } from "lucide-react";

export function RegistryLogo() {
  return (
    <>
      <div className="flex-shrink-0 rounded-md bg-primary p-1">
        <Calendar className="size-5 text-primary-foreground" />
      </div>
      <span className="font-semibold">Twin:te Design System</span>
    </>
  );
}
