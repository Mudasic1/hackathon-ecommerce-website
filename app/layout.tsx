import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from 'sonner';
import { CartProvider } from './context/page'




export const metadata: Metadata = {
  title: "GIAIC Hackathon",
  description: "GIAIC Hackathon Ecommerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <Footer/>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
