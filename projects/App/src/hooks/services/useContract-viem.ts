// import ERC20_TOKEN_ABI from '@/constants/abis/erc20-token.json';
import HASHSEND_ABI from "@/constants/abis/hashsend.json"
import { HASHSEND_CONTRACT } from '@/constants/addresses/hashsend'
import { useReadContract, useWriteContract } from 'wagmi';
import { useCallback, useEffect, useState } from "react"

export const useReadAppContract = (functionName: string, args: unknown[] = []) => {
  const [isMounted, setIsMounted] = useState(false);

  const result = useReadContract({
    abi: HASHSEND_ABI,
    address: HASHSEND_CONTRACT,
    functionName,
    args,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return { data: null, loading: true, error: null };
  }

  return {
    data: result.data as unknown,
    loading: result.isPending,
    error: result.error,
  };
};

export const useWriteAppContract = () => {
  const { writeContractAsync } = useWriteContract()

  const writeToContract = useCallback(
    async (functionName: string, args: unknown[] = []) => {
      try {
        const txHash = await writeContractAsync({
          abi: HASHSEND_ABI,
          address: HASHSEND_CONTRACT,
          functionName: functionName,
          args
        })

        return txHash;
      } catch (error) {
        console.error("Error writing to contract:", error)
        throw error
      }
    }, [writeContractAsync]
  )

  return writeToContract
}