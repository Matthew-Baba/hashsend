"use client";

import { useState } from 'react'
import TransferForm from './transferForm';
import Confirmation from './confirmation';
import ConfirmedTransaction from './confirmed';


const TransferModal = () => {
  const [formState, SetFormState] = useState(1)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Send</h2>

        <div className="flex items-center gap-x-2">
          <div className={`h-1 sm:w-10 w-6 bg-gray-500 rounded-full ${formState === 1 && 'hs-primary'}`}></div>
          <div className={`h-1 sm:w-10 w-6 bg-gray-500 rounded-full ${formState === 2 && 'hs-primary'}`}></div>
          <div className={`h-1 sm:w-10 w-6 bg-gray-500 rounded-full ${formState === 3 && 'hs-primary'}`}></div>
        </div>
      </div>

      <div className="relative min-h-[27rem]">
        <div className={`w-full duration-75 transition-all absolute top-0 ${formState === 1 ? 'right-0' : 'right-full -translate-x-full'}`}>
          <TransferForm />
        </div>

        <div className={`w-full duration-75 transition-all absolute top-0 ${formState === 2 ? 'left-0' : 'left-full translate-x-full'}`}>
          <Confirmation />
        </div>

        <div className={`w-full duration-75 transition-all absolute top-0 ${formState === 3 ? 'left-0' : 'left-full translate-x-full'}`}>
          <ConfirmedTransaction />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between">
        {formState < 3 && <button className={`w-full sm:w-3xs btn hs-secondary text-black py-3 text-lg ${formState === 1 && 'opacity-0 pointer-events-none'}`} onClick={() => SetFormState(1)}>Back</button>}

        {formState === 1 && <button className="w-full max-w-sm btn hs-primary py-3 text-lg" onClick={() => SetFormState(2)}>Proceed</button>}

        {formState === 2 &&
          <button
            className="w-full max-w-sm btn hs-primary py-3 text-lg"
            onClick={() => SetFormState(3)}
          >
            Confirm
          </button>
        }

        {formState === 3 && <button className={`w-full sm:w-3xs btn hs-secondary text-black py-3 text-lg`} onClick={() => SetFormState(1)}>Close</button>}
      </div>
    </div>
  )
}

export default TransferModal