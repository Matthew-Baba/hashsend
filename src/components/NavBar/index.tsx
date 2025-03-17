"use client";

import Link from "next/link"
import WalletButton from "@/components/WalletButton";
import Image from "next/image"

const NavBar = () => {
  return (
    <header className="p-4 border-b border-gray-700">
      <div className="flex justify-between items-center app-width">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
          <span className="font-bold text-xl">HashSend</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link href="#about" className="hover:text-white">
            About
          </Link>

          <Link href="#how-it-works" className="hover:text-white">
            How It Works
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-white px-4 py-2 rounded-md hover:bg-gray-700/30">Get Started</Link>

          <WalletButton />
        </div>
      </div>
    </header>
  )
}

export default NavBar