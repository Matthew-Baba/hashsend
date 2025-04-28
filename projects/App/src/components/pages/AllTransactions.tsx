import { useAllTransactionHistory } from '@/hooks/useReadAppContract'
import React from 'react'
import TransactionCard from '../cards/TransactionCard'

const AllTransactions = () => {
  const allTransactions = useAllTransactionHistory()

  return (
    <div className="space-y-2 paper rounded-lg">
      {allTransactions?.length > 0 ?
        allTransactions?.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))
      :
        <div className="">No transaction</div>
      }
    </div>
  )
}

export default AllTransactions