"use client";

import Link from "next/link"
import Image from "next/image"


const NavBar = () => {

  return (
    <header className="bg-shark-950">
      <div className="flex justify-between items-center app-width py-5 sm:px-8 px-2">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
          <h1 className="font-bold text-2xl">Hash<span className="text-turquoise-blue-500">Send</span></h1>
        </Link>

        <Link href="https://app.hashsend.xyz" className="btn hs-primary">
          Launch App
        </Link>
      </div>
    </header>
  )
}

export default NavBar