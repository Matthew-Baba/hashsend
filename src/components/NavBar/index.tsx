import Link from "next/link"
import WalletButton from "@/components/WalletButton";
import Image from "next/image"

const NavBar = () => {
  return (
    <header className="flex justify-between items-center p-6 app-width">
      <div className="flex items-center gap-2">
        <Image src="/img/hashsend.svg" alt="HashSend Logo" width={40} height={40} />
        <span className="font-bold text-xl">HashSend</span>
      </div>

      <div className="flex items-center gap-4">
        <Link href="#about" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link href="#how-it-works" className="text-gray-300 hover:text-white">
          How It Works
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-white px-4 py-2 rounded-md hover:bg-gray-700/30">Get Started</button>
        {/* <button className="bg-yellow-500 text-[#1a1f2e] font-medium px-4 py-2 rounded-md flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1f2e] rounded-full flex items-center justify-center">
              <span className="text-yellow-500 text-xs">⚡</span>
            </div>
            Connect wallet
          </button> */}
        <WalletButton />
      </div>
    </header>
  )
}

export default NavBar