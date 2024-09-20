# useGetAccountModules

Use this hook to fetch the Move modules that are publish on an address.

## Usage
``` tsx
const { data: accountModules, isLoading: accountModulesLoading } = useGetAccountModules(address);
```

This example fetches all modules that are published on this address.

## Parameters
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| address   | string | Address of the account. |

## Return Value
* `moveModuleBytecode[]`: A list of `MoveModuleBytecode` objects.
