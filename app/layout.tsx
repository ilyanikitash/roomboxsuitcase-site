import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RoomboxSuitcase — румбоксы и картины по номерам",
  description:
    "Витрина товаров продавца на Wildberries: румбоксы и картины по номерам. Переход к покупке на маркетплейсе, PDF-инструкции к румбоксам.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--color-background)] font-sans text-[var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
