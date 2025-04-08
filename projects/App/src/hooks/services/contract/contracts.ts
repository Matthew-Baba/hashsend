import { Contract, FallbackProvider, InterfaceAbi, JsonRpcProvider, JsonRpcSigner, ZeroAddress } from 'ethers'
import { isAddress } from '@/functions/validate';

export const getContract = (contractAddress: string, contractABI: InterfaceAbi, providerOrSigner: JsonRpcProvider | JsonRpcSigner | FallbackProvider): Contract => {
  if (!isAddress(contractAddress) || contractAddress === ZeroAddress) throw Error(`Invalid 'address' parameter '${contractAddress}'.`)

  return new Contract(contractAddress, contractABI, providerOrSigner)
}