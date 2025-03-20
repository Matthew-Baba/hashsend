"use client";

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
import TransferForm from './transferForm';
import Confirmation from './confirmation';
import ConfirmedTransaction from './confirmed';


const TransferModal = () => {
  const [formState, SetFormState] = useState(1)

  return (
    <Dialog>
      <DialogTrigger className="w-full place-self-center">
        <label className="btn hs-primary px-20 py-3.5">Send</label>
      </DialogTrigger>

      <DialogContent className="hs-gradient-br max-w-3xl w-full overflow-hidden">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="">
            <div className="relative inline-block">
              <button className="flex items-center gap-2 px-4 py-2 text-white bg-[#1e2330] rounded-md border border-gray-700">
                <div className="w-6 h-6 rounded-full bg-[#1e2330]"></div>
                <span className="font-medium">Network</span>
                <ChevronDown className="w-5 h-5" />
              </button>
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
            {formState < 3 && <button className={`w-full sm:w-3xs btn hs-secondary py-3 text-lg ${formState === 1 && 'opacity-0 pointer-events-none'}`} onClick={() => SetFormState(1)}>Back</button>}
            
            {formState === 1 && <button className="w-full max-w-sm btn hs-primary py-3 text-lg" onClick={() => SetFormState(2)}>Proceed</button>}

            {formState === 2 &&
              <button
                className="w-full max-w-sm btn hs-primary py-3 text-lg"
                onClick={() => SetFormState(3)}
              >
                Confirm
              </button>
            }

            {formState === 3 && <button className={`w-full sm:w-3xs btn hs-secondary py-3 text-lg`} onClick={() => SetFormState(1)}>Close</button>}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TransferModal