# useAptosClient

Use this hook to get an [Aptos client](https://aptos.dev/en/build/sdks/ts-sdk/quickstart) connected to the defined chain.

## Usage
``` tsx
const aptos = useAptosClient(chainId);
```

This example uses the `useAptosClient` hook to retrieve the Aptos client for `chainId`.

## Parameters
| Parameter | Type   | Description                                                                                                   |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| chainId   | string | The id for the chain as defined in [defaultChains](https://arjanjohan.gitbook.io/scaffold-move/utils/chains). |

## Return Value

* `data`: Object containing `address` and `abi` of contract.
