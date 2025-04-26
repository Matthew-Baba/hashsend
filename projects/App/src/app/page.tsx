"use client"
import AppLayout from "@/components/Layout";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {

  return (
    <AppLayout>
      <main className="app-width space-y-8">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <h3 className="font-medium mb-3">Amount Sent</h3>

            <div className="text-4xl font-bold hs-text-gradient">$ 1,474.91</div>

            <div className="mt-2 font-medium">
              <span className="text-gray-500">+20.1% from last 24h</span>
            </div>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <h3 className="font-medium mb-3">Total Claims</h3>

            <div className="text-4xl font-bold hs-text-gradient">$ 1,474.91</div>

            <div className="mt-2 font-medium">
              <span className="text-gray-500">+20.1% from last 24h</span>
            </div>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <h3 className="font-medium mb-3">Pending Claims</h3>

            <div className="text-4xl font-bold hs-text-gradient">$ 1,474.91</div>

            <div className="mt-2 font-medium">
              <span className="text-gray-500">+20.1% from last 24h</span>
            </div>
          </aside>
        </section>

        <section className="space-y-4">
          <h3 className="font-semibold text-xl">Recent Transactions</h3>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200">
              <div className="">
                <span className={`font-medium`}>Received USDT</span>

                <div className="flex items-center gap-3">
                  <h6 className="text-sm">0x32....923EfC</h6>
                  <span className="text-green-700 text-xs bg-green-100 px-2.5 rounded-full py-0.5">Claimed</span>
                </div>
              </div>

              <div className="text-right">
                <h6 className={`font-medium text-green-600`}>+109</h6>
                <span className="text-zinc-500 text-sm">2025-04-23 23:32:56</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200">
              <div className="">
                <span className={`font-medium`}>Sent USDT</span>

                <div className="flex items-center gap-3">
                  <h6 className="text-sm">0x32....923EfC</h6>
                  <span className="text-red-700 text-xs bg-red-100 px-2.5 rounded-full py-0.5">Refunded</span>
                </div>
              </div>

              <div className="text-right">
                <h6 className={`font-medium text-red-600`}>-23</h6>
                <span className="text-zinc-500 text-sm">2025-04-23 23:32:56</span>
              </div>
            </div>
          </div>

          <div className="">
            <Link href="/history" className="flex items-center gap-2 text-turquoise-blue-500 font-semibold">
              <span>View all transactions</span>
              <ArrowRight size={16} className="text-turquoise-blue-500" />
            </Link>
          </div>
        </section>
      </main>
    </AppLayout>
  );
}
