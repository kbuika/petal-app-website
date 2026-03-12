import type { Metadata } from "next";
import { Inter, Caprasimo } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petal | The Private AI Period Tracker",
  description: "Beautifully designed, exceptionally private, and powered by AI. Petal helps you tune into your body's natural rhythms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caprasimo.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
