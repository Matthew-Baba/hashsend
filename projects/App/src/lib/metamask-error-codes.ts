export const errorCodeMessages = {
  // EIP-1193 Provider Errors
  "ACTION_REJECTED": "Request rejected by user.",
  "4001": "Request rejected by user.",
  "4100": "Unauthorized: Please authorize the requested account or method.",
  "4200": "Unsupported method: This Ethereum provider doesn't support the requested method.",
  "4900": "Disconnected: Provider is not connected to any network.",
  "4901": "Disconnected: Provider is not connected to the specified network.",

  // JSON-RPC 2.0 Errors
  "-32700": "Parse error: Invalid JSON received by the server.",
  "-32600": "Invalid request: The JSON sent is not a valid request object.",
  "-32601": "Method not found: The method does not exist or is unavailable.",
  "-32602": "Invalid params: Invalid method parameters.",
  "-32603": "Internal error: An internal JSON-RPC error occurred.",

  // EIP-1474 Ethereum JSON-RPC Errors
  "-32000": "Invalid input: Missing or invalid parameters.",
  "-32001": "Resource not found: The requested resource could not be found.",
  "-32002": "Resource unavailable: The requested resource is currently unavailable.",
  "-32003": "Transaction rejected: The transaction was rejected by the network.",
  "-32004": "Method not supported: The requested method is not supported.",
  "-32005": "Limit exceeded: Request limit has been exceeded.",
  "-32006": "Unsupported JSON-RPC version: The JSON-RPC version is not supported.",

  // Additional Errors
  "-33000": "Payment required: Daily credit quota limits reached.",
  "-33100": "Forbidden: Access to the requested resource is forbidden.",
  "-33200": "Too many requests: Rate limit exceeded.",
  "-33300": "Too many requests: User-defined key throughput limit exceeded.",
  "-33400": "Too many requests: User-defined daily credit limit exceeded.",

  // Ethers.js Specific Errors
  "CALL_EXCEPTION": "Smart contract call failed.",
  "INSUFFICIENT_FUNDS": "Insufficient funds for transaction.",
  "NETWORK_ERROR": "Network error occurred.",
  "UNPREDICTABLE_GAS_LIMIT": "Cannot estimate gas; transaction may fail or require manual gas limit.",
  "NONCE_EXPIRED": "Nonce has already been used.",
  "REPLACEMENT_UNDERPRICED": "Replacement transaction underpriced.",
  "TRANSACTION_REPLACED": "Transaction was replaced by another.",
  "NUMERIC_FAULT": "Numeric value out of range or invalid.",
  "INVALID_ARGUMENT": "Invalid argument provided.",
  "MISSING_ARGUMENT": "Missing required argument.",
  "UNSUPPORTED_OPERATION": "Operation not supported.",
  "TIMEOUT": "Operation timed out.",
  "NOT_IMPLEMENTED": "Method not implemented.",
  "UNKNOWN_ERROR": "An unknown error occurred."
};
