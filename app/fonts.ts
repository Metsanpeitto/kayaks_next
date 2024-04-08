import { Lobster, Roboto } from "next/font/google";

export const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: ["400"],
});

export const roboto = Roboto({
  display: "swap",
subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "700"],
});
