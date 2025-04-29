/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useContract } from "./services/useContract";
import { TransactionCountType, TransactionType } from "@/lib/types";
import { placeholderClaims } from "@/lib/utils";
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

        const sortedClaims = [...claims]?.sort((currentClaim, nextClaim) => Number(BigInt(nextClaim?.timestamp)) - Number(BigInt(currentClaim?.timestamp))).map((claim) => ({
          sender: claim[0],
          recipient: claim[1],
          amount: claim[2],
          couponCode: claim[3],
          encryptedPassword: claim[4],
          status: claim[5],
          timestamp: claim[6],
        }))

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
  const [allTransactions, setAllTransactions] = useState<TransactionCountType>();

  useEffect(() => {
    const fetchAllTransactions = async () => {
      if (!address || !contract) return;

      try {
        const transactions = await contract.getAllUserTransactions();

        const sentTransactions = [...transactions]?.filter((transaction) => (transaction[0] === address && Number(BigInt(transaction[5])) !== 2));
        const receivedTransactions = [...transactions]?.filter((transaction) => (transaction[0] !== address && Number(BigInt(transaction[5])) === 1));
        const pendingTransactions = [...transactions]?.filter((transaction) => Number(BigInt(transaction[5])) === 0);

        const totalSentTransactions = sentTransactions?.length || 0;
        const totalReceivedTransactions = receivedTransactions?.length || 0;
        const totalPendingTransactions = pendingTransactions?.length || 0;
        const totalTransactions = [...transactions]?.length || 0;

        const totalUnclaimedAmount = [...sentTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalClaimedAmount = [...receivedTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalPendingAmount = [...pendingTransactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;
        const totalAmount = [...transactions]?.reduce((acc, transaction) => acc + Number(BigInt(transaction[2])), 0) || 0;

        const transactionCount = {
          totalSentTransactions,
          totalReceivedTransactions,
          totalPendingTransactions,
          totalTransactions,
          totalUnclaimedAmount,
          totalClaimedAmount,
          totalPendingAmount,
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

        const transactionDetail = {
          sender: transaction[0],
          recipient: transaction[1],
          amount: transaction[2],
          couponCode: transaction[3],
          encryptedPassword: transaction[4],
          status: transaction[5],
          timestamp: transaction[6],
        }

        return transactionDetail;
      } catch (error) {
        console.error("Error fetching pending claims:", error);
        toast.error("Error fetching transaction or incorrect coupon code.")
        return {
          sender: "",
          recipient: "",
          amount: 0,
          couponCode: "",
          encryptedPassword: "",
          status: 0,
          timestamp: 0,
        };
      }
    }, [contract]
  )

  return fetchTransactionDetails;
}