"use client";

import { FileText, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ConnectedWalletCard from "./connected-wallet-card";
import {Button} from "@/components/ui/button";
import TransferModal from "./TransferModal";



export default function Sidebar() {
  const pathname = usePathname();

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

            <TransferModal />
          </div>
          
          <div className="p-4">
            <ConnectedWalletCard />
          </div>
        </div>
      </div>
    </>
  );
}