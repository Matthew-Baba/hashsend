import { TransactionType, TxStatus } from '@/lib/types'
import React from 'react'
import PlaceholderCard from '@/components/LoadingCards/PlaceholderCard';
import { formatDate, shortenAddress } from '@/functions/format';
import { convertToDecimalValue, copyToClipboard } from '@/functions/misc-functions';
import { useAccount, useBalance } from 'wagmi';
import { Button } from '../ui/button';
import { useWriteToContract } from '@/hooks/useWriteToContract';
import { Copy, Lock } from 'lucide-react';
import { toast } from 'react-toastify';

const TransactionCard = ({ transaction }: { transaction: TransactionType }) => {
  const { address } = useAccount();
  const { data } = useBalance({ address })
  const { recallTransaction } = useWriteToContract()

  if (!transaction?.sender) return <PlaceholderCard />;

  const status = TxStatus[Number(BigInt(transaction?.status))]
  const amount = convertToDecimalValue(Number(BigInt(transaction?.amount)))
  const statusColor = ["text-blue-700 bg-blue-100", "bg-green-100 text-green-700", "text-red-700 bg-red-100"][Number(BigInt(transaction?.status))]
  const isDebit = transaction?.sender === address

  return (
    <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-3 paper rounded-xl py-4 px-6 border border-gray-100 hover:shadow-md duration-200">
      <div className="">
        <div className="flex items-start gap-x-3">
          <span className={`font-medium`}>{isDebit ? "Sent" : "Received"}  {data?.symbol}</span>
          {transaction?.hasPassword && <span className="" title="You need password to claim"><Lock size={14} /></span>}
        </div>

        <div className="flex items-center gap-3">
          <h6 className="text-sm">{shortenAddress(isDebit ? transaction?.recipient : transaction?.sender)}</h6>
          <span className={`text-xs px-2.5 rounded-full py-0.5 ${statusColor}`}>{status}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 cursor-pointer" onClick={() => copyToClipboard(transaction?.couponCode).then(() => toast.success("Coupon code successfully copied"))}>
        <span className="text-sm border-b border-dashed border-shark-900">{transaction?.couponCode}</span>
        <Copy size={18} />
      </div>

      <div className="sm:text-right">
        <h6 className={`font-medium ${isDebit ? "text-red-600" : "text-green-600"}`}>{isDebit ? "-" : "+" }{amount}</h6>
        <h6 className="text-zinc-500 text-sm">{formatDate(Number(BigInt(transaction?.timestamp)) * 1000)}</h6>

        {isDebit && status === "Pending" &&
          <Button className="btn hs-secondary text-xs sm:px-3 sm:py-1.5 mt-3 sm:mt-0.5" onClick={() => recallTransaction(transaction?.couponCode)}>
            Recall Transfer
          </Button>
        }
      </div>
    </fieldset>
  )
}

export default TransactionCard