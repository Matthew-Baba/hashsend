"use client"

import { useContract } from "./services/useContract"
import { useCallback } from "react"
import { useSetRecoilState } from "recoil"
import { loadingState } from "@/app/state/atoms/atom"
import { extractErrorMessage } from "@/functions/misc-functions"
import { toast } from "react-toastify"
import { toast as customToast } from "@/components/ui/use-toast"
import { useAccount } from "wagmi"
import { ethers, keccak256, toUtf8Bytes, ZeroAddress } from "ethers"
import { isAddress } from "@/functions/validate"

export const useWriteToContract = () => {
  const { address, chain } = useAccount()
  const contract = useContract()
  const setIsLoading = useSetRecoilState(loadingState)
  const explorerURL = chain?.blockExplorers?.default.url

  const sendToken = useCallback(
    async (amount: string, recipientAddress: string, password: string) => {
      setIsLoading(true)
      recipientAddress = isAddress(recipientAddress) ? recipientAddress : ZeroAddress

      if (!address) {
        toast.error("No wallet connected")
        setIsLoading(false)
        return false;
      }

      if (!amount) {
        toast.error("Amount is required")
        setIsLoading(false)
        return false;
      }

      if (recipientAddress == ZeroAddress && !password) {
        toast.info("Password is required when no recipient address is provided")
        setIsLoading(false)
        return false;
      }

      const encryptedPassword = keccak256(toUtf8Bytes(password));


      try {
        const sendTokenCall = await contract?.sendToken(recipientAddress, 'couponCode', encryptedPassword, {value: ethers.parseEther(amount)});
        const sendTokenCallReceipt = await sendTokenCall?.wait();

        customToast({
          variant: "success",
          description: "Transaction successfully executed",
          action: {url: `${explorerURL}/tx/${sendTokenCallReceipt?.hash || sendTokenCallReceipt?.transactionHash}`, label: "View in explorer"}
        })

        console.log("Transaction receipt:", sendTokenCallReceipt);

        return true
      } catch (sendTokenError: unknown) {
        console.error("Error sending token:", sendTokenError);
        const errorMessage = extractErrorMessage(sendTokenError instanceof Error ? sendTokenError : new Error("Unknown error"));
        toast.error(errorMessage)
        return false
      } finally {
        setIsLoading(false)
      }
    }, [address, contract, explorerURL, setIsLoading]
  )

  return {
    sendToken
  }
}