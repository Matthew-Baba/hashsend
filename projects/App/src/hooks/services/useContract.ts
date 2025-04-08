import HASHSEND_ABI from "@/constants/abis/hashsend.json"
import { HASHSEND_CONTRACT } from '@/constants/addresses/hashsend'
import { Contract } from 'ethers';
import { ZeroAddress } from 'ethers';
import { getContract } from './contract/contracts';
import { useEthersSigner } from './contract/useEthersSigner';
import { useEthersProvider } from './contract/useEthersProvider';

export const useContract = (): Contract | null => {
  const signer = useEthersSigner();
  const provider = useEthersProvider()
  if (!HASHSEND_CONTRACT || HASHSEND_CONTRACT === ZeroAddress || !HASHSEND_ABI || (!signer || !provider)) return null;

  if (signer) {
    return getContract(HASHSEND_CONTRACT, HASHSEND_ABI, signer);
  }

  return getContract(HASHSEND_CONTRACT, HASHSEND_ABI, provider);
};
