import "./globals.css";
import type { Metadata } from "next";
import { Prata } from "next/font/google";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import ToastProvider from "@/lib/ToastProvider";

import favicon from "../public/favicon.ico";
import { RtkProvider } from "@/rtk/rtkProvider";
import UserHandler from "@/components/userHandler";

const futura = localFont({
  src: [
    {
      path: "../fonts/FuturaCyrillicBook.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/FuturaCyrillicBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const prata = Prata({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Fashion Shop",
  description: "Fashion Shop Website",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning
          className={`${futura.className} text-mainColor overflow-x-hidden scrollbar-thumb-mainColor/20 scrollbar-track-white scrollbar-thin hover:scrollbar-thumb-mainColor/30 scroll-smooth`}
        >
          <ToastProvider>
            <RtkProvider>
              <UserHandler />
              <Header />
              {children}
              <Footer font={prata.className} />
            </RtkProvider>
          </ToastProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
