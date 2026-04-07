import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "READ Clinic | Nurturing Minds, Shaping Futures",
  description:
    "Premium children's learning and reading clinic in Ayala Alabang, Muntinlupa City. Empowering young readers through expert-guided programs.",
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
