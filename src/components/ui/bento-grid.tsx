"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function BentoGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description: string;
}) {
  return (
    <div
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-white/5 backdrop-blur-sm border border-white/10",
        "transform-gpu transition-all duration-300 hover:border-white/20 hover:bg-white/10",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-violet-500/10 group-hover:to-cyan-500/10" />
      {background && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {background}
        </div>
      )}
      <div className="z-10 flex flex-col gap-1 p-6 transition-all duration-300">
        {Icon && (
          <Icon className="h-12 w-12 origin-left transform-gpu text-violet-400 transition-all duration-300 ease-in-out group-hover:scale-75" />
        )}
      </div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
