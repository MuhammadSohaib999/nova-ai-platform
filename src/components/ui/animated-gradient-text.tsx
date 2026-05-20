"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline animate-gradient bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
        className,
      )}
      style={{ "--bg-size": "300%" } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
