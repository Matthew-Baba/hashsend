"use client";

import Link from "next/link"
import Image from "next/image"


const NavBar = () => {

  return (
    <header className="p-4 border-b border-gray-700">
      <div className="flex justify-between items-center app-width sm:px-8 px-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
          <span className="font-bold text-xl">HashSend</span>
        </Link>

        <Link href="https://hashsend.vercel.app/" className="btn hs-primary">
          Launch App
        </Link>
      </div>
    </header>
  )
}

export default NavBar