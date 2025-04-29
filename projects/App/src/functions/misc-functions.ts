import { errorCodeMessages } from "@/lib/metamask-error-codes";
import { customAlphabet } from "nanoid";


export const calculateTimeLeft = (timestamp: number) => {
  const difference = timestamp * 1000 - Date.now();

  if (timestamp * 1000 < Date.now())
    return { completed: true, isLoading: false };

  if (difference > 0) {
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        '0'
      ),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        '0'
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        '0'
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      completed: false,
      isLoading: false,
    };
  }

  return {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    completed: true,
  };
};

export const truncateValue = (valueToTruncate: number, decimalPlaces: number) => {
  const truncated =
    Math.trunc(valueToTruncate * Math.pow(10, decimalPlaces)) /
    Math.pow(10, decimalPlaces);

  return truncated;
};

export const convertToDecimalValue = (SCValue: number) => {
  return SCValue / Math.pow(10, 18);
};

export const copyToClipboard = async (textToCopy: string) => {
  navigator.clipboard.writeText(textToCopy);
  return true;
};

export const extractErrorMessage = (error: { data?: { message?: string, code?: string }; message?: string, code?: string }) => {
  if (error?.code && errorCodeMessages[error.code as keyof typeof errorCodeMessages]) {
    return errorCodeMessages[error.code as keyof typeof errorCodeMessages];
  }

  // Check for specific contract revert error
  if (error?.data?.message) {
    return error.data.message;
  }

  // Check for error message in the error object
  if (error?.message) {
    // Look for the revert reason in the error message
    const match = error.message.match(/reason="([^"]+)"/);
    if (match) {
      return match[1];
    }

    // If the error message is in a different format
    const match2 = error.message.match(/execution reverted: (.*?)(?:\n|$)/);
    if (match2) {
      return match2[1];
    }
  }

  // Fallback to MetaMask error codes
  return "Transaction failed";
};

export const generateCouponCode = () => {
  const generateCode = customAlphabet('ABCDEFGHJKLMNPQRSTUVWXYZ23456789', 10);
  const couponCode = generateCode();

  console.log("Generated coupon code:", couponCode);
  return couponCode;
}