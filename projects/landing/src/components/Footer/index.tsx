import Link from "next/link"
import { Github, Facebook, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8">
      <div className="app-width">
        <div className="border-t border-gray-700 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/img/hashsend.svg"
                alt="HashSend logo"
                width={32}
                height={32}
                className=""
              />

              <h2 className="text-xl font-bold">HashSend</h2>
            </div>
            <p className="text-sm">
              A decentralized software that allows users to sent token to anyone with or without knowing their wallet
              address
            </p>
          </div>

          {/* Others Links */}
          <div className="md:col-span-1">
            <h3 className="hs-text font-bold mb-4">Others</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hs-text-hover transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hs-text-hover transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hs-text-hover transition-colors">
                  How it works
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="md:col-span-2">
            <h3 className="hs-text font-bold mb-4">Community</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hs-text-hover transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hs-text-hover transition-colors">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hs-text-hover transition-colors">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

