import Image from "next/image";
import WalletButton from "./WalletButton";

export default function ConnectWalletCard() {
  return (
    <div className="">
      <div className="bg-gradient-to-br from-[#29313C] to-[#29313C]/10 border border-[#3A4358] rounded h-40 relative">
        <Image
          src="/img/revenue-bro.svg"
          alt="Connected Wallet"
          width={160}
          height={160}
          className="-translate-y-3/5 place-self-center"
        />

        <div className="absolute bottom-3 text-center space-y-1">
          <h3 className="font-bold">Connected wallet</h3>
          <p className="font-medium text-sm text-gray-400 px-8"> Securely connect your wallet to get started</p>
        </div>
      </div>

      <WalletButton customClass="w-full rounded-t-none flex items-center justify-center py-3" />
    </div>
  )
}

