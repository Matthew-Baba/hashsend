/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useContract } from "./services/useContract";
import { TransactionType } from "@/lib/types";
import { placeholderClaims } from "@/lib/utils";

export const useUserPendingClaims = () => {
  const { address } = useAccount();
  const contract = useContract();
  const [pendingClaims, setPendingClaims] = useState<TransactionType[]>([]);
  const [loadingClaims, setLoadingClaims] = useState<TransactionType[]>(Array.from({ length: 3 }, (_, index): TransactionType => (placeholderClaims)));

  useEffect(() => {
    const fetchPendingClaims = async () => {
      if (!address || !contract) return;

      try {
        const claims = await contract.getPendingClaimsForUser();
        if(claims?.length === 0) {
          setLoadingClaims(prev => (prev.length > 0 ? [] : prev));
        }

        const sortedClaims = [...claims]?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((claim) => ({
          sender: claim[0],
          recipient: claim[1],
          amount: claim[2],
          couponCode: claim[3],
          encryptedPassword: claim[4],
          status: claim[5],
          timestamp: claim[6],
        }))

        console.log('sortedClaims', sortedClaims)
        setPendingClaims(sortedClaims);
      } catch (error) {
        console.error("Error fetching pending claims:", error);
      }
    }

    fetchPendingClaims();
  }, [address, contract])

  return !pendingClaims?.length ? loadingClaims : pendingClaims;
}

export function useAllTransactionHistory() {
  const { address } = useAccount();
  const contract = useContract();
  const [allTransactions, setAllTransactions] = useState<TransactionType[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState<TransactionType[]>(Array.from({ length: 3 }, (_, index): TransactionType => (placeholderClaims)));

  useEffect(() => {
    const fetchAllTransactions = async () => {
      if (!address || !contract) return;

      try {
        const transactions = await contract.getAllUserTransactions();

        const sortedTransactions = [...transactions]?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((transaction) => ({
          sender: transaction[0],
          recipient: transaction[1],
          amount: transaction[2],
          couponCode: transaction[3],
          encryptedPassword: transaction[4],
          status: transaction[5],
          timestamp: transaction[6],
        }))

        if(sortedTransactions?.length === 0) {
          setLoadingTransactions(prev => (prev.length > 0 ? [] : prev));
        }

        console.log('sortedTransactions', sortedTransactions)
        setAllTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching pending claims:", error);
      }
    }

    fetchAllTransactions();
  }, [address, contract])

  return !allTransactions?.length ? loadingTransactions : allTransactions;
}

export function useSentTransactionHistory() {
  const { address } = useAccount();
  const contract = useContract();
  const [sentTransactions, setSentTransactions] = useState<TransactionType[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState<TransactionType[]>(Array.from({ length: 3 }, (_, index): TransactionType => (placeholderClaims)));

  useEffect(() => {
    const fetchSentTransactions = async () => {
      if (!address || !contract) return;

      try {
        const transactions = await contract.getAllUserTransactions();

        const sortedTransactions = [...transactions]?.filter((transaction) => transaction[0] === address)?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((transaction) => ({
          sender: transaction[0],
          recipient: transaction[1],
          amount: transaction[2],
          couponCode: transaction[3],
          encryptedPassword: transaction[4],
          status: transaction[5],
          timestamp: transaction[6],
        }))

        if(sortedTransactions?.length === 0) {
          setLoadingTransactions(prev => (prev.length > 0 ? [] : prev));
        }

        console.log('sortedTransactions', sortedTransactions)
        setSentTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching pending claims:", error);
      }
    }

    fetchSentTransactions();
  }, [address, contract])

  return !sentTransactions?.length ? loadingTransactions : sentTransactions;
}

export function useReceivedTransactionHistory() {
  const { address } = useAccount();
  const contract = useContract();
  const [claimedTransactions, setClaimedTransactions] = useState<TransactionType[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState<TransactionType[]>(Array.from({ length: 3 }, (_, index): TransactionType => (placeholderClaims)));

  useEffect(() => {
    const fetchReceivedTransactions = async () => {
      if (!address || !contract) return;

      try {
        const transactions = await contract.getAllUserTransactions();

        const sortedTransactions = [...transactions]?.filter((transaction) => Number(BigInt(transaction[5])) !== 0)?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((transaction) => ({
          sender: transaction[0],
          recipient: transaction[1],
          amount: transaction[2],
          couponCode: transaction[3],
          encryptedPassword: transaction[4],
          status: transaction[5],
          timestamp: transaction[6],
        }))

        if(sortedTransactions?.length === 0) {
          setLoadingTransactions(prev => (prev.length > 0 ? [] : prev));
        }

        console.log('sortedTransactions', sortedTransactions)
        setClaimedTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching pending claims:", error);
      }
    }

    fetchReceivedTransactions();
  }, [address, contract])

  return !claimedTransactions?.length ? loadingTransactions : claimedTransactions;
}