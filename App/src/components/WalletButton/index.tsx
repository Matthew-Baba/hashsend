import { ConnectKitButton } from 'connectkit'
import { PlusCircleIcon } from 'lucide-react'

interface WalletButtonProps {
  customClass?: string;
}

const WalletButton = ({ customClass }: WalletButtonProps) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress }) => (
        <button onClick={show} className={`btn hs-primary ${customClass}`}>
          {isConnected ? truncatedAddress : "Connect wallet"}
        </button>
      )}
    </ConnectKitButton.Custom>
  )
}

export default WalletButton