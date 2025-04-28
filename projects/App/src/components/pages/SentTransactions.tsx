import { useSentTransactionHistory } from '@/hooks/useReadAppContract'
import TransactionCard from '../cards/TransactionCard'

const SentTransactions = () => {
  const sentTransactions = useSentTransactionHistory();

  return (
    <div className="space-y-2 paper rounded-lg">
      {sentTransactions?.length > 0 ?
        sentTransactions?.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))
      :
        <div className="">No transaction</div>
      }
    </div>
  )
}

export default SentTransactions