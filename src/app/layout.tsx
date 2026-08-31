import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Desinftec | Rəqəmsal Həllər",
  description:
    "Desinftec — Bakıda fəaliyyət göstərən, veb və mobil tətbiqlər, UI/UX prototipləşdirmə və brendinq üzrə ixtisaslaşan rəqəmsal həllər komandasıdır.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az" className={`${plusJakartaSans.variable} ${satoshi.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
