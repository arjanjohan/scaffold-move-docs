---
sidebar_position: 6
slug: /deploy/move
---

# Publish Your Move Modules

When publishing a new Move module, you must first initialize an Aptos account and fund it with the native token. You can use this command:

```
yarn account
```

This command will create a new Aptos account, overwriting any existing account that is stored in packages/move/.aptos/config.yaml. It will also update the Move.toml file with the new address.

To publish your Move modules to the newly generated Aptos account, use this command:

```
yarn deploy
```

This command publishes the Move modules, and afterwards updates the deployedModules.ts file in the NextJS directory.&#x20;

If you want to use external Move modules in your frontend, you can add their addresses in your Move.toml file to automatically generate an externalModules.ts file.\
[See here for more details](../interacting-with-external-modules.md).

