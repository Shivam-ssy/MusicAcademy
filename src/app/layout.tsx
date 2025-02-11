import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Slab } from 'next/font/google';
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify required font weights
});

export const metadata: Metadata = {
  title: "Music Academy",
  description: "Feel the Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" >
      <body
        className={`${robotoSlab.className} antialiased `}
      >
        <div className="relative w-full flex items-center justify-center">
          <Navbar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
