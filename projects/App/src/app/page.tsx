"use client"
import DashboardCard from "@/components/cards/DashboardCard";
import TransactionCard from "@/components/cards/TransactionCard";
import AppLayout from "@/components/Layout";
import { useAllTransactionHistory, useTransactionCount } from "@/hooks/useReadAppContract";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAccount, useBalance } from "wagmi";

export default function Home() {
  const { address, isConnecting } = useAccount();
  const { data } = useBalance({ address });
  const allTransactions = useAllTransactionHistory();
  const transactionInfo = useTransactionCount();

  return (
    <AppLayout>
      <main className="app-width space-y-16">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <DashboardCard
            isConnecting={isConnecting}
            header={"Total Sent"}
            tagline={"Sent out transactions that have been claimed"}
            amount={transactionInfo?.totalSentClaimedAmount}
            transactionCount={transactionInfo?.totalSentClaimedCount}
            symbol={data?.symbol}
          />

          <DashboardCard
            isConnecting={isConnecting}
            header={"Total Received"}
            tagline={"Received transactions you have claimed to your wallet"}
            amount={transactionInfo?.totalReceivedClaimedAmount}
            transactionCount={transactionInfo?.totalReceivedClaimedCount}
            symbol={data?.symbol}
          />

          <DashboardCard
            isConnecting={isConnecting}
            header={"Pending Claims"}
            tagline={"Received transactions you have not claimed"}
            amount={transactionInfo?.totalReceivedUnclaimedAmount}
            transactionCount={transactionInfo?.totalReceivedUnclaimedCount}
            symbol={data?.symbol}
          />

          <DashboardCard
            isConnecting={isConnecting}
            header={"Total Escrow"}
            tagline={"Transactions you sent that are unclaimed"}
            amount={transactionInfo?.totaSentUnclaimedAmount}
            transactionCount={transactionInfo?.totalSentUnclaimedCount}
            symbol={data?.symbol}
          />

          <DashboardCard
            isConnecting={isConnecting}
            header={"Total Reclaims"}
            tagline={"Transactions you sent out and recalled"}
            amount={transactionInfo?.totalSentReclaimedAmount}
            transactionCount={transactionInfo?.totalSentReclaimedCount}
            symbol={data?.symbol}
          />
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
                {allTransactions?.slice(0, 4)?.map((transaction, index) => (
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
