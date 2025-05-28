"use client";
import React from "react";
import { cn } from "@/lib/utils";

interface CardHoverEffectProps extends React.HTMLProps<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  variant?: "purple" | "blue" | "amber" | "rose";
  glowEffect?: boolean;
  size?: "sm" | "md" | "lg";
}

const variantStyles = {
  purple: "from-purple-500/20 to-purple-500/5 text-purple-500",
  blue: "from-blue-500/20 to-blue-500/5 text-blue-500",
  amber: "from-amber-500/20 to-amber-500/5 text-amber-500",
  rose: "from-rose-500/20 to-rose-500/5 text-rose-500",
};

const sizeStyles = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const CardHoverEffect = ({
  className,
  icon,
  title,
  description,
  variant = "purple",
  glowEffect = false,
  size = "md",
  ...props
}: CardHoverEffectProps) => {
  return (
    <div
      className={cn(
        "group relative rounded-xl border border-zinc-800 bg-zinc-950 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br backdrop-blur-sm",
            variantStyles[variant]
          )}
        >
          {icon}
        </div>
      )}
      <h3 className={cn("mb-2 text-xl font-semibold", variantStyles[variant])}>
        {title}
      </h3>
      <p className="text-sm text-zinc-400">{description}</p>
      {glowEffect && (
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-violet-600/20 via-transparent to-transparent opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />
      )}
    </div>
  );
};
