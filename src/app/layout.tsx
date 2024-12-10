import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const myriad = localFont({
  src: "./fonts/MyriadProRegular.ttf",
  variable: "--font-myriad",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My E-Cinema",
  description: "Description of the site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
