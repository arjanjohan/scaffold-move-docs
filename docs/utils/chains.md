# Chains

In `chains.ts` the different Aptos and Aptos-based chains are defined and exported as `defaultChains`.

```
export type Chain = {
  id: string;
  name: string;
  network: Network;
  fullnode?: string;
  indexer?: string;
  faucet?: string;
  block_explorer?: string;
};
```

The default Aptos chains only need the mandatory fields, but for custom chains all fields should be provided for a fully functional dapp.

:::warning
On Aptos devnet, the network is often wiped and the chainId can change. If this happens, redeploy the modules (this will always use the correct chainId) and manually update the chainId for devnet in `packages/nextjs/utils/scaffold-move/chains.ts`.
:::

## Parameters

| Parameter                      | Type    | Description                                     |
| ------------------------------ | ------- | ----------------------------------------------- |
| **id**                         | string  | Address of the module                           |
| **name**                       | string  | Name of the module                              |
| **network**                    | Network | Network  as defined in the Aptos TypeScript SDK |
| **indexer** (optional)         | string  | URL for the indexer                             |
| **faucet** (optional)          | string  | URL for the faucet                              |
| **block\_explorer** (optional) | string  | URL for the block explorer                      |

