"use client";

import Sidebar from "@/components/sidebar";
import { MoreHorizontal } from 'lucide-react';

export default function HashSend() {

  return (
    <main className="flex">
      <Sidebar />
      
      <section className="h-screen overflow-y-auto w-full pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-9 gap-4 p-4">
          <div className="col-span-6">
            <table className="w-full bg-[#29313C] rounded-lg">
              <thead className="border-b-2 border-gray-900">
                <tr className="text-gray-500 uppercase">
                  <th className="text-left p-4">Network</th>
                  <th className="text-left p-4">Date</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y-2 divide-gray-900">
                <tr className="">
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F3BA2F] flex items-center justify-center">
                        <span className="text-black font-bold text-sm">B</span>
                      </div>
                      <span className="font-medium">Binance Coin (BNB)</span>
                    </div>
                  </td>
                  <td className="p-4">2/25/2025</td>
                  <td className="p-4">$ 411.39</td>
                  <td className="p-4 hs-green-text">Claimed</td>
                  <td className="p-4">
                    <button className="h-8 w-8 text-gray-400">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                <tr className="">
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#E6007A] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                      </div>
                      <span className="font-medium">Polkadot (DOT)</span>
                    </div>
                  </td>
                  <td className="p-4">2/25/2025</td>
                  <td className="p-4">$ 20.33</td>
                  <td className="p-4 text-red-400">Pending</td>
                  <td className="p-4">
                    <button className="h-8 w-8 text-gray-400">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
                <tr className="">
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#F7931A] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <span className="font-medium">Bitcoin (BTC)</span>
                    </div>
                  </td>
                  <td className="p-4">2/25/2025</td>
                  <td className="p-4">$ 37,903.00</td>
                  <td className="p-4 hs-green-text">Claimed</td>
                  <td className="p-4">
                    <button className="h-8 w-8 text-gray-400">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                <tr className="">
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#627EEA] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">E</span>
                      </div>
                      <span className="font-medium">Ethereum (ETH)</span>
                    </div>
                  </td>
                  <td className="p-4">2/25/2025</td>
                  <td className="p-4">$ 2,785.20</td>
                  <td className="p-4 hs-green-text">Claimed</td>
                  <td className="p-4">
                    <button className="h-8 w-8 text-gray-400">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>

                <tr className="">
                  <td className="px-4 py-6">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#2A5ADA] flex items-center justify-center">
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <span className="font-medium">Chainlink (LINK)</span>
                    </div>
                  </td>
                  <td className="p-4">2/25/2025</td>
                  <td className="p-4">$ 17.27</td>
                  <td className="p-4 hs-green-text">Claimed</td>
                  <td className="p-4">
                    <button className="h-8 w-8 text-gray-400">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col-span-3 space-y-4">
            <div className="rounded-lg hs-gradient-br border border-gray-700 p-4 min-h-36">
              <h3 className="text-gray-500 mb-3">Amount Sent</h3>

              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">$ 1,474.91</div>

                <div className="bg-[#4d4a2d] py-3 px-6 rounded-md flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#e6d477] mr-1"></div>
                  <span>25.69%</span>
                </div>
              </div>

              <div className="flex items-center mt-2 font-semibold gap-x-2">
                <span className="hs-green-text">+ $301.93</span>
                <span className="hs-gradient-br border border-gray-700 px-2 py-0.5 rounded">24h</span>
              </div>
            </div>

            <div className="rounded-lg hs-gradient-br border border-gray-700 p-4 min-h-36">
              <h3 className="text-gray-500 mb-3">Total Claims</h3>

              <div className="flex items-center justify-start gap-x-10">
                <h2 className="text-4xl font-bold">34,000</h2>

                <div className="flex items-center mt-2 font-semibold gap-x-2">
                  <span className="hs-green-text">+ $301.93</span>
                  <span className="hs-gradient-br border border-gray-700 px-2 py-0.5 rounded">24h</span>
                </div>
              </div>
            </div>

            <div className="rounded-lg hs-gradient-br border border-gray-700 p-4 min-h-36">
              <h3 className="text-gray-500 mb-3">Pending Claims</h3>

              <div className="flex items-center justify-start gap-x-10">
                <h2 className="text-4xl font-bold">34,000</h2>

                <div className="flex items-center mt-2 font-semibold gap-x-2">
                  <span className="hs-green-text">+ $301.93</span>
                  <span className="hs-gradient-br border border-gray-700 px-2 py-0.5 rounded">24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

