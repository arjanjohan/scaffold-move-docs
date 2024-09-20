---
sidebar_position: 1
---

# Publish Your Move Modules

When publishing a new Move module, you must first initialize an Aptos account and fund it with the native token. You can use this command:
```
yarn account
```

This command will create a new Aptos account, overwriting any existing account that is stored in `packages/move/.aptos/config.yaml`. It will also update the Move.toml file with the new address.

To publish your Move modules to the newly generated Aptos account, use this command:

```
yarn deploy
```

This command publishes the Move modules and subsequently updates the `deployedModules.ts` file in the NextJS directory.

If you want to use external Move modules in your frontend, you can add their addresses in your Move.toml file. This will automatically generate an `externalModules.ts` file. For more details, [refer to the external modules documentation](../external-modules/external-modules.md).

:::warning
The Aptos devnet is frequently reset, which can result in changes to the chainId. If this occurs, you should:
1. Redeploy your modules (this process always uses the correct chainId)
2. Manually update the chainId for devnet in `packages/nextjs/utils/scaffold-move/chains.ts`
:::
