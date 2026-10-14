# useDeployedModuleInfo

Use this hook to fetch details about a deployed Move module, including the ABI and address. The module is read from `deployedModules.ts` and `externalModules.ts` for the target network, and then checked on the blockchain.

## Usage
``` tsx
const { data: deployedModuleData, isLoading: deployedModuleLoading } = useDeployedModuleInfo("onchain_bio");

```

This example retrieves the details of the deployed module named `onchain_bio` and stores the details in the deployedModuleData object.

## Parameters

| Parameter  | Type   | Description        |
| ---------- | ------ | ------------------ |
| **moduleName** | string | Name of the module |

## Return Value
* `data`: Object containing `address` and `abi` of module, or `undefined` if the module is not found on the target network.
* `isLoading`: `true` while the check is running.
