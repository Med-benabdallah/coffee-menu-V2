import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";  

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blacktag-Menu",
  description: "Blacktag-Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
        </body>
    </html>
  );
}
