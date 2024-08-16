import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow pt-[4.8rem] md:pt-[4.5rem] lg:pt-[4.5rem] xl:pt-[4.5rem]">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
