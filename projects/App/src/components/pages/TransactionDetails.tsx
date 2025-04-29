import React from 'react'
import { TransactionType, TxStatus } from '@/lib/types';
import { ZeroAddress } from 'ethers';
import { convertToDecimalValue } from '@/functions/misc-functions';
import { shortenAddress } from '@/functions/format';

const TransactionDetails = ({ transactionInfo }: { transactionInfo: TransactionType }) => {
  const status = TxStatus[Number(BigInt(transactionInfo?.status))]
  const amount = convertToDecimalValue(Number(BigInt(transactionInfo?.amount)))
  const statusColor = ["text-blue-700 bg-blue-100", "bg-green-100 text-green-700", "text-red-700 bg-red-100"][Number(BigInt(transactionInfo?.status))]

  return (
    <div className="border-t border-gray-200 mt-6 pt-4">
      <h6 className="font-semibold text-xl">Transaction Details</h6>
      <span className={`text-xs px-2.5 rounded-full py-0.5 ${statusColor}`}>{status}</span>

      <div className="grid grid-cols-2 gap-y-3 mt-4">
        <div className="col-span-1 -space-y-1">
          <h6 className="faded-text font-medium">Sender</h6>
          <h6 className="text-sm">{shortenAddress(transactionInfo?.sender as string)}</h6>
        </div>

        <div className="col-span-1 -space-y-1">
          <h6 className="faded-text font-medium">Recipient</h6>
          <h6 className="text-sm">{transactionInfo?.recipient as string === ZeroAddress ? "Not Specified" : shortenAddress(transactionInfo?.recipient as string)}</h6>
        </div>

        <div className="col-span-1 -space-y-1">
          <h6 className="faded-text font-medium">Transaction ID</h6>
          <h6 className="text-sm">{transactionInfo?.couponCode}</h6>
        </div>

        <div className="col-span-1 -space-y-1">
          <h6 className="faded-text font-medium">Amount</h6>
          <h6 className="text-sm">{amount}</h6>
        </div>
      </div>
    </div>
  )
}

export default TransactionDetails