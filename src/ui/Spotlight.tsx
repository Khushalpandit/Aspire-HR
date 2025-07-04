"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps extends React.HTMLProps<HTMLDivElement> {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
}

export const Spotlight = ({
  className,
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(336, 100%, 50%, 0.08) 0, hsla(341, 100%, 55%, 0.04) 50%, hsla(336, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(333, 100%, 85%, 0.08) 0, hsla(335, 100%, 55%, 0.04) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(332, 100%, 85%, 0.06) 0, hsla(327, 100%, 85%, 0.06) 80%, transparent 100%)",
  ...props
}: SpotlightProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 h-full w-full",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: gradientFirst }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: gradientSecond }}
      />
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: gradientThird }}
      />
    </div>
  );
};
