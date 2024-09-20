import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NavigationbarWithDropdownMultilevelMenu} from "./Components/navBar";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cynosylix Technology",
  description: "cynosylix.com",
  icons: {
    icon: '/logow.png',
  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationbarWithDropdownMultilevelMenu/>
        {children}
      </body>
    </html>
  );
}
