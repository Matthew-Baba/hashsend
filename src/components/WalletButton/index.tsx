import { ConnectKitButton } from 'connectkit'
import { PlusCircleIcon } from 'lucide-react'

interface WalletButtonProps {
  customClass?: string;
}

const WalletButton = ({ customClass }: WalletButtonProps) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress }) => (
        <button onClick={show} className={`btn hs-primary flex items-center gap-2 ${customClass}`}>
          <PlusCircleIcon size={18} className={`${isConnected && 'hidden'}`} />
          {isConnected ? truncatedAddress : "Connect wallet"}
        </button>
      )}
    </ConnectKitButton.Custom>
  )
}

export default WalletButton