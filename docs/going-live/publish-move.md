---
sidebar_position: 1
---

# Publish Your Move Modules

When publishing a new Move module, you must first create an account for the network and fund it with the native token. You can use this command:
```
yarn account --network <network>
```

Without `--network`, the `defaultNetwork` from `packages/move/move.config.ts` is used. The account is funded from the faucet when the network has a faucet API; otherwise the command prints the faucet page where you can get test tokens. Each network has its own account, stored as a CLI profile in `packages/move/.movement/config.yaml` or `packages/move/.aptos/config.yaml`. Running the command again keeps the existing account for that network; add `--new` to create a new one.

To publish your Move modules to the account of that network, use this command:

```
yarn deploy --network <network>
```

Before publishing, the command checks the balance of the network's account. If it has no funds, the command stops and tells you how to fund it: with `yarn faucet <address> --network <network>` when the network has a faucet API, or with the faucet page otherwise (e.g. Aptos testnet).

This command publishes the Move modules with the CLI of the network, deploying the addresses set to `'_'` in `Move.toml` to the network's account. It then updates the `deployedModules.ts` file in the NextJS directory.

If you want to use external Move modules in your frontend, you can add their addresses in your Move.toml file. This will automatically generate an `externalModules.ts` file. For more details, [refer to the external modules documentation](../external-modules/external-modules.md).

To use the deployed modules in the frontend, add the network to `targetNetworks` in `packages/nextjs/scaffold.config.ts`. The available networks are defined in [Chains](../utils/chains.md).

:::warning
Networks that are reset regularly, such as the Aptos devnet, can change their chain id. Chain ids are set in `packages/common/chains.ts`. After a reset, update the id there and redeploy your modules.
:::
