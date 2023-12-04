import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/Styles/globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Otherwise",
  description: "The Value of your money stays Intact",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>
        <Navbar />
        {children}
      </body>
      <Footer />
    </html>
  );
}
