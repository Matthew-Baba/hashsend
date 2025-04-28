

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

export enum TxStatus { Pending, Claimed, Reclaimed }