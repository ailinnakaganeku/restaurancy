import type {Metadata} from "next";

import {Epilogue} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Restaurancy - Hello World",
  description: "The best restaurants in the world",
  keywords: ["restaurant", "food", "eat", "dinner", "lunch"],
};
const epilogue = Epilogue({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={epilogue.className} lang="en">
      <body className="container m-auto mx-auto grid min-h-screen max-w-screen-lg grid-rows-[auto,1fr,auto] px-4">
        <header className="relative text-xl font-bold leading-[3rem]">
          <Link href="/">Restaurancy</Link>
        </header>
        <div className="absolute left-0 right-0 top-[48px] h-[1px] bg-gray-200" />
        <main className="py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
