---
sidebar_position: 3 
---

# 🪝 Hooks

Scaffold Move provides a collection of custom React hooks designed to simplify interactions with your deployed Move modules. These hooks offer an easy-to-use interface for reading from and writing to your Move modules.

The custom hooks rely on three main files for their functionality:

* `packages/nextjs/modules/deployedModules.ts`
* `packages/nextjs/modules/externalModules.ts`
* `scaffold.config.ts`

The `deployedModules.ts` file is auto-generated and updated whenever you run `yarn publish --network`. It organizes module addresses and ABIs based on the chainId.
