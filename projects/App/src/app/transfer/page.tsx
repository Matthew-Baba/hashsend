
import AppLayout from '@/components/Layout'
import { ShieldCheck } from 'lucide-react'

const Transfers = () => {
  return (
    <AppLayout>
      <main className="app-width max-w-3xl space-y-8">
        <section className="">
          <h4 className="text-4xl font-bold">Transfer</h4>
          <p className="faded-text font-medium text-sm">Send and receive tokens with ease.</p>
        </section>

        <section className="bg-white p-4 sm:p-8 rounded-lg">
          <h6 className="font-medium">Send tokens</h6>

          <div className="space-y-6 mt-4">
            <fieldset className="">
              <span className="font-medium faded-text">Amount</span>
              <input type="text" className="input-box" placeholder="0.0" />
            </fieldset>

            <fieldset className="">
              <span className="font-medium faded-text">Recipient&apos;s Wallet Address (optional)</span>
              <input type="text" className="input-box" placeholder="0x...." />
            </fieldset>

            <fieldset className="">
              <span className="font-medium faded-text">Password (optional)</span>
              <input type="text" className="input-box" placeholder="Secure transaction with password" />
            </fieldset>

            <fieldset className="pt-4">
              <button className="btn hs-primary w-full flex items-center place-content-center gap-x-2 py-3">
                <ShieldCheck /> Send Encrypted Transfer
              </button>
            </fieldset>
          </div>
        </section>
      </main>
    </AppLayout>
  )
}

export default Transfers