import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecoilRootProvider from "@/providers/RecoilRootProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HashSend",
  description: "Send cryptocurrencies securely and instantly without knowing the recipient's wallet address",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RecoilRootProvider>
          <Web3Provider>
            <NavBar />

            {children}

            <Footer />
            <Toaster />
            <ToastContainer
              position="bottom-left"
            />
          </Web3Provider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
