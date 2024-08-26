import type { Metadata } from "next";
import "./globals.css";
import config from "@config/config.json"
import Header from '@components/Header'
import Footer from "@components/Footer";
export const metadata: Metadata = config.metadata || {};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />  
        {children}
      <Footer/>
      </body>
    </html>
  );
}
