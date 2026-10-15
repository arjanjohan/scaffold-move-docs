# useAptosClient

Use this hook to get an [Aptos client](https://aptos.dev/en/build/sdks/ts-sdk/quickstart) connected to a chain from [defaultChains](../utils/chains.md). The client is reused for the same `chainId`.

## Usage
``` tsx
const aptos = useAptosClient(chainId);
```

This example uses the `useAptosClient` hook to retrieve the Aptos client for `chainId`.

## Parameters
| Parameter | Type   | Description                                                                                                   |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| **chainId**   | number | The id for the chain as defined in [defaultChains](../utils/chains.md). The hook throws if no chain has this id. |

## Return Value

* `aptos`: An `Aptos` client from the Aptos TypeScript SDK.
