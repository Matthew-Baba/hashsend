"use client";

import { ReactNode } from "react";
import { WagmiProvider, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { pharos } from "@/lib/customChains";

const config = createConfig(
  getDefaultConfig({
    enableFamily: false,
    appName: process.env.NEXT_PUBLIC_APP_NAME || "",
    chains: [ pharos ],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ""
  }),
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider theme="nouns" mode="dark" options={{ embedGoogleFonts: true }}>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};