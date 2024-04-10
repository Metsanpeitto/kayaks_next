import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../_components/Navbar/Navbar";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kayaks La Isla",
  description: "Traditional kayaks made to last",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main className={styles.main}>
          <NavBar locale={locale} />
          {children}
        </main>
      </body>
    </html>
  );
}
