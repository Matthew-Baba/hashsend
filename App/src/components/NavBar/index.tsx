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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const NavBar = () => {
  const [walletAddress, setWalletAddress] = useState("")

  return (
    <header className="p-4 border-b border-gray-700 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
        <span className="font-bold text-xl">HashSend</span>
      </Link>

      <div className="flex items-center gap-4">
        <Dialog>
          <DialogTrigger className="w-full place-self-center">
            <label className="btn hs-secondary">Claim Token</label>
          </DialogTrigger>

          <DialogContent className="hs-gradient-br max-w-4xl w-full">
            <DialogHeader>
              <DialogTitle>Claim Token</DialogTitle>
            </DialogHeader>

            <div className="space-y-8">
              <div className="mb-8 space-y-4 p-4 sm:p-8 rounded-lg bg-[#1a1f2b]/30 border border-gray-800">
                <div className="">
                  <label className="block mb-2 text-lg">Enter Generated Code</label>
                  <input value={walletAddress} className="input-box" onChange={(e) => setWalletAddress(e.target.value)} placeholder="Transaction code" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="col-span-1">
                    <label className="block mb-2 text-lg">Chain</label>
                    <h6 className="border-transparent">EDU Chain</h6>
                  </div>

                  <div className="col-span-1">
                    <label className="block mb-2 text-lg">Amount</label>
                    <h6 className="border-transparent font-bold">0.2443 <span className="font-normal text-xs">EDU</span></h6>
                  </div>

                  <div className="col-span-1">
                    <label className="block mb-2 text-lg">Date</label>
                    <h6 className="border-transparent">Mar 23, 2052</h6>
                  </div>

                  {/* <div className="col-span-2">
                    <label className="block mb-2 text-lg">Token To Receive</label>
                    <Select defaultValue="edu">
                      <SelectTrigger className="input-box py-3.5">
                        <SelectValue placeholder="Token" />
                      </SelectTrigger>

                      <SelectContent className="bg-[#1e2330]">
                        <SelectItem value="edu">EDU</SelectItem>
                        <SelectItem value="usdt" disabled>USDT</SelectItem>
                        <SelectItem value="usdc" disabled>USDC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}

                  <div className="col-span-2 mt-8">
                    <label className="block mb-2 text-lg">Claim Password</label>
                    <input className="input-box" placeholder="pwIDsd3d" />
                  </div>
                </div>
              </div>

              
              <div className="flex items-center justify-center">
                <button className="w-full max-w-sm btn hs-primary py-3 text-lg">Claim</button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <WalletButton />
      </div>
    </header>
  )
}

export default NavBar