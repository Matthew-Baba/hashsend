import { type Chain } from "viem";

export const pharos: Chain = {
  id: 50002,
  name: "Pharos DevNet",
  nativeCurrency: {
    decimals: 18,
    name: "Pharos",
    symbol: "PTT",
  },
  rpcUrls: {
    default: { http: ["https://devnet.dplabs-internal.com"] },
  },
  blockExplorers: {
    default: { name: "PharosScan", url: "https://pharosscan.xyz" },
    pharosscan: { name: "PharosScan", url: "https://pharosscan.xyz" },
  },
  testnet: true,
};