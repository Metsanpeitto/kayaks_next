"use client";

import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { useLocale } from "next-intl";
import { localeNames, locales } from "../../i18nconfig";

const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();

  const switchLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(pathName, { locale: e.target.value });
  };

  return (
    <div>
      <select value={locale} onChange={switchLocale}>
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {localeNames[loc]}
          </option>
        ))}
      </select>
    </div>
  );
}
