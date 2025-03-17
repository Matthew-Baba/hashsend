import Sidebar from '@/components/sidebar'
import { MoreHorizontal } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const Transactions = () => {
  return (
    <main className="flex">
      <Sidebar />
      
      <section className="h-screen overflow-y-auto w-full pb-32">
        <div className="p-4 space-y-5">
          <h4 className="font-bold text-2xl">Transactions</h4>

          <Tabs defaultValue="sent" className="space-y-6">
            <TabsList className="border border-gray-600 rounded-md opacity-70">
              <TabsTrigger className="text-base" value="sent">Sent</TabsTrigger>
              <TabsTrigger className="text-base" value="claims">Claims</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sent">
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
            </TabsContent>

            <TabsContent value="claims">
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
                </tbody>
              </table>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

export default Transactions