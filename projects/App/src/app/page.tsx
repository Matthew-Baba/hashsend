"use client"
import TransactionCard from "@/components/cards/TransactionCard";
import AppLayout from "@/components/Layout";
import { useAllTransactionHistory, useTransactionCount } from "@/hooks/useReadAppContract";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAccount } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const allTransactions = useAllTransactionHistory();
  const transactionInfo = useTransactionCount();

  return (
    <AppLayout>
      <main className="app-width space-y-8">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <h3 className="font-medium mb-3">Total Sent</h3>

            <div className="text-4xl font-bold hs-text-gradient">{transactionInfo?.totalSentTransactions}</div>

            <div className="mt-2 font-medium">
              {/* <span className="text-gray-500">{transactionInfo?.totalReceivedTransactions}</span> */}
            </div>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <h3 className="font-medium mb-3">Total Claims</h3>

            <div className="text-4xl font-bold hs-text-gradient">{transactionInfo?.totalReceivedTransactions}</div>

            <div className="mt-2 font-medium">
              {/* <span className="text-gray-500">{transactionInfo?.totalClaimedAmount}</span> */}
            </div>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <h3 className="font-medium mb-3">Pending Claims</h3>

            <div className="text-4xl font-bold hs-text-gradient">{transactionInfo?.totalPendingTransactions}</div>

            <div className="mt-2 font-medium">
              {/* <span className="text-gray-500">{transactionInfo?.totalPendingAmount}</span> */}
            </div>
          </aside>
        </section>

        <section className="space-y-4">
          <h3 className="font-semibold text-xl">Recent Transactions</h3>

          {!address ?
            <div className="flex items-center justify-center min-h-40">
              Wallet is not connected. Please connect your wallet to view transactions.
            </div>
          :
            <>
              <div className="space-y-2">
                {allTransactions?.slice(0, 6)?.map((transaction, index) => (
                  <TransactionCard key={index} transaction={transaction} />
                ))}
              </div>

              <div className="">
                <Link href="/history" className="flex items-center gap-2 text-turquoise-blue-500 font-semibold">
                  <span>View all transactions</span>
                  <ArrowRight size={16} className="text-turquoise-blue-500" />
                </Link>
              </div>
            </>
          }
        </section>
      </main>
    </AppLayout>
  );
}
