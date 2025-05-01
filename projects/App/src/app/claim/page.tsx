"use client";

import TransactionCard from '@/components/cards/TransactionCard';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import AppLayout from '@/components/Layout'
import TransactionDetails from '@/components/pages/TransactionDetails';
import { Button } from '@/components/ui/button'
import { useTransactionDetails, useUserPendingClaims } from '@/hooks/useReadAppContract';
import { useWriteToContract } from '@/hooks/useWriteToContract';
import { TransactionType } from '@/lib/types';
import { useState } from 'react';
import { useAccount } from 'wagmi';

const Claim = () => {
  const { address } = useAccount();
  const [couponCode, setCouponCode] = useState('');
  const [password, setPassword] = useState('');
  const [transactionInfo, setTransactionInfo] = useState<TransactionType>();
  const pendingClaims = useUserPendingClaims();
  const fetchTransactionDetails = useTransactionDetails()
  const { claimToken } = useWriteToContract()

  const fetchTransaction = (identifier: string) => {
    if (identifier.length <= 10) {
      setCouponCode(identifier)
    }

    setTransactionInfo(undefined)

    if (identifier?.length === 10) {
      fetchTransactionDetails(identifier).then(result => {
        if (typeof result !== "boolean") {

          console.log("Transaction details:", result);
          setTransactionInfo(result as TransactionType);
          return;
        }

        console.error("Error fetching transaction details");
      })
    }
  }

  return (
    <AppLayout>
      <main className="app-width space-y-8 pt-2">
        <section className="">
          <h4 className="text-4xl font-bold">Claim</h4>
          <p className="faded-text font-medium text-sm">Claim tokens with ease.</p>
        </section>

        <section className="grid grid-cols-5 gap-4">
          <aside className="col-span-5 sm:col-span-2 bg-white p-4 sm:p-8 rounded-lg h-fit">
            <h6 className="font-semibold text-xl">Claim Transferred Tokens</h6>

            <div className="space-y-6 mt-4">
              <fieldset className="">
                <span className="font-medium faded-text">Coupon, Sender&apos;s Address or Transaction ID</span>
                <input type="text" className="input-box" placeholder="Coupon, Sender&apos;s Address or Transaction ID"
                  value={couponCode}
                  onChange={(e) => fetchTransaction(e.target.value)}
                />
              </fieldset>

              <fieldset className="">
                <span className="font-medium faded-text">Password (required if set by sender)</span>
                <input type="text" className="input-box" placeholder="Enter password to approve claim"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </fieldset>

              <fieldset className="pt-4">
                {!address ?
                  <ConnectWalletButton customClass="w-full py-3" />
                :
                  <Button className={`btn hs-primary w-full py-3`}
                    onClick={() => {
                      claimToken(couponCode, password, transactionInfo?.hasPassword as boolean, transactionInfo?.sender as string).then(result => {
                        if (result) {
                          setCouponCode("")
                          setPassword("")
                        }
                      })
                    }}
                  >Claim Transferred Token</Button>
                }
              </fieldset>
            </div>

            {address && transactionInfo?.sender && (
              <TransactionDetails transactionInfo={transactionInfo} />
            )}
          </aside>

          <aside className="col-span-5 sm:col-span-3 bg-white p-4 sm:p-8 rounded-lg space-y-6">
            {address ?
              <>
                <div className="">
                  <h6 className="font-medium">Click on any transaction below to prefill the coupon code</h6>
                  <p className="faded-text font-medium text-sm">You can also enter the coupon code manually.</p>
                </div>

                <div className="space-y-2">
                  {pendingClaims?.length ?
                    pendingClaims?.map((claim, index) => (
                      <TransactionCard key={index} transaction={claim} />
                    ))
                    :
                    <div className="">
                      No claims
                    </div>
                  }
                </div>
              </>
            :
              <div className="flex flex-col items-center justify-center h-full">
                <h6 className="font-medium">Connect your wallet to view your pending claims</h6>
                <p className="faded-text font-medium text-sm">You can also enter the coupon code manually.</p>
              </div>
            }
          </aside>
        </section>
      </main>
    </AppLayout>
  )
}

export default Claim