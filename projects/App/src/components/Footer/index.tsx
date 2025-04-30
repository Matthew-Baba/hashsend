import { formatNumberScale, shortenAddress } from "@/functions/format";
import { useAccount, useBalance } from "wagmi";

export default function Footer() {
  const { address, isConnecting } = useAccount();
  const { data, isLoading } = useBalance({ address });

  return (
    <footer className="p-3 space-y-6">
      <div className="border border-gray-200 p-4 rounded-md min-h-28 flex flex-col">
        <h6 className="text-sm font-medium">Wallet Balance</h6>

        {isConnecting ?
          loadingCard()
        :
          (address ?
            <div className="space-y-3">
              <h6 className="text-sm">{shortenAddress(address)}</h6>
              {isLoading ?
                loadingBalaceSection()
              :
                <h6 className="text-sm font-semibold"><span className="text-3xl hs-text-gradient">{formatNumberScale(data?.formatted as string)}</span> {data?.symbol}</h6>
              }
            </div>
          :
            <div className="flex items-center justify-center flex-1">
              <h6 className="text-sm">Wallet not connected</h6>
            </div>
          )
        }
      </div>

      <p className="faded-text text-sm">&copy; {new Date().getFullYear()} HashSend. All rights reserved.</p>
    </footer>
  )
}


function loadingCard() {
  return (
    <div className="space-y-3">
      <h6 className="h-5 w-24 placeholder-color animate-pulse"></h6>

      {loadingBalaceSection()}
    </div>
  )
}

function loadingBalaceSection() {
  return (
    <div className="flex items-end gap-2 animate-pulse">
      <div className="h-9 w-16 placeholder-color"></div>
      <div className="h-5 w-6 placeholder-color"></div>
    </div>
  )
}
