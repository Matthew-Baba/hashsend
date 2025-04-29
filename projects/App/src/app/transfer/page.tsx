"use client";

import AppLayout from '@/components/Layout'
import { Button } from '@/components/ui/button';
import { useWriteToContract } from '@/hooks/useWriteToContract'
import { ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { useAccount, useBalance } from 'wagmi';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';

const Transfers = () => {
  const { address } = useAccount();
  const { sendToken } = useWriteToContract()
  const [amount, setAmount] = useState('')
  const [recipientAddress, setRecipientAddress] = useState('')
  const [password, setPassword] = useState('')
  const { data } = useBalance({ address });

  return (
    <AppLayout>
      <main className="app-width max-w-3xl space-y-8">
        <section className="">
          <h4 className="text-4xl font-bold">Transfer</h4>
          <p className="faded-text font-medium text-sm">Send tokens to another anyone across the world. You can also set a password for the transaction.</p>
        </section>

        <section className="bg-white p-4 sm:p-8 rounded-lg">
          <h6 className="font-medium text-xl">Send tokens</h6>

          <aside className="space-y-6 mt-4">
            <fieldset className="">
              <span className="font-medium faded-text">Amount</span>
              <input type="text" className="input-box" placeholder="0.0" value={amount}
                onChange={(e) => !isNaN(Number(e.target.value)) && setAmount(e.target.value)}
              />

              <div className="space-x-1.5 text-sm">
                <span className="faded-text">Balance:</span>
                <span className="font-medium">{data?.formatted || 0} {data?.symbol}</span>
              </div>
            </fieldset>

            <fieldset className="">
              <span className="font-medium faded-text">Recipient&apos;s Wallet Address (optional)</span>
              <input type="text" className="input-box" placeholder="0x...." value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
              />
            </fieldset>

            <fieldset className="">
              <span className="font-medium faded-text">Password (optional)</span>
              <input type="text" className="input-box" placeholder="Secure transaction with password" value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <fieldset className="pt-4">
              {!address ?
                <ConnectWalletButton customClass="w-full py-3" />
              :
                <Button className="btn hs-primary w-full flex items-center place-content-center gap-x-2 py-3"
                  onClick={() => {
                    sendToken(amount, recipientAddress, password).then((res) => {
                      if (res) {
                        setAmount('')
                        setRecipientAddress('')
                        setPassword('')
                      }
                    })
                  }}
                >
                  <ShieldCheck /> Send Encrypted Transfer
                </Button>
              }
            </fieldset>
          </aside>

          <aside className="mt-6 border-t pt-3 space-y-3">
            <h6 className="font-medium text-xl">Important Notes</h6>

            <div className="spayce-y-2">
              <h6 className="faded-text text-sm">Note: The recipient address is optional. If not provided, the transaction will be encrypted with a password.</h6>
              <h6 className="faded-text text-sm">Please ensure you have enough balance to cover the transaction fee.</h6>
              <h6 className="faded-text text-sm">You can also use the password to decrypt the transaction later.</h6>
            </div>
          </aside>
        </section>
      </main>
    </AppLayout>
  )
}

export default Transfers