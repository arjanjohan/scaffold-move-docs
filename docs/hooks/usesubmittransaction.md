
# useSubmitTransaction

Submit a transaction on a Move module.

## Usage

Call this hook with the module name as argument. To send a transaction, use `submitTransaction` with the function name and function arguments as input.

``` tsx
import useSubmitTransaction from "~~/hooks/scaffold-move/useSubmitTransaction";

const { submitTransaction, transactionResponse, transactionInProcess } = useSubmitTransaction("onchain_bio");

await submitTransaction("register", ["my name", "example text"]);

```

This example executes the `register` function on the ONCHAIN_BIO Move module, with two string arguments.

## Parameters

| Parameter           | Type    | Description                                                                     |
| ------------------- | ------- | ------------------------------------------------------------------------------- |
| functionName        | string  | Name of the entry function to call                                              |
| **args** (optional) | any[]   | Array of arguments to pass to the function. Empty when no arguments are needed. |
| **tyArgs** (optional) | string[] | Array of type arguments for generic functions.                                |

These are the parameters of the `submitTransaction` function that the hook returns.

## Return Value

* `transactionInProcess`: A bool, indicating whether or not the transaction is in process.
* `transactionResponse`: `null` until a transaction was submitted, then either `TransactionResponseOnSubmission` or `TransactionResponseOnError`.
* `clearTransactionResponse`: A function that resets `transactionResponse` to `null`.

Once a transaction is committed on chain (`transactionSubmitted: true`, whether `success` is `true` or `false`), the hook refreshes the native token balance used by [`useGetAccountNativeBalance`](./usegetaccountnativebalance.md), so displayed balances reflect the gas spent.

``` tsx
export type TransactionResponseOnSubmission = {
  transactionSubmitted: true;
  transactionHash: string;
  success: boolean; // indicates if the transaction submitted but failed or not
  message?: string; // error message if the transaction failed
  receipt: TransactionResponse; // the transaction as committed on chain, from the Aptos TypeScript SDK
};

export type TransactionResponseOnError = {
  transactionSubmitted: false;
  message: string;
};
```
