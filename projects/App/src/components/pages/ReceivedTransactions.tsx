import { useReceivedTransactionHistory } from '@/hooks/useReadAppContract'
import TransactionCard from '../cards/TransactionCard'

const ReceivedTransactions = () => {
  const receivedTransactions = useReceivedTransactionHistory();

  return (
    <div className="space-y-2 paper rounded-lg">
      {receivedTransactions?.length > 0 ?
        receivedTransactions?.map((transaction, index) => (
          <TransactionCard key={index} transaction={transaction} />
        ))
      :
        <div className="">No transaction</div>
      }
    </div>
  )
}

export default ReceivedTransactions