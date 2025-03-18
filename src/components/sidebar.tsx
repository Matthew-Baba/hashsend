"use client";

import { useState } from "react"
import { FileText, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ConnectedWalletCard from "./connected-wallet-card";
import {Button} from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export default function Sidebar() {
  const pathname = usePathname();
  const [amount, setAmount] = useState("0.0000027124")
  const [walletAddress, setWalletAddress] = useState("")
  const [encryptTransaction, setEncryptTransaction] = useState(false)
  

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: "/img/grid.svg",
      isImage: true,
    },
    {
      name: "Transactions",
      href: "/transactions",
      icon: "/img/database.png",
      isImage: true,
    },

    {
      name: "Address Book",
      href: "/address-book",
      icon: "/img/link.png",
      isImage: true,
    }
  ];

  return (
    <>
     {/* Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-[#1e2d47] z-50">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center text-sm font-semibold ${
                  isActive ? "text-yellow-500" : "text-yellow-300"
                }`}
              >
                {item.isImage ? (
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                ) : (
                  <FileText className="h-5 w-5" />
                )}
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
          <Button
            variant="outline" 
            className="h-9 text-sm font-medium border-[#3A4358] hover:bg-[#0c1a36] flex items-center"
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
        </div>
      </div>

      {/* Desktop */}
      <div className="sm:p-4 hidden sm:grid min-h-screen">
        <div className="w-[260px] hidden sm:flex rounded-md hs-gradient-br border-r border-[#1e2d47] flex-col pb-32">
          <div className="flex-1 py-4 space-y-8">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <div key={item.name}
                    className={`relative ${isActive ? "border-r-4 border-yellow-500 bg-gradient-to-r from-[#3D3D3D] to-[#303030]" : ""}`}
                  >
                    <Link href={item.href}
                      className={`flex items-center px-4 py-4 text-sm font-semibold transition-colors
                        ${isActive ? "text-[#FFFFFF] bg-[#2B9DDA14]" : "text-gray-300 hover:bg-[#0c1a36]"}`
                      }
                    >
                      <Image
                        src={isActive ? "/img/person.png" : item.icon || "/placeholder.svg"}
                        alt={item.name}
                        width={30}
                        height={30}
                        className="mr-3"
                      />

                      {item.name}
                    </Link>
                  </div>
                );
                
              })}
            </nav>

            <Dialog>
              <DialogTrigger className="w-full place-self-center">
                <label className="btn hs-primary px-20 py-3.5">Send</label>
              </DialogTrigger>
              
              <DialogContent className="hs-gradient-br max-w-4xl w-full">
                <div className="">
                  <div className="mb-8">
                    <div className="relative inline-block">
                      <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#1e2330] rounded-md border border-gray-700">
                        <div className="w-6 h-6 rounded-full bg-[#1e2330]"></div>
                        <span className="font-medium">Network</span>
                        <ChevronDown className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mb-8 space-y-8 p-8 rounded-lg bg-[#1a1f2b]/30 border border-gray-800">
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
                      <input value={walletAddress} className="input-box" onChange={(e) => setWalletAddress(e.target.value)} placeholder="Receiver's Wallet Address"/>
                    </div>

                    <div className="flex items-center mb-8">
                      <Switch
                        checked={encryptTransaction}
                        onCheckedChange={setEncryptTransaction}
                      />
                      <span className="ml-2 text-white">Encrypt Transaction</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="w-full max-w-sm btn hs-primary py-3 text-lg">Send</button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="p-4">
            <ConnectedWalletCard />
          </div>
        </div>
      </div>
    </>
  );
}