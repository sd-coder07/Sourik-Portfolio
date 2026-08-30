import React from "react";

interface StatChipProps {
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export function StatChip({ label, sublabel, icon }: StatChipProps) {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-surface border border-border text-xs text-text-primary font-mono transition-colors hover:border-border-subtle">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulseDot" />
      {icon && <span className="text-text-muted">{icon}</span>}
      <span className="font-semibold text-text-primary">{label}</span>
      {sublabel && <span className="text-text-muted font-normal">· {sublabel}</span>}
    </div>
  );
}
