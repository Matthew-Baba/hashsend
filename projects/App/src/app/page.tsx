"use client"

import { useState } from "react"
import { Copy, Trash2, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import TransactionDetails from "@/components/TransactionDetail";

interface AddressBook {
  id: string
  address: string
}


export default function HashSend() {
  const transactions = [
    {
      network: "EDU",
      amount: "$411.39",
      status: "claimed",
      color: "bg-[#F3BA2F]"
    },
    {
      network: "USDT",
      amount: "$20.33",
      status: "pending",
      color: "bg-[#E6007A]"
    },
    {
      network: "WEDU",
      amount: "$37,903.00",
      status: "claimed",
      color: "bg-[#F7931A]"
    }
  ]

  const [addresses, setAddresses] = useState<AddressBook[]>([
    { id: "1", address: "0x3A6bE472F5c8A7E89D29F3E17D3B6Dd1F8e5Caf3" },
    { id: "2", address: "0x91eF3A8dBbd2Ce5b0c6f2f7B6D0131B5b8a16e6E" },
    { id: "3", address: "0x5F7C9e4D1f8A21Bc63d4A7e18aD2C5eB91f7f23A" },
    { id: "4", address: "0xC8E7A5Bf9D1e2C6F4B3a7D8E13C21fB2E5A67D91" },
    { id: "5", address: "0xA1D7E3C6F9B5B2D41C8A7E23D1F5e9A6bC2F78E4" },
    { id: "6", address: "0xF9B6C3D21E7A5E41D8A2C6F7B1D3E9A5B2C7F813" },
  ])

  const copyAddress = (address: string) => {
    navigator.clipboard
    .writeText(address)
    .then(() => {
      console.log("Address copied to clipboard")
    })
    .catch((err) => {
      console.error("Failed to copy address: ", err)
    })
  }

  const deleteAddress = (id: string) => {
    setAddresses(addresses.filter((address) => address.id !== id))
  }


  return (
    <main className="app-width space-y-12">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg bg-white border-2 border-gray-200 shadow-lg px-4 py-6 flex items-start justify-between">
          <div className="">
            <h3 className="font-medium mb-3">Amount Sent</h3>

            <div className="text-4xl font-bold hs-text-gradient">$ 1,474.91</div>

            <div className="mt-2 font-medium">
              <span className="text-gray-500">+20.1% from last 24h</span>
            </div>
          </div>

          <div className="bg-turquoise-blue-500/30 py-2 px-3 text-sm rounded-md">
            <div className="hs-text-gradient rounded-md font-medium flex items-center">
              <ChevronUp className="hs-text mr-1" /> 25.69%
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white border-2 border-gray-200 shadow-lg px-4 py-6 flex items-start justify-between">
          <div className="">
            <h3 className="font-medium mb-3">Total Claims</h3>

            <div className="text-4xl font-bold hs-text-gradient">$ 1,474.91</div>

            <div className="mt-2 font-medium">
              <span className="text-gray-500">+20.1% from last 24h</span>
            </div>
          </div>

          <div className="bg-turquoise-blue-500/30 py-2 px-3 text-sm rounded-md">
            <div className="hs-text-gradient rounded-md font-medium flex items-center">
              <ChevronUp className="hs-text mr-1" /> 25.69%
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white border-2 border-gray-200 shadow-lg px-4 py-6 flex items-start justify-between">
          <div className="">
            <h3 className="font-medium mb-3">Pending Claims</h3>

            <div className="text-4xl font-bold hs-text-gradient">$ 1,474.91</div>

            <div className="mt-2 font-medium">
              <span className="text-gray-500">+20.1% from last 24h</span>
            </div>
          </div>

          <div className="bg-turquoise-blue-500/30 py-2 px-3 text-sm rounded-md">
            <div className="hs-text-gradient rounded-md font-medium flex items-center">
              <ChevronUp className="hs-text mr-1" /> 25.69%
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <aside className="col-span-1 sm:col-span-2 bg-white shadow-lg rounded-lg py-8 px-4">
          <Tabs defaultValue="sent" className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-2xl">Transactions</h4>

              <TabsList className="bg-gray-200 rounded-md">
                <TabsTrigger className="text-base" value="sent">Sent</TabsTrigger>
                <TabsTrigger className="text-base" value="claims">Claims</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="sent">
              <Table className="">
                <TableHeader>
                  <TableRow className="border-b border-gray-300 text-base uppercase text-gray-400">
                    <TableHead className="font-semibold">Network</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="divide-y-2 divide-gray-300">
                  {transactions.map((transaction, id) => (
                    <TableRow key={id} className="px-4 py-6 text-base">
                      <TableCell className="">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.color}`}>
                            <span className="text-black font-bold text-sm">{(transaction.network).charAt(0)}</span>
                          </div>
                          <span className="font-medium text-base">{transaction.network}</span>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-medium">201.00</div>
                        <span className="text-gray-400 text-sm font-medium">{transaction.amount}</span>
                      </TableCell>

                      <TableCell className={`capitalize text-base ${transaction.status == "claimed" ? 'hs-green-text' : 'text-red-400'}`}>{transaction.status}</TableCell>

                      <TableCell className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <label className="bg-gray-100 px-4 py-2.5 rounded cursor-pointer text-gray-500">
                              Details
                            </label>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                            <DropdownMenuItem className="text-white hover:bg-gray-700">
                              <TransactionDetails />
                            </DropdownMenuItem>

                            <DropdownMenuItem className="text-white hover:bg-gray-700">Export Key</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="claims">
              <Table className="">
                <TableHeader>
                  <TableRow className="border-b border-gray-300 text-base uppercase text-gray-400">
                    <TableHead className="font-semibold">Network</TableHead>
                    <TableHead className="font-semibold">Amount</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="divide-y-2 divide-gray-300">
                  {transactions.map((transaction, id) => (
                    <TableRow key={id} className="px-4 py-8 text-base">
                      <TableCell className="">
                        <div className="flex items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.color}`}>
                            <span className="text-black font-bold text-sm">{(transaction.network).charAt(0)}</span>
                          </div>
                          <span className="font-medium text-base">{transaction.network}</span>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="font-medium">201.00</div>
                        <span className="text-gray-400 text-sm font-medium">{transaction.amount}</span>
                      </TableCell>

                      <TableCell className={`capitalize text-base ${transaction.status == "claimed" ? 'hs-green-text' : 'text-red-400'}`}>{transaction.status}</TableCell>

                      <TableCell className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <label className="bg-gray-100 px-4 py-2.5 rounded cursor-pointer text-gray-500">
                              Details
                            </label>
                          </DropdownMenuTrigger>

                          <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                            <DropdownMenuItem className="text-white hover:bg-gray-700">
                              <TransactionDetails />
                            </DropdownMenuItem>

                            <DropdownMenuItem className="text-white hover:bg-gray-700">Export Key</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </aside>

        <div className="col-span-1 bg-white rounded-lg shadow-lg">
          <div className="p-4 space-y-5">
            <div className="font-medium space-y-1.5">
              <h4 className="font-bold text-2xl">Address Book</h4>
              <p className="">saved wallet addresses</p>
            </div>

            <Table className="">
              <TableBody className="divide-y-2 divide-gray-900">
                {addresses.map((address) => (
                  <TableRow key={address.id} className="px-4 py-6">
                    <TableCell className=""> {address.address} </TableCell>

                    <TableCell>
                      <button className="" onClick={() => copyAddress(address.address)}>
                        <Copy />
                      </button>
                    </TableCell>

                    <TableCell>
                      <button className="" onClick={() => deleteAddress(address.id)}>
                        <Trash2 />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </main>
  )
}

