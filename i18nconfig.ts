// i18nconfig.ts
// (Not to be confused with i18n.ts)

// Remember the Locale type is just a
// union: "en-US" | "ar-EG"
import { Locale } from "./app/types";

export const defaultLocale: Locale = "en-US";

export const locales: Locale[] = ["en-US", "es"];

export const localeNames: Record<Locale, string> = {
  "en-US": "English",
  "es": "Spanish",
};
