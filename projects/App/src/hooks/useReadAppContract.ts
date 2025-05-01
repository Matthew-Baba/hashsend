/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useContract } from "./services/useContract";
import { TransactionCountType, TransactionType } from "@/lib/types";
import { placeholderClaims, placeholderStats } from "@/lib/utils";
import { toast } from "react-toastify";

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

        const sortedClaims = [...claims]?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((claim) => (claim))

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

        const sortedTransactions = [...transactions]?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((transaction) => (transaction))

        if(sortedTransactions?.length === 0) {
          setLoadingTransactions(prev => (prev.length > 0 ? [] : prev));
        }

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
        const transactions: TransactionType[] = await contract.getAllUserTransactions();

        const sortedTransactions = [...transactions]?.filter((transaction) => transaction?.sender === address)?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((transaction) => (transaction))

        if(sortedTransactions?.length === 0) {
          setLoadingTransactions(prev => (prev.length > 0 ? [] : prev));
        }

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
        const transactions: TransactionType[] = await contract.getAllUserTransactions();

        const sortedTransactions = [...transactions]?.filter((transaction) => (transaction?.sender !== address && Number(BigInt(transaction?.status)) !== 0))?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((transaction) => (transaction))

        if(sortedTransactions?.length === 0) {
          setLoadingTransactions(prev => (prev.length > 0 ? [] : prev));
        }

        setClaimedTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching pending claims:", error);
      }
    }

    fetchReceivedTransactions();
  }, [address, contract])

  return !claimedTransactions?.length ? loadingTransactions : claimedTransactions;
}

export function useTransactionCount() {
  const { address } = useAccount();
  const contract = useContract();
  const [allTransactions, setAllTransactions] = useState<TransactionCountType>(placeholderStats);

  useEffect(() => {
    const fetchAllTransactions = async () => {
      if (!address || !contract) return;

      try {
        const transactions = await contract.getAllUserTransactions();

        const sentUnclaimedTransactions = [...transactions]?.filter((transaction) => (transaction[0] === address && Number(BigInt(transaction[5])) === 0));
        const sentReclaimedTransactions = [...transactions]?.filter((transaction) => (transaction[0] === address && Number(BigInt(transaction[5])) === 2));
        const sentClaimedTransactions = [...transactions]?.filter((transaction) => (transaction[0] === address && Number(BigInt(transaction[5])) === 1));
        const receivedClaimedTransactions = [...transactions]?.filter((transaction) => (transaction[0] !== address && Number(BigInt(transaction[5])) === 1));
        const receivedUnclaimedTransactions = [...transactions]?.filter((transaction) => (transaction[0] !== address && Number(BigInt(transaction[5])) === 0));

        const totalSentUnclaimedCount = sentUnclaimedTransactions?.length || 0;
        const totalSentReclaimedCount = sentReclaimedTransactions?.length || 0;
        const totalSentClaimedCount = sentClaimedTransactions?.length || 0;
        const totalReceivedClaimedCount = receivedClaimedTransactions?.length || 0;
        const totalReceivedUnclaimedCount = receivedUnclaimedTransactions?.length || 0;
        const totalTransactions = [...transactions]?.length || 0;

        const totaSentUnclaimedAmount = [...sentUnclaimedTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalSentReclaimedAmount = [...sentReclaimedTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalSentClaimedAmount = [...sentClaimedTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalReceivedClaimedAmount = [...receivedClaimedTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalReceivedUnclaimedAmount = [...receivedUnclaimedTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalAmount = [...transactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;

        const transactionCount = {
          totalSentUnclaimedCount,
          totalSentReclaimedCount,
          totalSentClaimedCount,
          totalReceivedClaimedCount,
          totalReceivedUnclaimedCount,

          totaSentUnclaimedAmount,
          totalSentReclaimedAmount,
          totalSentClaimedAmount,
          totalReceivedClaimedAmount,
          totalReceivedUnclaimedAmount,

          totalTransactions,
          totalAmount,
        }

        setAllTransactions(transactionCount);
      } catch (error) {
        console.error("Error fetching pending claims:", error);
      }
    }

    fetchAllTransactions();
  }, [address, contract])

  return allTransactions;
}

export const useTransactionDetails = () => {
  const contract = useContract();

  const fetchTransactionDetails = useCallback(
    async (transactionIdentifier: string) => {
      try {
        const transaction: TransactionType[] = await contract?.getTransactionDetails(transactionIdentifier);

        return transaction;
      } catch (error) {
        console.error("Error fetching pending claims:", error);
        toast.error("Error fetching transaction or incorrect coupon code.")
        return placeholderClaims;
      }
    }, [contract]
  )

  return fetchTransactionDetails;
}