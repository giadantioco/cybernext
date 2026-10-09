import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne-next",
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
      <body className={`${inter.className} ${syne.variable}`}>{children}</body>
    </html>
  );
}
