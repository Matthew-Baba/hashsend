
export interface TransferFormData {
  token: string;
  amount: string;
  address: string;
  chain: string;
  date: string;
  encryptTransaction: boolean;
  password: string;
  transactionCode: string;
  transactionHash: string;
  transactionStatus: string;
  transactionDate: string;
}

export interface GasEstimation {
  gasPrice: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  gasLimit: bigint;
  totalCost: string;
}