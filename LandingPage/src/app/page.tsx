"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import Lottie from "lottie-react";
import CoinSpin from '@/components/coin-spin.json'

export default function HashSend() {

  return (
    <main className="overflow-y-auto h-full pb-32">
      <section
        className="min-h-screen"
        style={{
          background: "url('/img/hero-bg.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-9 app-width py-12">
          <div className="sm:col-span-3 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-7xl font-bold text-yellow-500">
                  Send Crypto
                  <br />
                  Instantly
                </h1>

                <p className="text-2xl mb-8">No Wallet Address Needed!</p>
              </div>

              <div className="flex gap-4">
                <Link href="https://hashsend.vercel.app/" className="btn hs-secondary"> Get Started </Link>
              </div>
            </div>

            <Image
              src="/img/penguin.png"
              alt="Cartoon penguin holding cryptocurrency coins"
              width={450}
              height={450}
              className=""
            />
          </div>

          <div className="sm:col-span-6">
            <Image
              src="/img/hero.svg"
              alt="Cartoon penguin holding cryptocurrency coins"
              width={750}
              height={650}
              className="place-self-end"
            />

            <div className="opacity-30">
              <Lottie animationData={CoinSpin} className="h-60" />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <div className="hs-gradient-br py-12 relative overflow-hidden">
          <div className="app-width py-12" id="about">
            <h1 className="text-3xl font-bold mb-12">About HashSend</h1>

            <div className="border border-gray-700 rounded-lg py-16 p-8 space-y-16 sm:space-y-0">
              <div className="mb-16 border-b border-gray-700 pb-16">
                <h2 className="text-xl font-bold mb-4">Send Token</h2>

                <p className="w-full max-w-4xl mb-2">
                  HashSend is a revolutionary Web3 payment system that lets you send crypto to anyone—without needing their wallet address.
                </p>

                <p className="w-full max-w-4xl">
                  Simply generate a unique code, share it, and let the recipient claim their funds securely.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
                <div>
                  <h3 className="text-yellow-500 font-bold mb-3">No Wallet Address Needed</h3>
                  <p className="">Send funds using a secure, shareable code.</p>
                </div>

                <div>
                  <h3 className="text-yellow-500 font-bold mb-3">Multi-Chain Support</h3>
                  <p className="">Choose your preferred blockchain and token.</p>
                </div>

                <div>
                  <h3 className="text-yellow-500 font-bold mb-3">End-to-End Encryption</h3>
                  <p className="">Only the intended recipient can claim the funds.</p>
                </div>
              </div>

              <Image
                src="/img/hashsend.svg"
                alt="HashSend logo"
                width={100}
                height={100}
                className="opacity-30"
              />

              <div className="absolute -right-1 top-full sm:top-3/5 transform -translate-y-1/2">
                <Image
                  src="/img/coin.png"
                  alt="3D HashSend logo"
                  width={400}
                  height={400}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="app-width py-24" id="how-it-works">
          <h2 className="text-2xl font-bold text-yellow-500 text-center mb-16">How It Works Section</h2>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-24"></div>
          
          <Image
            src="/img/how-it-works.svg"
            alt="How HashSend works"
            width={1600}
            height={10000}
            className="mx-auto"
          />
        </div>

        <div className="app-width py-12 mt-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-yellow-500">
              Manage, Track & Secure Your Crypto Transactions
            </h1>
            <p className="text-gray-400">Effortless Crypto Transfers & Claim Tracking</p>
          </div>

          <Image
            src="/img/dashboard.svg"
            alt="HashSend dashboard"
            width={1600}
            height={10000}
            className="mx-auto"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}

