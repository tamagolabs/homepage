import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/pt";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pt: () => import("./dictionaries/pt").then((module) => module.pt),
  en: () => import("./dictionaries/en").then((module) => module.en),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loadDictionary = dictionaries[locale] ?? dictionaries.pt;
  return loadDictionary();
}
