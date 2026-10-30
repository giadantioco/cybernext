import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne-next",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Cybernext – Product Dashboard",
    template: "%s | Cybernext",
  },
  description:
    "A product management dashboard built with Next.js, React and Tailwind CSS: browse, create, edit and delete products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${syne.variable}`}>{children}</body>
    </html>
  );
}
