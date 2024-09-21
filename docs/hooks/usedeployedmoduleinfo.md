# useDeployedModuleInfo

Use this hook to fetch details about a deployed Move module, including the ABI and address. The information if fetched from the blockchain. 

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
* `data`: Object containing `address` and `abi` of module.
