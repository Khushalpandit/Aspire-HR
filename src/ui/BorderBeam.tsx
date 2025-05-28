"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface BorderBeamProps extends React.HTMLProps<HTMLDivElement> {
  duration?: number;
  size?: number;
  reverse?: boolean;
}

export const BorderBeam = ({
  className,
  duration = 4,
  size = 200,
  reverse = false,
  ...props
}: BorderBeamProps) => {
  return (
    <div
      className={cn("absolute inset-0 overflow-hidden rounded-xl", className)}
      {...props}
    >
      <div
        className={cn(
          "absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]",
          reverse && "animate-[spin_4s_linear_infinite_reverse]"
        )}
        style={{ animationDuration: `${duration}s` }}
      />
      <div className="absolute inset-[2px] rounded-xl bg-zinc-950" />
    </div>
  );
};
