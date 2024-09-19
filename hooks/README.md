# 🪝 Hooks

Scaffold Move provides a collection of custom React hooks designed to simplify interactions with your deployed Move modules. These hooks are an easy-to-use interface for reading from and writing to your Move modules.

The custom hooks rely on three main files for their functionality:

* `packages/nextjs/contracts/deployedModules.ts`
* `packages/nextjs/contracts/externalModules.ts`
* `scaffold.config.ts`

The `deployedModules.ts` file is auto-generated/updated whenever you run `yarn deploy --network`. It organizes contract addresses and abi's based on chainId.
