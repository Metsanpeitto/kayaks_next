import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { lobster, roboto } from "../../fonts";
import styles from "./styles.module.css";
import logo from "./Logo.svg";
import { NavbarProps } from "@/app/types";

export default function Navbar(props: NavbarProps) {
  const { locale } = props;
  const t = useTranslations("Navbar");

  return (
    <header className={styles.sectionNavbar}>
      <nav className={styles.navbar}>
        <div className={styles.itemsGroup}>
          <Link className={styles.link} href="/">
            <Image
              src={logo}
              width={500}
              height={500}
              alt="Picture of the author"
              className={styles.logo}
            />
          </Link>
        </div>
        <h1 className={`${lobster.className} ${styles.title}`}>
          Kayaks La isla
        </h1>

        <div className={styles.itemsGroup}>
          <h4 className={`${roboto.className} ${styles.item}`}>
            <Link className={styles.link} href={`/${locale}/Kayaks`}>
              {" "}
              {t("kayaks")}
            </Link>
          </h4>
          <h4 className={`${roboto.className} ${styles.item}`}>
            <Link className={styles.link} href={`/${locale}/Contact`}>
              {" "}
              {t("contact")}
            </Link>
          </h4>
          <h4 className={`${roboto.className} ${styles.about}`}>
            <Link className={styles.link} href={`/${locale}/About`}>
              {" "}
              {t("about")}
            </Link>
          </h4>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
