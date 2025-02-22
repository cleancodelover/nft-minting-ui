import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Geist, Geist_Mono} from "next/font/google";

import "./globals.css";
import AppLayout from "@/src/layouts";
import { ToastContainer } from "react-toastify";

const inter = Inter({subsets: ["latin"]});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT Minting",
  description: "NFT MInting Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppLayout>{children}</AppLayout>
        <ToastContainer />
      </body>
    </html>
  );
}
