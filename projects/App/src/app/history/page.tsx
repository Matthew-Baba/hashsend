"use client"
import AppLayout from "@/components/Layout";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {

  return (
    <AppLayout>
      <main className="app-width space-y-8">
        <section className="">
          <h4 className="text-4xl font-bold">Transaction History</h4>
          <p className="faded-text font-medium text-sm">Track your transactions across all methods</p>
        </section>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap gap-x-1 rounded-lg paper p-2 justify-start mb-6">
            <TabsTrigger value="all">All Transactions</TabsTrigger>
            <TabsTrigger value="sent">Sent Out</TabsTrigger>
            <TabsTrigger value="claimed">Claimed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            <h3 className="font-semibold text-xl">Recent Transactions</h3>

            <div className="space-y-2 paper rounded-lg">
              <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between paper rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200">
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
              </fieldset>

              <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between paper rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200">
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
              </fieldset>
            </div>
          </TabsContent>

          <TabsContent value="sent" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            Lorem ipsum dolor sit amet, consectetur illo quas modi ullam vitae amet accusamus beatae dicta adipisci nisi soluta laudantium qui voluptate necessitatibus.
          </TabsContent>

          <TabsContent value="claimed" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            <h3 className="font-semibold text-xl">Recent Transactions</h3>

            <div className="space-y-2 paper rounded-lg">
              <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200 cursor-pointer">
                <div className="">
                  <span className={`font-medium`}>Received USDT</span>

                  <div className="flex items-center gap-3">
                    <h6 className="text-sm">0x32....923EfC</h6>
                    <span className="text-blue-700 text-xs bg-blue-100 px-2.5 rounded-full py-0.5">Pending</span>
                  </div>
                </div>

                <div className="text-right">
                  <h6 className={`font-medium text-green-600`}>+109</h6>
                  <span className="text-zinc-500 text-sm">2025-04-23 23:32:56</span>
                </div>
              </fieldset>

              <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200 cursor-pointer">
                <div className="">
                  <span className={`font-medium`}>Received USDC</span>

                  <div className="flex items-center gap-3">
                    <h6 className="text-sm">0x2e....A2d854b</h6>
                    <span className="text-blue-700 text-xs bg-blue-100 px-2.5 rounded-full py-0.5">Pending</span>
                  </div>
                </div>

                <div className="text-right">
                  <h6 className={`font-medium text-green-600`}>+23</h6>
                  <span className="text-zinc-500 text-sm">2025-04-23 23:32:56</span>
                </div>
              </fieldset>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
