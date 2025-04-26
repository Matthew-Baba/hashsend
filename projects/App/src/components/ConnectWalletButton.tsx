"use client";
import { ConnectKitButton } from "connectkit";

export const ConnectWalletButton = ({customClass = "px-5 py-3.5"}: {customClass?: string}) => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress }) => {
        return (
          <button onClick={show} className={`btn hs-primary ${customClass}`}>
            {isConnected ? truncatedAddress : "Connect Wallet"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};