"use client"
import PlaceholderCard from "@/components/cards/PlaceholderCard";
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
            <h3 className="font-semibold text-xl">All Transactions</h3>

            <Suspense fallback={<PlaceholderCard />}>
              <AllTransactions />
            </Suspense>
          </TabsContent>

          <TabsContent value="sent" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            <h3 className="font-semibold text-xl">Sent Transactions</h3>

            <Suspense fallback={<PlaceholderCard />}>
              <SentTransactions />
            </Suspense>
          </TabsContent>

          <TabsContent value="claimed" className="space-y-2 paper p-4 sm:p-8 rounded-lg min-h-80">
            <h3 className="font-semibold text-xl">Recent Transactions</h3>

            <Suspense fallback={<PlaceholderCard />}>
              <ReceivedTransactions />
            </Suspense>
          </TabsContent>
        </Tabs>
      </main>
    </AppLayout>
  );
}
