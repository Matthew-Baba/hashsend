"use client"

import Sidebar from '@/components/sidebar'
import { MoreHorizontal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
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



const Transactions = () => {
  const transactions = [
    {
      network: "Binance Coin (BNB)",
      date: "2/25/2025",
      amount: "$411.39",
      status: "claimed",
      color: "bg-[#F3BA2F]"
    },
    {
      network: "Polkadot (DOT)",
      date: "2/25/2025",
      amount: "$20.33",
      status: "pending",
      color: "bg-[#E6007A]"
    },
    {
      network: "Bitcoin (BTC)",
      date: "2/25/2025",
      amount: "$37,903.00",
      status: "claimed",
      color: "bg-[#F7931A]"
    },
    {
      network: "Ethereum (ETH)",
      date: "2/25/2025",
      amount: "$2,785.20",
      status: "claimed",
      color: "bg-[#627EEA]"
    },
    {
      network: "Chainlink (LINK)",
      date: "2/25/2025",
      amount: "$17.27",
      status: "claimed",
      color: "bg-[#2A5ADA]"
    },
  ]

  return (
    <main className="flex">
      <Sidebar />

      <section className="h-screen overflow-y-auto w-full pb-32">
        <div className="p-4 space-y-5">
          <h4 className="font-bold text-2xl">Transactions</h4>

          <Tabs defaultValue="sent" className="space-y-6">
            <TabsList className="border border-gray-600 rounded-md opacity-70">
              <TabsTrigger className="text-base" value="sent">Sent</TabsTrigger>
              <TabsTrigger className="text-base" value="claims">Claims</TabsTrigger>
            </TabsList>

            <TabsContent value="sent">
              <Table className="bg-[#29313C] rounded-lg">
                <TableHeader>
                  <TableRow className="border-b border-gray-900 text-base uppercase">
                    <TableHead className="p-4 font-semibold">Network</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="p-4 font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="divide-y-2 divide-gray-900">
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

                      <TableCell>{transaction.date}</TableCell>

                      <TableCell>{transaction.amount}</TableCell>

                      <TableCell className={`capitalize text-base ${transaction.status == "claimed" ? 'hs-green-text' : 'text-red-400'}`}>{ transaction.status }</TableCell>

                      <TableCell className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" className="hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
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
              <Table className="bg-[#29313C] rounded-lg">
                <TableHeader>
                  <TableRow className="border-b border-gray-900 text-base uppercase">
                    <TableHead className="p-4 font-semibold">Network</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="p-4 font-semibold">Action</TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody className="divide-y-2 divide-gray-900">
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

                      <TableCell>{transaction.date}</TableCell>

                      <TableCell>{transaction.amount}</TableCell>

                      <TableCell className={`capitalize text-base ${transaction.status == "claimed" ? 'hs-green-text' : 'text-red-400'}`}>{transaction.status}</TableCell>

                      <TableCell className="">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" className="hover:text-white">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
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
        </div>
      </section>
    </main>
  )
}

export default Transactions