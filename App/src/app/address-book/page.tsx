"use client"

import Sidebar from '@/components/sidebar'
import { useState } from "react"
import { Copy, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


interface WalletAddress {
  id: string
  address: string
}

const AddressBook = () => {
  const [addresses, setAddresses] = useState<WalletAddress[]>([
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
    <main className="flex">
      <Sidebar />
      
      <section className="h-screen overflow-y-auto w-full pb-32">
        <div className="p-4 space-y-5">
          <div className="font-medium space-y-1.5">
            <h4 className="font-bold text-2xl">Address Book</h4>
            <p className="">saved wallet addresses</p>
          </div>

          <div className="place-self-end">
            <button className="btn hs-gradient-br font-medium text-base py-3.5 px-8 border border-gray-700">Add Wallet Address</button>
          </div>

          <Table className="bg-[#29313C] rounded-lg">
            <TableHeader>
              <TableRow className="border-b border-gray-900 text-base uppercase">
                <TableHead className="p-4 font-semibold">Wallet Address</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead className="p-4 font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="divide-y-2 divide-gray-900">
              {addresses.map((address) => (
                <TableRow key={address.id} className="px-4 py-6">
                  <TableCell className="">
                    <span className="input-box"> {address.address} </span>
                  </TableCell>

                  <TableCell>
                    <button className="flex items-center gap-x-2 hover:text-white" onClick={() => copyAddress(address.address)}>
                      <Copy />
                      copy address
                    </button>
                  </TableCell>

                  <TableCell>
                    <button className="flex items-center gap-x-2 hover:text-white" onClick={() => deleteAddress(address.id)}>
                      <Trash2 />
                      delete
                    </button>
                  </TableCell>

                  <TableCell className="">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" className="hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                        <DropdownMenuItem className="text-white hover:bg-gray-700">View Details</DropdownMenuItem>
                        <DropdownMenuItem className="text-white hover:bg-gray-700">Export Key</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </main>
  )
}

export default AddressBook