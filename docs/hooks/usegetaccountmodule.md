# useGetAccountModule

Use this hook to fetch the Move module that is published on an address by name.

## Usage
``` tsx
const { data: accountModule, isLoading: accountModuleLoading } = useGetAccountModule(address, moduleName);
```

This example fetches the module with this name that is published on this address.

## Parameters
| Parameter      | Type   | Description             |
| -------------- | ------ | ----------------------- |
| **address**    | string | Address of the account. |
| **moduleName** | string | Name of the module      |

## Return Value
* A React Query result. `data` is a `MoveModuleBytecode` object.
