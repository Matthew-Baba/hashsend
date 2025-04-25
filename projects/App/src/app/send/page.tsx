"use client";

import { useState } from 'react'
import TransferForm from '@/components/TransferForm/transferForm';
import Confirmation from '@/components/TransferForm/confirmation';
import ConfirmedTransaction from '@/components/TransferForm/confirmed';
import { TransferFormData } from '@/lib/types';
import { isAddress } from '@/functions/validate';
import { useSendToken } from '@/hooks/write/useSendToken';
import { useWriteAppContract } from '@/hooks/services/useContract-viem';
import { parseEther } from 'viem';


const SendToken = () => {
  const [formState, SetFormState] = useState(1)
  const [formData, SetFormData] = useState<TransferFormData>({
    token: 'edu',
    amount: '',
    address: '',
    chain: 'EDU Chain',
    date: new Date().toLocaleDateString(),
    encryptTransaction: false,
    password: '',
    transactionCode: '',
    transactionHash: '',
    transactionStatus: 'pending',
    transactionDate: new Date().toLocaleDateString(),
  })
  const sendToken = useSendToken();
  const writeToContract = useWriteAppContract()

  return (
    <main className="min-h-screen py-14">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg p-14 overflow-hidden">

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
              <TransferForm formData={formData} SetFormData={SetFormData} />
            </div>

            <div className={`w-full duration-75 transition-all absolute top-0 ${formState === 2 ? 'left-0' : 'left-full translate-x-full'}`}>
              <Confirmation formData={formData} />
            </div>

            <div className={`w-full duration-75 transition-all absolute top-0 ${formState === 3 ? 'left-0' : 'left-full translate-x-full'}`}>
              <ConfirmedTransaction />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between">
            {formState < 3 && <button className={`w-full sm:w-3xs btn hs-secondary text-black py-3 text-lg ${formState === 1 && 'opacity-0 pointer-events-none'}`} onClick={() => SetFormState(1)}>Back</button>}

            {formState === 1 && <button className="w-full max-w-sm btn hs-primary py-3 text-lg" onClick={() => {
              if (formData?.amount) {
                if (formData?.address === '' || !isAddress(formData?.address)) {
                  SetFormData({ ...formData, encryptTransaction: true })
                }

                SetFormState(2)
              }
            }}>Proceed</button>}

            {formState === 2 &&
              <button
                className="w-full max-w-sm btn hs-primary py-3 text-lg"
                onClick={() => {
                  writeToContract('sendToken', ['0xd682ECF100f6F4284138AA925348633B0611Ae21', parseEther(formData.amount), '0x2E37d283f5BDb4F825955FA5685b42aa369d7f36', 'hellow32', 'homermaid', BigInt(Date.now() + (7 * 24 * 60 * 60 * 1000)), 'edu', '0xd682ECF100f6F4284138AA925348633B0611Ae21'])
                  // sendToken(formData)
                  // SetFormState(3)
                }}
              >
                Confirm
              </button>
            }

            {formState === 3 && <button className={`w-full sm:w-3xs btn hs-secondary text-black py-3 text-lg`} onClick={() => SetFormState(1)}>Close</button>}
          </div>
        </div>

      </div>
    </main>
  )
}

export default SendToken