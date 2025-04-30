"use client"
import PlaceholderCard from "@/components/LoadingCards/PlaceholderCard";
import AppLayout from "@/components/Layout";
import AllTransactions from "@/components/pages/AllTransactions";
import ReceivedTransactions from "@/components/pages/ReceivedTransactions";
import SentTransactions from "@/components/pages/SentTransactions";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Suspense } from "react";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();

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
            <h3 className="font-semibold text-xl">All Transactions</h3>

            {address ?
              <Suspense fallback={<PlaceholderCard />}>
                <AllTransactions />
              </Suspense>
            :
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-2xl font-semibold">Connect your wallet to view transactions</h3>
                <p className="faded-text text-sm">You need to connect your wallet to view your transaction history.</p>
              </div>
            }
          </TabsContent>

          <TabsContent value="sent" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            <h3 className="font-semibold text-xl">Sent Transactions</h3>

            {address ?
              <Suspense fallback={<PlaceholderCard />}>
                <SentTransactions />
              </Suspense>
            :
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-2xl font-semibold">Connect your wallet to view transactions</h3>
                <p className="faded-text text-sm">You need to connect your wallet to view your transaction history.</p>
              </div>
            }
          </TabsContent>

          <TabsContent value="claimed" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            <h3 className="font-semibold text-xl">Claimed Transactions</h3>

            {address ?
              <Suspense fallback={<PlaceholderCard />}>
                <ReceivedTransactions />
              </Suspense>
            :
              <div className="flex flex-col items-center justify-center h-full">
                <h3 className="text-2xl font-semibold">Connect your wallet to view transactions</h3>
                <p className="faded-text text-sm">You need to connect your wallet to view your transaction history.</p>
              </div>
            }
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
