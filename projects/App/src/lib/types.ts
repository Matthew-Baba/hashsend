

export interface TokenBalance {
  name: string;
  balance: number;
}

export interface TransactionType {
  sender: string;
  recipient: string;
  amount: number;
  couponCode: string;
  encryptedPassword: string;
  status: TxStatus;
  timestamp: number;
}

export interface TransactionCountType {
  totalAmount: number;
  totalClaimedAmount: number;
  totalPendingAmount: number;
  totalPendingTransactions: number;
  totalReceivedTransactions: number;
  totalSentTransactions: number;
  totalTransactions: number;
  totalUnclaimedAmount: number;
}

export enum TxStatus { Pending, Claimed, Reclaimed }