import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "../_components/Navbar/Navbar";
import Footer from "../_components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kayaks La Isla",
  description: "Traditional kayaks made to last",
};

export default function RootLayout({
  children,
<<<<<<< HEAD:app/[locale]/layout.tsx
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
=======
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
>>>>>>> origin/main:app/layout.tsx
      </body>
    </html>
  );
}
