import { TransactionType, TxStatus } from '@/lib/types'
import React from 'react'
import PlaceholderCard from './PlaceholderCard';
import { formatDate, shortenAddress } from '@/functions/format';
import { convertToDecimalValue } from '@/functions/misc-functions';
import { useAccount, useBalance } from 'wagmi';

const PendingClaimsCard = ({ claim }: { claim: TransactionType }) => {
  const { address } = useAccount();
  const { data } = useBalance({address})

  if (!claim?.sender) return <PlaceholderCard />;

  return (
    <fieldset className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl py-3 px-6 border border-gray-100 hover:shadow-md duration-200 cursor-pointer">
      <div className="">
        <span className={`font-medium`}>Received {data?.symbol}</span>

        <div className="flex items-center gap-3">
          <h6 className="text-sm">{shortenAddress(claim?.sender)}</h6>
          <span className="text-blue-700 text-xs bg-blue-100 px-2.5 rounded-full py-0.5">{TxStatus[Number(BigInt(claim?.status))]}</span>
        </div>
      </div>

      <div className="text-right">
        <h6 className={`font-medium text-green-600`}>+{convertToDecimalValue(Number(BigInt(claim?.amount)), Number(data?.decimals))}</h6>
        <span className="text-zinc-500 text-sm">{formatDate(Number(BigInt(claim?.timestamp)) * 1000)}</span>
      </div>
    </fieldset>
  )
}

export default PendingClaimsCard