"use client";

import { isAddress } from "@/functions/validate";
import { TransferFormData } from "@/lib/types";

const Confirmation = ({ formData }: { formData: TransferFormData }) => {
  return (
    <div className="space-y-6">
      <div className={`w-full space-y-8 p-4 sm:px-8 sm:py-6 rounded-lg hs-gradient-br-white border border-gray-600`}>
        <div className="grid grid-cols-1 sm:grid-cols-5 items-center text-xl">
          <div className="col-span-4 text-3xl font-medium uppercase">{formData?.amount} {formData?.token}</div>
          <div className="col-span-1">0.003</div>
        </div>
      </div>

      <div className="">
        <label className="block mb-2 text-white text-lg">Receiver&apos;s Wallet Address</label>
        <label className="input-box bg-gray-100 border-transparent">{isAddress(formData?.address) ? formData?.address : 'No or invalid receiver wallet'}</label>
      </div>

      <div className="bg-gray-100 py-6 divide-y divide-gray-300 rounded-md p-4 text-gray-500">
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

      <h6 className="text-lg hs-text">
        {formData?.encryptTransaction ?
          <span className="hs-text">This transaction will be encrypted</span>
        :
          <span className="text-red-400">This transaction will not be encrypted</span>
        }
      </h6>
    </div>
  )
}

export default Confirmation