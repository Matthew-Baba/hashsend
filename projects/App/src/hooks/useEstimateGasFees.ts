import {
  useEstimateGas,
  useFeeData,
  useAccount,
  useChainId
} from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { useQuery } from '@tanstack/react-query';

export function useTransactionCost(
  to: `0x${string}`,
  value: string, // in ETH
  data?: `0x${string}`
) {
  const { address } = useAccount();
  const chainId = useChainId();

  // Get current fee data (gas prices)
  const { data: feeData } = useFeeData();

  // Estimate gas limit for the transaction
  const { data: gasEstimate } = useEstimateGas({
    account: address,
    to,
    value: parseEther(value),
    data,
  });

  return useQuery({
    queryKey: ['transactionCost', to, value, data, chainId],
    queryFn: () => {
      if (!gasEstimate || !feeData) throw new Error('Missing estimation data');

      // Add 20% buffer to gas limit
      const gasLimitWithBuffer = (gasEstimate * BigInt(120)) / BigInt(100);

      // Calculate fees based on network type (EIP-1559 or legacy)
      const maxFeePerGas = feeData.maxFeePerGas ?? feeData.gasPrice ?? BigInt(0);
      const maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ?? feeData.gasPrice ?? BigInt(0);
      const gasPrice = feeData.gasPrice ?? BigInt(0);

      // Calculate total cost (value + gas fees)
      const totalGasCost = maxFeePerGas * gasLimitWithBuffer;
      const totalCostEth = Number(value) + Number(formatEther(totalGasCost));

      return {
        gasLimit: gasLimitWithBuffer,
        maxFeePerGas,
        maxPriorityFeePerGas,
        gasPrice,
        totalCost: totalCostEth.toFixed(6),
        totalGasCost: formatEther(totalGasCost),
      };
    },
    enabled: !!gasEstimate && !!feeData,
    staleTime: 10_000, // 10 seconds
    refetchInterval: 10_000, // Refresh every 10 seconds
  });
}