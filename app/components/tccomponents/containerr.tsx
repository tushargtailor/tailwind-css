import { cn } from "@/app/lib/utils";
import React from "react";

export const Containerr = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("max-w-7xl mx-auto px-4 w-full relative z-10", className)}
    >
      {children}
    </div>
  );
};
