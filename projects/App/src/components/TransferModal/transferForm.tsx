"use client";

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TransferForm = () => {
  const [amount, setAmount] = useState("0.0000027124")
  const [walletAddress, setWalletAddress] = useState("")
  const [encryptTransaction, setEncryptTransaction] = useState(false)

  return (
    <div className="space-y-8 p-4 sm:p-8 rounded-lg bg-[#1a1f2b]/30 border border-gray-800">
      <label className="block mb-2 text-white text-lg">Amount</label>

      <div className="p-4 bg-[#1e2330] rounded-md input-box">
        <div className="flex items-center mb-4 p-0 input-box divide-x divide-gray-400">
          <Select defaultValue="edu">
            <SelectTrigger className="w-[120px] border-transparent">
              <SelectValue placeholder="Token" />
            </SelectTrigger>

            <SelectContent className="bg-[#1e2330]">
              <SelectItem value="edu">EDU</SelectItem>
              <SelectItem value="usdt">USDT</SelectItem>
              <SelectItem value="usdc">USDC</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex-1 ml-4">
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-transparent border-none outline-none text-white" />
          </div>
        </div>
        <div className="text-gray-400">0.0016 USD</div>
      </div>

      <div className="mb-8">
        <label className="block mb-2 text-white text-lg">Wallet Address (optional)</label>
        <input value={walletAddress} className="input-box" onChange={(e) => setWalletAddress(e.target.value)} placeholder="Receiver's Wallet Address" />
      </div>

      <div className="flex items-center mb-8">
        <Switch
          checked={encryptTransaction}
          onCheckedChange={setEncryptTransaction}
        />
        <span className="ml-2 text-white">Encrypt Transaction</span>
      </div>
    </div>
  )
}

export default TransferForm