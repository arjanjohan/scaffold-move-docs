---
sidebar_position: 5 
---

# 📡 Interacting with External Modules

If you need to interact with external modes (i.e. not deployed from your Scaffold Move repo) you can add external module data in two ways.

### Edit externalModules.ts

To add/modify external modules manually, you can add the module ABI's to your packages/nextjs/modules/externalModules.ts in the following format:

```
/**
 * @example
 * const externalModules = {
 *   1: {
 *     treasury: {
 *       bytecode: "0x...",
 *       abi: {
           address: "0x...",
           name: "treasury",
           friends: [...],
           exposed_functions: [...],
           structs: [...]
         },
 *     },
 *   },
 * } as const;
 */
```

In the example above, it shows some dummy values for adding a treasury module deployed on mainnet (chainId 1).

### Edit Move.toml

To generate an `externalModules.ts` file automatically after deployment, you can add the addresses of the external modules to your packages/move/Move.toml file. The post deploy script will update the externalModules.ts file with the modules linked to any address added in Move.toml after each deployment.

```
[package]
name = 'onchain_bio'
version = '1.0.0'
[dependencies.AptosFramework]
git = 'https://github.com/aptos-labs/aptos-core.git'
rev = 'main'
subdir = 'aptos-move/framework/aptos-framework'                                                                                   

[addresses]
OnchainBio='0x1f61b83497e279044679e283e66513e6bb50d4e3145ceed7218fa443d91450ec'
OtherModule='0x0a596e253fe1584d6c04bbc9c662faaa1e41a6141f2a458f52d5e5512e38fb9a'
```

This is the move.toml file that is shipped with the Scaffold Move repo by default. The `OtherModule` field declares the address of the external modules. You can add multiple addresses here, as long as the names are unique. The naming here is purely for your own reference, as the module names will be fetched from the blockchain when updating the externalModules.ts file.