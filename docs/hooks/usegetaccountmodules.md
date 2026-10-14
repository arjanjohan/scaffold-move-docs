# useGetAccountModules

Use this hook to fetch the Move modules that are published on an address.

## Usage
``` tsx
const { data: accountModules, isLoading: accountModulesLoading } = useGetAccountModules(address);
```

This example fetches all modules that are published on this address.

## Parameters
| Parameter     | Type   | Description             |
| ------------- | ------ | ----------------------- |
| **address**   | string | Address of the account. |

## Return Value
* A React Query result. `data` is a list of `MoveModuleBytecode` objects.
