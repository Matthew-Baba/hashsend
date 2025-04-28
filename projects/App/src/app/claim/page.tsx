"use client";

import PendingClaimsCard from '@/components/cards/PendingClaimsCard';
import AppLayout from '@/components/Layout'
import { Button } from '@/components/ui/button'
import { useUserPendingClaims } from '@/hooks/useReadAppContract';
import { useState } from 'react';

const Claim = () => {
  const [couponCode, setCouponCode] = useState('');
  const [password, setPassword] = useState('');
  const pendingClaims = useUserPendingClaims();

  return (
    <AppLayout>
      <main className="app-width space-y-8 pt-2">
        <section className="">
          <h4 className="text-4xl font-bold">Claim</h4>
          <p className="faded-text font-medium text-sm">Claim tokens with ease.</p>
        </section>

        <section className="grid grid-cols-3 gap-4">
          <aside className="col-span-3 sm:col-span-1 bg-white p-4 sm:p-8 rounded-lg h-fit">
            <h6 className="font-semibold text-xl">Claim Transferred Tokens</h6>

            <div className="space-y-6 mt-4">
              <fieldset className="">
                <span className="font-medium faded-text">Coupon, Sender&apos;s Address or Transaction ID</span>
                <input type="text" className="input-box" placeholder="Coupon, Sender&apos;s Address or Transaction ID"
                  onChange={(e) => setCouponCode(e.target.value)}
                  value={couponCode}
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
                <Button className="btn hs-primary w-full py-3"
                >Claim Transferred Token</Button>
              </fieldset>
            </div>
          </aside>

          <aside className="col-span-3 sm:col-span-2 bg-white p-4 sm:p-8 rounded-lg space-y-6">
            <div className="">
              <h6 className="font-medium">Click on any transaction below to prefill the coupon code</h6>
              <p className="faded-text font-medium text-sm">You can also enter the coupon code manually.</p>
            </div>

            <div className="space-y-2">
              {pendingClaims?.length ?
                pendingClaims?.map((claim, index) => (
                  <PendingClaimsCard key={index} claim={claim} />
                ))
              :
                <div className="">
                  No claims
                </div>
              }
            </div>
          </aside>
        </section>
      </main>
    </AppLayout>
  )
}

export default Claim