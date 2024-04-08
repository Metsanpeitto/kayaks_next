import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { lobster, roboto } from "../../fonts";
import styles from "./styles.module.css";
import logo from "./Logo.svg";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className={styles.sectionNavbar}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className={styles.navbar}>
        <Image
          src={logo}
          width={500}
          height={500}
          alt="Picture of the author"
          className={styles.logo}
        />
        <h1 className={`${lobster.className} ${styles.title}`}>
          Kayaks La isla
        </h1>
        <h4 className={`${roboto.className} ${styles.menu}`}>{t("menu")}</h4>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
