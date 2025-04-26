"use client"

import Image from 'next/image'
import Link from 'next/link'
import { LayoutDashboard, Send, FileClock, Menu, X, HandCoins } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ConnectWalletButton } from '../ConnectWalletButton'
import { useState } from 'react'

const menuItems = [
  {
    name: 'Dashboard',
    icon: <LayoutDashboard />,
    href: '/'
  },
  {
    name: 'Transfer',
    icon: <Send />,
    href: '/transfer'
  },
  {
    name: 'Claim',
    icon: <HandCoins />,
    href: '/claim'
  },
  {
    name: 'History',
    icon: <FileClock />,
    href: '/history'
  }
]

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const location = usePathname()
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="bg-shark-50 h-screen flex items-center justify-center overflow-hidden relative">
      <aside className={`h-screen w-64 paper overflow-hidden sm:block hidden`}>
        <Link href="/" className="flex items-center gap-2 px-4 py-4">
          <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
          <h1 className="font-extrabold text-2xl">HashSend</h1>
        </Link>

        <section className="space-y-2 mt-8">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className={`group relative flex items-center gap-x-6 rounded-lg p-4 menu-hover mx-3 ${location === item.href && 'bg-turquoise-blue-100'}`}>
              {item.icon}
              <span className={`font-semibold ${location === item.href && 'text-turquoise-blue-900'}`}>{item.name}</span>
            </Link>
          ))}
        </section>
      </aside>

      {/* MOBILE NAV */}
      <aside className={`h-screen w-screen flex bg-black/30 overflow-hidden sm:hidden transition-all duration-300 absolute top-0 left-0 ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>
        <div className={`h-screen w-64 paper overflow-hidden`}>
          <Link href="/" className="flex items-center gap-2 px-4 py-4">
            <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
            <h1 className="font-extrabold text-2xl">HashSend</h1>
          </Link>

          <section className="space-y-2 mt-8">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className={`group relative flex items-center gap-x-6 rounded-lg p-4 menu-hover mx-3 ${location === item.href && 'bg-turquoise-blue-100'}`}>
                {item.icon}
                <span className={`font-semibold ${location === item.href && 'text-turquoise-blue-900'}`}>{item.name}</span>
              </Link>
            ))}
          </section>
        </div>

        <X className="text-white cursor-pointer ml-2 mt-3" size={30} onClick={() => setOpenMenu(false)} />
      </aside>

      <aside className="flex-1 h-screen">
        <section className="flex items-center justify-between sm:justify-end paper p-4">
          <Menu className="cursor-pointer sm:hidden" onClick={() => setOpenMenu(true)} />

          <ConnectWalletButton customClass="py-2.5 px-4 text-base" />
        </section>

        <section className="h-screen p-4 sm:p-8 pb-40 overflow-y-auto">
          {children}
        </section>
      </aside>
    </div>
  )
}

export default AppLayout