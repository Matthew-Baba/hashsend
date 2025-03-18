"use client";

import { useState } from "react"
import Link from "next/link"
import WalletButton from "@/components/WalletButton";
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const NavBar = () => {
  const [walletAddress, setWalletAddress] = useState("")

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
          <Dialog>
            <DialogTrigger className="w-full place-self-center">
              <label className="btn hs-secondary">Claim Token</label>
            </DialogTrigger>

            <DialogContent className="hs-gradient-br max-w-4xl w-full">
              <DialogHeader>
                <DialogTitle>Claim Token</DialogTitle>
              </DialogHeader>

              <div className="">
                <div className="mb-8 space-y-8 p-8 rounded-lg bg-[#1a1f2b]/30 border border-gray-800">
                  <label className="block mb-2 text-lg">Enter Generated Code</label>
                  <input value={walletAddress} className="input-box" onChange={(e) => setWalletAddress(e.target.value)} placeholder="Transaction code" />
                  
                  <div className="flex items-center justify-center">
                    <button className="w-full max-w-sm btn hs-primary py-3 text-lg">Claim</button>
                  </div>
                </div>

              </div>
            </DialogContent>
          </Dialog>

          <WalletButton />
        </div>
      </div>
    </header>
  )
}

export default NavBar