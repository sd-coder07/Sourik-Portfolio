import React from "react";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ showTagline = true, size = "md", className = "" }: LogoProps) {
  const iconSizeClasses = {
    sm: "w-10 h-7 text-[11px]",
    md: "w-12 h-10 text-xs sm:text-[13px]",
    lg: "w-14 h-10 text-sm",
  };

  const textClasses = {
    sm: "text-sm",
    md: "text-base sm:text-lg",
    lg: "text-xl",
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* <SD/> Badge Icon */}
      <div
        className={`${iconSizeClasses[size]} rounded-lg bg-black border border-black flex items-center justify-center font-mono font-bold text-accent shadow-md group-hover:border-accent group-hover:shadow-glow-accent transition-all duration-200 shrink-0`}
      >
        &lt;SD/&gt;
      </div>

      {/* sourik.das Wordmark */}
      <div className="flex flex-col justify-center">
        <div
          className={`font-display font-extrabold ${textClasses[size]} tracking-tight leading-none transition-colors`}
          style={{
            WebkitTextStroke: "1px #000000",
            paintOrder: "stroke fill",
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          <span className="text-white">sourik</span>
          <span className="text-accent">.das</span>
        </div>
        {showTagline && (
          <span
            className="font-mono text-[10px] text-zinc-300 tracking-wider mt-0.5 font-medium"
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.8), -0.5px -0.5px 0 rgba(0,0,0,0.5)",
            }}
          >
            Full Stack Developer
          </span>
        )}
      </div>
    </div>
  );
}
