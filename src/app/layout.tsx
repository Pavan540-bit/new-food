
import "./globals.css";
import 'animate.css/animate.min.css';
import Navbar from "./Components/Navbar";
import {  Poppins,  Montserrat } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Next Food App",
  description: "A food ordering and recipe sharing application built with Next.js",
};

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });
const montserrat = Montserrat({ weight: ['400', '600'], subsets: ['latin'] });

// import { Reem_Kufi } from 'next/font/google';
import Footer from "./Components/Footer";

// const reem = Reem_Kufi({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'], // optional weights
// });

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body

      className={`${poppins.className} ${montserrat.className} main-body App`}
      >

      <Navbar />

     {children}
   
        <Footer dynamicContent="Your dynamic content here" />
 <SpeedInsights />
      </body>
    </html>
  );
}
