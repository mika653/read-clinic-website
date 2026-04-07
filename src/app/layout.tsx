import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "R.E.A.D. Center | Reading Enhancement & Academic Development",
  description:
    "Reading Enhancement and Academic Development center in Ayala Alabang, Muntinlupa City. Nurturing Minds, Shaping Futures through expert-guided literacy programs, educational therapy, and developmental support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
