import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matteo | Portfolio",
  description:
    "Matteo Ricci is a full stack web developer with 4 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}text-gray-950`}>
        {children}
      </body>
    </html>
  );
}
