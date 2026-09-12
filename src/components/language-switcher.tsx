"use client";

import { Globe } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/context";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
  onSelect?: () => void;
  className?: string;
}

export function LanguageSwitcher({
  variant = "desktop",
  onSelect,
  className = "",
}: LanguageSwitcherProps) {
  const { locale, switchLocale, isPending } = useI18n();

  const handleSwitch = (targetLocale: Locale) => {
    switchLocale(targetLocale);
    if (onSelect) {
      onSelect();
    }
  };

  if (variant === "mobile") {
    return (
      <div
        className={`p-2 rounded-xl bg-zinc-900/60 border border-white/5 flex items-center justify-between ${className}`}
      >
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Globe className="w-3.5 h-3.5 text-emerald-400" />
          <span>Idioma / Language</span>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleSwitch("pt")}
            disabled={isPending}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              locale === "pt"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold shadow-xs"
                : "bg-zinc-800/60 text-zinc-400 hover:text-white border border-transparent"
            }`}
            aria-label="Mudar para Português"
          >
            🇧🇷 PT
          </button>
          <button
            type="button"
            onClick={() => handleSwitch("en")}
            disabled={isPending}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              locale === "en"
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold shadow-xs"
                : "bg-zinc-800/60 text-zinc-400 hover:text-white border border-transparent"
            }`}
            aria-label="Switch to English"
          >
            🇺🇸 EN
          </button>
        </div>
      </div>
    );
  }

  // Desktop variant: compact pill
  return (
    <nav
      className={`inline-flex items-center rounded-full bg-zinc-950/60 border border-white/10 p-0.5 text-xs font-mono shadow-xs backdrop-blur-sm ${className}`}
      aria-label="Seletor de idioma / Language selector"
    >
      <button
        type="button"
        onClick={() => handleSwitch("pt")}
        disabled={isPending}
        className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
          locale === "pt"
            ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-xs"
            : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
        }`}
        aria-pressed={locale === "pt"}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => handleSwitch("en")}
        disabled={isPending}
        className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all cursor-pointer ${
          locale === "en"
            ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-xs"
            : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
        }`}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </nav>
  );
}
