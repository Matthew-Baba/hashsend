

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
  totalSentUnclaimedCount: number;
  totalSentReclaimedCount: number;
  totalSentClaimedCount: number;
  totalReceivedClaimedCount: number;
  totalReceivedUnclaimedCount: number;
  totaSentUnclaimedAmount: number;
  totalSentReclaimedAmount: number;
  totalSentClaimedAmount: number;
  totalReceivedClaimedAmount: number;
  totalReceivedUnclaimedAmount: number;
  totalTransactions: number;
  totalAmount: number;
}

export enum TxStatus { Pending, Claimed, Reclaimed }