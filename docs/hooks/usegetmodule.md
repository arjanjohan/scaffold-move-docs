# useGetModule

## useGetModule

Use this hook to fetch a Move module, including the bytecode and ABI. The information if fetched from the `deployedModules.ts` and `externalModules.ts`.

## Usage
``` tsx
const moveModule = useGetModule("onchain_bio");
```

## Parameters
| Parameter  | Type   | Description        |
| ---------- | ------ | ------------------ |
| moduleName | string | Name of the module |

## Return Value
* `module`: A GenericModule object, containing the bytecode and ABI.