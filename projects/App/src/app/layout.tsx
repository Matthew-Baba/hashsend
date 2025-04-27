import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Web3Provider } from "@/providers/Web3Provider";
import RecoilRootProvider from "@/providers/RecoilRootProvider";
import { ToastContainer } from "react-toastify";
import { Toaster } from "@/components/ui/toaster";

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
            {children}

            <Toaster />
            <ToastContainer
              position="bottom-right"
            />
          </Web3Provider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
