"use client";

import Image from "next/image";
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
              alt="HashSend hero"
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
    </main>
  )
}