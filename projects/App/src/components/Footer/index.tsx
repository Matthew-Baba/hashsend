import Link from "next/link"
import { MessageCircle, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-shark-950 text-white py-10 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mobile and Tablet Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Hash<span className="text-turquoise-blue-400">Send</span>
              </span>
            </Link>
            <p className="text-sm mt-2 text-gray-300 max-w-xs">
              A decentralized software that allows users to send token to anyone with or without knowing their wallet
              address
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-turquoise-blue-400 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-turquoise-blue-400 font-medium mb-4">Others</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/address-book" className="text-gray-300 hover:text-white transition-colors">
                  Address Book
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-turquoise-blue-400 font-medium mb-4">Community</h3>
            <div className="flex gap-4">
              <Link
                href="https://t.me/hashsend"
                aria-label="Telegram"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle size={20} />
              </Link>
              <Link
                href="https://facebook.com/hashsend"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com/hashsend"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center sm:text-left text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} HashSend. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

