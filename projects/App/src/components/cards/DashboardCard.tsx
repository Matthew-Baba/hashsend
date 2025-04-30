import { convertToDecimalValue } from '@/functions/misc-functions'
import React from 'react'
import DashboardSkeleton from '../LoadingCards/DashboardSkeleton'

const DashboardCard = ({ isConnecting, header, tagline, amount, transactionCount, symbol }: { isConnecting: boolean, header: string, tagline: string, amount: number, transactionCount: number, symbol?: string}) => {
  return (
    isConnecting?
      <DashboardSkeleton />
    :
      <aside className="rounded-lg bg-white border border-gray-100 px-4 py-6">
        <div className="mb-3 -space-y-1">
          <h3 className="font-medium">{header}</h3>
          <h6 className="faded-text text-sm">{tagline}</h6>
        </div>

        <div className="text-4xl font-bold hs-text-gradient">
          {convertToDecimalValue(amount as number) || 0} <span className="text-sm">{symbol || "PTT"}</span>
        </div>

        <h6 className="mt-2 font-medium faded-text">{transactionCount || 0} transactions</h6>
      </aside>
  )
}

export default DashboardCard