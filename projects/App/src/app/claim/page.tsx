"use client";

import { useState } from "react"

const ClaimToken = () => {
  const [walletAddress, setWalletAddress] = useState("")

  return (
    <main className="min-h-screen py-14">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg p-10 overflow-hidden">
        <div className="space-y-8">
          <div className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold">Claim Token</h2>
          </div>

          <div className="mb-8 space-y-4">
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
      </div>
    </main>
  )
}

export default ClaimToken