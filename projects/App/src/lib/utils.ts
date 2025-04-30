import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 focus:dark:ring-blue-700/30",
  // border color
  "focus:border-blue-500 focus:dark:border-blue-700",
]

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
]

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
]

export const placeholderClaims = {
  sender: "",
  recipient: "",
  amount: 0,
  couponCode: "",
  encryptedPassword: "",
  status: 0,
  timestamp: 0,
}

export const placeholderStats = {
  totalSentUnclaimedCount: 0,
  totalSentReclaimedCount: 0,
  totalSentClaimedCount: 0,
  totalReceivedClaimedCount: 0,
  totalReceivedUnclaimedCount: 0,

  totaSentUnclaimedAmount: 0,
  totalSentReclaimedAmount: 0,
  totalSentClaimedAmount: 0,
  totalReceivedClaimedAmount: 0,
  totalReceivedUnclaimedAmount: 0,

  totalTransactions: 0,
  totalAmount: 0,
}