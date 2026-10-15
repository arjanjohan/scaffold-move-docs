# Chains

In `packages/common/chains.ts` the different Aptos and Movement chains are defined and exported as `defaultChains`. The file is shared by the Move scripts and the NextJS app, so a chain is configured in one place. The chains the frontend supports are listed in `targetNetworks` in `packages/nextjs/scaffold.config.ts`.

``` ts
export type Chain = {
  id: number;
  name: string;
  indexer?: string;
  faucet_api?: string;
  faucet_url?: string;
  block_explorer?: string;
  explorer_network_param?: string;
  native_token_symbol?: string;
  cli: "aptos" | "movement";
  override_std?: "mainnet" | "testnet" | "devnet";
} & (
  | { network: "custom"; fullnode: string }
  | { network: "mainnet" | "testnet" | "devnet" | "local"; fullnode?: undefined }
);
```

The Aptos networks only need `network` next to the mandatory fields, because the Aptos SDK and CLI know their endpoints. For custom chains, such as the Movement networks, `fullnode` is required and it is recommended to provide all fields to ensure a fully functional dapp.

The default chains are `movement_testnet`, `movement_mainnet`, `aptos_mainnet`, `aptos_testnet` and `local`. Use these keys with the `--network` option of `yarn account`, `yarn deploy`, `yarn compile` and `yarn test`. The `defaultNetwork` in `packages/move/move.config.ts` is used when no `--network` is given.

:::warning
Networks that are reset regularly, such as the Aptos devnet, can change their chain id. If this occurs, update the `id` of the chain in `packages/common/chains.ts` and redeploy your modules.
:::

## Parameters

| Parameter                              | Type    | Description                                                                                                                       |
| -------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **id**                                 | number  | Chain id of the network.                                                                                                          |
| **name**                               | string  | Name of the chain, shown in the UI.                                                                                               |
| **network**                            | string  | Network as defined in the Aptos TypeScript SDK (`mainnet`, `testnet`, `devnet`, `local` or `custom`).                             |
| **fullnode**                           | string  | URL of the fullnode REST API. Required when `network` is `custom`.                                                                |
| **cli**                                | string  | CLI the Move scripts use for this chain: `aptos` or `movement`. Its accounts live in `packages/move/.<cli>/config.yaml`.          |
| **override\_std** (optional)           | string  | Aptos framework branch to compile against with `--override-std`. Without it, the framework in `Move.toml` is used.                |
| **indexer** (optional)                 | string  | URL for the indexer.                                                                                                              |
| **faucet\_api** (optional)             | string  | URL of the faucet API, used to fund new accounts.                                                                                 |
| **faucet\_url** (optional)             | string  | URL of the faucet page, linked in the UI.                                                                                         |
| **block\_explorer** (optional)         | string  | URL for the block explorer.                                                                                                       |
| **explorer\_network\_param** (optional)| string  | Value of the `network` query parameter added to block explorer links.                                                             |
| **native\_token\_symbol** (optional)   | string  | Symbol of the native token. Shown by the Balance component, defaults to `APT`.                                         |
