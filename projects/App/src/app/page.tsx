"use client"
import TransactionCard from "@/components/cards/TransactionCard";
import AppLayout from "@/components/Layout";
import { convertToDecimalValue } from "@/functions/misc-functions";
import { useAllTransactionHistory, useTransactionCount } from "@/hooks/useReadAppContract";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAccount, useBalance } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const { data } = useBalance({ address });
  const allTransactions = useAllTransactionHistory();
  const transactionInfo = useTransactionCount();

  return (
    <AppLayout>
      <main className="app-width space-y-16">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <div className="mb-3 -space-y-1">
              <h3 className="font-medium">Total Sent</h3>
              <h6 className="faded-text text-sm">Sent out transactions that have been claimed</h6>
            </div>

            <div className="text-4xl font-bold hs-text-gradient">
              {convertToDecimalValue(transactionInfo?.totalSentClaimedAmount as number) || 0} <span className="text-sm">{data?.symbol}</span>
            </div>

            <h6 className="mt-2 font-medium faded-text">{transactionInfo?.totalSentClaimedCount || 0} transactions</h6>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <div className="mb-3 -space-y-1">
              <h3 className="font-medium">Total Received</h3>
              <h6 className="faded-text text-sm">Received transactions you have claimed to your wallet</h6>
            </div>

            <div className="text-4xl font-bold hs-text-gradient">
              {convertToDecimalValue(transactionInfo?.totalReceivedClaimedAmount as number) || 0} <span className="text-sm">{data?.symbol}</span>
            </div>

            <h6 className="mt-2 font-medium faded-text">{transactionInfo?.totalReceivedClaimedCount || 0} transactions</h6>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <div className="mb-3 -space-y-1">
              <h3 className="font-medium">Pending Claims</h3>
              <h6 className="faded-text text-sm">Received transactions you have not claimed</h6>
            </div>

            <div className="text-4xl font-bold hs-text-gradient">
              {convertToDecimalValue(transactionInfo?.totalReceivedUnclaimedAmount as number) || 0}  <span className="text-sm">{data?.symbol}</span>
            </div>

            <h6 className="mt-2 font-medium faded-text">{transactionInfo?.totalReceivedUnclaimedCount || 0} transactions</h6>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <div className="mb-3 -space-y-1">
              <h3 className="font-medium">Total Escrow</h3>
              <h6 className="faded-text text-sm">Transactions you sent that are unclaimed</h6>
            </div>

            <div className="text-4xl font-bold hs-text-gradient">
              {convertToDecimalValue(transactionInfo?.totaSentUnclaimedAmount as number) || 0} <span className="text-sm">{data?.symbol}</span>
            </div>

            <h6 className="mt-2 font-medium faded-text">{transactionInfo?.totalSentUnclaimedCount || 0} transactions</h6>
          </aside>

          <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
            <div className="mb-3 -space-y-1">
              <h3 className="font-medium">Total Reclaims</h3>
              <h6 className="faded-text text-sm">Transactions you sent out and recalled</h6>
            </div>

            <div className="text-4xl font-bold hs-text-gradient">
              {convertToDecimalValue(transactionInfo?.totalSentReclaimedAmount as number) || 0} <span className="text-sm">{data?.symbol}</span>
            </div>

            <h6 className="mt-2 font-medium faded-text">{transactionInfo?.totalSentReclaimedCount || 0} transactions</h6>
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
