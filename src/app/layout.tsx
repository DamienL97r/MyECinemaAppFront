import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/navbar"
import Footer from "@/components/footer";


const myriad = localFont({
  src: [
    {
      path:"./fonts/MyriadProRegular.ttf",
      weight: "400",
    },
    {
      path:"./fonts/MyriadProLight.otf",
      weight: "300",
    },
    {
      path:"./fonts/MyriadProBold.ttf",
      weight: "700",
    }
  ],
  variable: "--font-myriad",
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
        <Footer></Footer>
      </body>
    </html>
  );
}
