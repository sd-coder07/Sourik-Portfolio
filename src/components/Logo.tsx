import React from "react";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ showTagline = true, size = "md", className = "" }: LogoProps) {
  const iconSizeClasses = {
    sm: "w-7 h-7 text-[11px]",
    md: "w-8 h-8 text-xs",
    lg: "w-10 h-10 text-sm",
  };

  const textClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* <SD/> Badge Icon */}
      <div
        className={`${iconSizeClasses[size]} rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-bold text-accent shadow-sm group-hover:border-accent group-hover:shadow-glow-accent transition-all duration-200 shrink-0`}
      >
        &lt;SD/&gt;
      </div>

      {/* sourik.das Wordmark */}
      <div className="flex flex-col">
        <div
          className={`font-display font-bold ${textClasses[size]} tracking-tight leading-none transition-colors`}
        >
          <span className="text-text-primary">sourik</span>
          <span className="text-accent">.das</span>
        </div>
        {showTagline && (
          <span className="font-mono text-[10px] text-text-muted tracking-wider mt-0.5">
            Full Stack Developer
          </span>
        )}
      </div>
    </div>
  );
}
