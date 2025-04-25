import { useContract } from "../services/useContract"
import { useCallback } from "react"
import { useSetRecoilState } from "recoil"
import { loadingState } from "@/app/state/atom"
import { extractErrorMessage } from "@/functions/misc-functions"
import { toast } from "react-toastify"
import { toast as customToast } from "@/components/ui/use-toast"
import { useAccount } from "wagmi"
import { parseEther } from "viem"

export const useSendToken = () => {
  const { address } = useAccount()
  const contract = useContract()
  const setIsLoading = useSetRecoilState(loadingState)
  const explorerURL = "https://edu-chain-testnet.blockscout.com/"

  const sendToken = useCallback(
    async (formData: any) => {
      setIsLoading(true)

      if (!address) {
        toast.error("No wallet connected")
        return false;
      }

      try {
        const sendTokenCall = await contract?.sendToken('0xd682ECF100f6F4284138AA925348633B0611Ae21', parseEther(formData.amount), '0x2E37d283f5BDb4F825955FA5685b42aa369d7f36', 'hellow32', 'homermaid', BigInt(Date.now() + (7 * 24 * 60 * 60 * 1000)), 'edu', '0xd682ECF100f6F4284138AA925348633B0611Ae21');
        const sendTokenCallReceipt = await sendTokenCall?.wait();

        console.log("Transaction receipt:", sendTokenCall);

        customToast({
          variant: "success",
          description: "Campaign successfully created",
          action: {url: `${explorerURL}/tx/${sendTokenCallReceipt?.hash || sendTokenCallReceipt?.transactionHash}`, label: "View in explorer"}
        })

        return true
      } catch (sendTokenError: any) {
        console.error("Error sending token:", sendTokenError);
        const errorMessage = extractErrorMessage(sendTokenError);
        toast.error(errorMessage)
        return false
      } finally {
        setIsLoading(false)
      }
    }, [address, contract, explorerURL, setIsLoading]
  )

  return sendToken
}