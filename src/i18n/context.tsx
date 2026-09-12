"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useTransition } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/pt";

interface I18nContextValue {
  locale: Locale;
  dict: Dictionary;
  switchLocale: (nextLocale: Locale) => void;
  isPending: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  children,
  locale,
  dict,
}: {
  children: React.ReactNode;
  locale: Locale;
  dict: Dictionary;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    // Persist language choice in cookie for 1 year
    // biome-ignore lint/suspicious/noDocumentCookie: Client cookie setting for locale persistence
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    // Preserve any existing hash (#servicos, #contato, etc.)
    const currentHash =
      typeof window !== "undefined" ? window.location.hash : "";

    // Replace current locale prefix (/pt -> /en or /en -> /pt)
    const currentPath = pathname || `/${locale}`;
    let newPath = currentPath.replace(
      new RegExp(`^/${locale}(?=/|$)`),
      `/${nextLocale}`,
    );
    if (!newPath.startsWith(`/${nextLocale}`)) {
      newPath = `/${nextLocale}`;
    }

    startTransition(() => {
      router.push(`${newPath}${currentHash}`);
    });
  };

  return (
    <I18nContext.Provider value={{ locale, dict, switchLocale, isPending }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
