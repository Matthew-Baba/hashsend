"use client"

import { useContract } from "./services/useContract"
import { useCallback } from "react"
import { useSetRecoilState } from "recoil"
import { loadingState } from "@/app/state/atoms/atom"
import { extractErrorMessage, generateCouponCode } from "@/functions/misc-functions"
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
      recipientAddress = isAddress(recipientAddress) ? recipientAddress : ZeroAddress

      if (!address) {
        toast.error("No wallet connected")
        return false;
      }

      if (!amount) {
        toast.error("Amount is required")
        return false;
      }

      if (recipientAddress == ZeroAddress && !password) {
        toast.info("Password is required when no recipient address is provided")
        return false;
      }

      const encryptedPassword = password.trim()?.length > 0 ? keccak256(toUtf8Bytes(password.trim())) : "0x0000000000000000000000000000000000000000000000000000000000000000";
      const couponCode = generateCouponCode();

      setIsLoading(true)

      try {
        const sendTokenCall = await contract?.sendToken(recipientAddress, couponCode, encryptedPassword, {value: ethers.parseEther(amount)});
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

  const recallTransaction = useCallback(
    async (couponCode: string) => {
      setIsLoading(true)

      try {
        const recallTransactionCall = await contract?.reclaimToken(couponCode);
        const recallTransactionCallReceipt = await recallTransactionCall?.wait();

        customToast({
          variant: "success",
          description: "Transaction successfully executed",
          action: {url: `${explorerURL}/tx/${recallTransactionCallReceipt?.hash || recallTransactionCallReceipt?.transactionHash}`, label: "View in explorer"}
        })

        console.log("Transaction receipt:", recallTransactionCallReceipt);

        return true
      } catch (error) {
        console.error("Error recalling transaction:", error);
        const errorMessage = extractErrorMessage(error instanceof Error ? error : new Error("Unknown error"));
        toast.error(errorMessage)
        return false
      } finally {
        setIsLoading(false)
      }
    }, [contract, explorerURL, setIsLoading]
  )

  const claimToken = useCallback(
    async (couponCode: string, password: string, hasPassword: boolean, sender: string) => {

      if (!couponCode) {
        toast.error("Coupon Code is mandatory")
        return false;
      }

      if (sender === address) {
        toast.error("Use the recall button to claim your own transfer")
        return
      }

      if (hasPassword && !password) {
        toast.error("Password is required to claim")
        return false;
      }

      setIsLoading(true)

      try {
        const claimTokenCall = await contract?.claimToken(couponCode, password);
        const claimTokenCallReceipt = await claimTokenCall?.wait();

        customToast({
          variant: "success",
          description: "Transaction successfully executed",
          action: {url: `${explorerURL}/tx/${claimTokenCallReceipt?.hash || claimTokenCallReceipt?.transactionHash}`, label: "View in explorer"}
        })

        console.log("Transaction receipt:", claimTokenCallReceipt);

        return true
      } catch (error) {
        console.error("Error claiming transaction:", error);
        const errorMessage = extractErrorMessage(error instanceof Error ? error : new Error("Unknown error"));
        toast.error(errorMessage)
        return false
      } finally {
        setIsLoading(false)
      }
    }, [address, contract, explorerURL, setIsLoading]
  )


  return {
    sendToken,
    recallTransaction,
    claimToken
  }
}