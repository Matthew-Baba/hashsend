import { TransactionType, TxStatus } from '@/lib/types'
import React from 'react'
import PlaceholderCard from './PlaceholderCard';
import { formatDate, shortenAddress } from '@/functions/format';
import { convertToDecimalValue } from '@/functions/misc-functions';
import { useAccount, useBalance } from 'wagmi';
import { Button } from '../ui/button';
import { useWriteToContract } from '@/hooks/useWriteToContract';

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
    <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between paper rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200">
      <div className="">
        <span className={`font-medium`}>{isDebit ? "Sent" : "Received"}  {data?.symbol}</span>

        <div className="flex items-center gap-3">
          <h6 className="text-sm">{shortenAddress(isDebit ? transaction?.recipient : transaction?.sender)}</h6>
          <span className={`text-xs px-2.5 rounded-full py-0.5 ${statusColor}`}>{status}</span>
        </div>
      </div>

      <div className="text-right">
        <h6 className={`font-medium ${isDebit ? "text-red-600" : "text-green-600"}`}>{isDebit ? "-" : "+" }{amount}</h6>
        <h6 className="text-zinc-500 text-sm">{formatDate(Number(BigInt(transaction?.timestamp)) * 1000)}</h6>

        {isDebit && status === "Pending" &&
          <Button className="btn hs-secondary text-xs" onClick={() => recallTransaction(transaction?.couponCode)}>
            Recall Transfer
          </Button>
        }
      </div>
    </fieldset>
  )
}

export default TransactionCard