"use client";

const Confirmation = () => {
  return (
    <div className="space-y-8">
      <div className={`w-full space-y-8 px-8 py-6 rounded-lg hs-gradient-br-white border border-gray-600`}>
        <div className="grid grid-cols-1 sm:grid-cols-5 items-center text-xl">
          <div className="col-span-4 text-3xl font-medium">0.5 EDU</div>
          <div className="col-span-1">0.003</div>
        </div>
      </div>

      <div className="">
        <label className="block mb-2 text-white text-lg">Receiver&apos;s Wallet Address</label>
        <label className="input-box">0x2E37d283f5BDb4F825955FA5685b42aa369d7f36</label>
      </div>

      <div className="hs-gradient-br-white px-8 py-6 divide-y divide-gray-500 rounded-md">
        <h5 className="font-semibold uppercase pb-3">Transaction Fee</h5>

        <div className="text-lg py-4 space-y-1.5">
          <div className="grid grid-cols-1 sm:grid-cols-5">
            <div className="col-span-4">Base Network Fee</div>
            <div className="col-span-1">0.003</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5">
            <div className="col-span-4">Service Fee</div>
            <div className="col-span-1">0.003</div>
          </div>
        </div>
      </div>

      <h6 className="text-lg hs-text">This transaction will be encrypted</h6>
    </div>
  )
}

export default Confirmation