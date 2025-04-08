"use client";

import Image from "next/image";
import Link from "next/link";

export default function HashSend() {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-shark-950 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-5xl font-bold text-white mb-4">
              Send and Claim
              <br />
              Crypto Instantly
            </h1>
            <p className="text-gray-300 mb-8 max-w-md">
              Send digital assets securely without requiring the recipient&apos;s wallet address upfront.
            </p>

            <Link href="https://app.hashsend.xyz" className="bg-white text-gray-900 px-6 py-4 rounded-md font-medium hover:bg-gray-100 transition">
              Get Started
            </Link>
          </div>

          <Image src="/img/token-wheel.png" height={500} width={500} alt="Wheel of crypto token logos" />
        </div>
        {/* Light effect overlay */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-[#1a2330]/50 to-transparent opacity-70"></div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-16">About HashSend</h2>

          <div className="bg-[#1e2a3a] rounded-lg p-10 text-left">
            <h3 className="text-2xl font-bold text-white mb-4">Send Token</h3>
            <p className="text-gray-300 mb-6 max-w-3xl">
              HashSend is a revolutionary Web3 payment system that lets you send crypto to anyone without needing their
              wallet address. Simply generate a unique code, share it, and let the recipient claim their funds securely.
            </p>

            <hr className="border-gray-700 my-8" />

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-shark-950 p-6 rounded-lg">
                <h4 className="hs-text font-medium mb-2">No Wallet Address Needed</h4>
                <p className="text-gray-300 text-sm">Send funds using a secure, shareable code.</p>
              </div>
              <div className="bg-shark-950 p-6 rounded-lg">
                <h4 className="hs-text font-medium mb-2">Multi-Chain Support</h4>
                <p className="text-gray-300 text-sm">Choose your preferred blockchain and token.</p>
              </div>
              <div className="bg-shark-950 p-6 rounded-lg">
                <h4 className="hs-text font-medium mb-2">End-to-End Encryption</h4>
                <p className="text-gray-300 text-sm">Only the intended recipient can claim the funds.</p>
              </div>
            </div>

            <div className="mt-16 mb-8 bg-gradient-to-r from-[#1a2330] via-[#1e2a3a] to-[#1a2330] rounded-lg p-10 text-center relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2">Makes Claiming Effortless</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Securely redeem funds with a claim code, verify details, and choose your preferred blockchain and
                  token.
                </p>

                <Link href="https://app.hashsend.xyz" className="bg-white text-gray-900 px-6 py-4 rounded-md font-medium hover:bg-gray-100 transition">
                  Get Started
                </Link>
              </div>
              {/* Light effect overlay */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-[#1a2330]/20 to-transparent opacity-70"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-shark-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white text-center mb-16">How It Works Section</h2>

          <hr className="border-gray-800 mb-16" />

          <div className="grid md:grid-cols-4 gap-6">
            <div className="border border-gray-700 rounded-lg p-6 relative">
              <h4 className="hs-text font-medium mb-2">Connect Your Wallet</h4>
              <p className="text-gray-300 text-sm mb-8">Just connect your wallet to start transacting.</p>
              <div className="border border-java-500 border-dashed rounded p-4 h-16"></div>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 relative">
              <h4 className="hs-text font-medium mb-2">Enter Amount & Generate Code</h4>
              <p className="text-gray-300 text-sm mb-8">Send funds by creating a unique, encrypted code.</p>
              <div className="border border-java-500 border-dashed rounded p-4 h-16"></div>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 relative">
              <h4 className="hs-text font-medium mb-2">Share Securely</h4>
              <p className="text-gray-300 text-sm mb-8">Send the code to the recipient via any private channel.</p>
              <div className="border border-java-500 border-dashed rounded p-4 h-16"></div>
            </div>

            <div className="border border-gray-700 rounded-lg p-6 relative">
              <h4 className="hs-text font-medium mb-2">Claim & Receive Funds</h4>
              <p className="text-gray-300 text-sm mb-8">
                Enter the code, selects the preferred blockchain, and claims the funds.
              </p>
              <div className="border border-java-500 border-dashed rounded p-4 h-16"></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}