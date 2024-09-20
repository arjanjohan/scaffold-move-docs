---
sidebar_position: 5 
---
# 📡 Interacting with External Modules

If you need to interact with external modules (i.e., modules not deployed from your Scaffold Move repo), you can add external module data in two ways.

### Edit externalModules.ts

To add or modify external modules manually, you can add the module ABIs to your `packages/nextjs/modules/externalModules.ts` file in the following format:

``` tsx
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

To generate an `externalModules.ts` file automatically after deployment, you can add the addresses of the external modules to your `packages/move/Move.toml` file. The post-deploy script will update the `externalModules.ts` file with the modules linked to any address added in `Move.toml` after each deployment.

This approach is particularly useful when you want to maintain a consistent and up-to-date reference to external modules across your project. By centralizing the external module addresses in the `Move.toml` file, you ensure that all parts of your application are using the correct and most recent module addresses.

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

This is an example of a Move.toml file that includes references to external modules. The `OnchainBio` address is for the module deployed from this Scaffold Move repo, while `OtherModule` represents an external module. You can add multiple external module addresses here, ensuring each name is unique. The names you choose (like "OtherModule") are for your reference only; the actual module names will be fetched from the blockchain when updating the externalModules.ts file.
