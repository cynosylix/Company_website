import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NavigationbarWithDropdownMultilevelMenu} from "./Components/navBar";
import { Footer } from "./Components/footer";


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
  title: "Cynosylix Technology | Best project centre in kochi",
  description: "Discover the best project centre in Kochi, offering expert guidance and resources for successful project execution. Elevate your ideas with us today!",
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
        <Footer />
      </body>
    </html>
  );
}
