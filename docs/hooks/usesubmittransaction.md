
# useSubmitTransaction

Submit a transaction on a Move module.

## Usage
``` tsx
const { submitTransaction, transactionResponse, transactionInProcess } = useSubmitTransaction();

[...]

const functionName = "register";
const transaction: InputTransactionData = {
  data: {
    function: `${ONCHAIN_BIO.address}::${ONCHAIN_BIO.name}::${functionName}`,
    functionArguments: ["my name", "example text"],
  },
};
await submitTransaction(transaction);
if (transactionResponse?.transactionSubmitted) {
  console.log("function_interacted", {
    txn_status: transactionResponse.success ? "success" : "failed",
  });
}

```

This example executes the `register` function on the ONCHAIN\_BIO Move module, with two string arguments.

## Parameters

| Parameter   | Type                 | Description                                                   |
| ----------- | -------------------- | ------------------------------------------------------------- |
| transaction | InputTransactionData | Transaction data including the function and functionArguments |

## Return Value

* `transactionInProcess`: A bool, indicating whether or not the transaction is in process.
* `transactionResponse`: The response is either `TransactionResponseOnSubmission` or `TransactionResponseOnError`.

``` tsx
export type TransactionResponseOnSubmission = {
  transactionSubmitted: true;
  transactionHash: string;
  success: boolean; // indicates if the transaction submitted but failed or not
  message?: string; // error message if the transaction failed
};

export type TransactionResponseOnError = {
  transactionSubmitted: false;
  message: string;
};
```
