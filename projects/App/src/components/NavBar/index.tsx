"use client";

import Link from "next/link"
import WalletButton from "@/components/WalletButton";
import Image from "next/image"


const NavBar = () => {

  return (
    <header className="p-4 bg-shark-950 flex justify-between items-center">
      <div className="flex items-center gap-x-6">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
          <h1 className="font-bold text-2xl">Hash<span className="text-turquoise-blue-500">Send</span></h1>
        </Link>

        <nav className="hidden md:flex items-center gap-8 ml-12">
          <Link href="/" className="text-turquoise-blue-500 font-medium">
            Dashboard
          </Link>

          <Link href="/address-book" className="text-gray-300 hover:text-white transition-colors font-medium">
            Address Book
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/send" className="btn hs-secondary hidden md:flex px-6">
          Send Token
        </Link>

        <Link href="/claim" className="btn hs-secondary hidden md:flex px-6">
          Claim Token
        </Link>

        <WalletButton />
      </div>
    </header>
  )
}

export default NavBar