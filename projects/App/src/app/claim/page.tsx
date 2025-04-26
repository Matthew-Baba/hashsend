
import AppLayout from '@/components/Layout'

const Claim = () => {
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
                <input type="text" className="input-box" placeholder="Coupon, Sender&apos;s Address or Transaction ID" />
              </fieldset>

              <fieldset className="">
                <span className="font-medium faded-text">Password (required if set by sender)</span>
                <input type="text" className="input-box" placeholder="Enter password to approve claim" />
              </fieldset>

              <fieldset className="pt-4">
                <button className="btn hs-primary w-full py-3">Claim Transferred Token</button>
              </fieldset>
            </div>
          </aside>

          <aside className="col-span-3 sm:col-span-2 bg-white p-4 sm:p-8 rounded-lg space-y-6">
            <div className="">
              <h6 className="font-medium">Click on any transaction below to prefill the coupon code</h6>
              <p className="faded-text font-medium text-sm">You can also enter the coupon code manually.</p>
            </div>

            <div className="space-y-2">
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
          </aside>
        </section>
      </main>
    </AppLayout>
  )
}

export default Claim