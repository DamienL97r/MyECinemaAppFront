import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar"


const myriad = localFont({
  src: "./fonts/MyriadProRegular.ttf",
  variable: "--font-myriad",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My E-Cinema",
  description: "Description of the site",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
