# useGetAccountModule

Use this hook to fetch the Move module that is published on an address by name.

## Usage
``` tsx
const { data: accountModule, isLoading: accountModuleLoading } = useGetAccountModule(address, moduleNam e);
```

This example fetches all modules that are published on this address.

## Parameters
| Parameter  | Type   | Description             |
| ---------- | ------ | ----------------------- |
| address    | string | Address of the account. |
| moduleName | string | Name of the module      |

## Return Value
* `moveModuleBytecode`: A `MoveModuleBytecode` object.
