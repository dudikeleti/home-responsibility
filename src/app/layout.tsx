import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "משימות בבית - איך עוזרים בבית?",
  description: "אתר אינטראקטיבי לילדים ונוער על אחריות ועזרה בבית",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} font-rubik`}>{children}</body>
    </html>
  );
}
