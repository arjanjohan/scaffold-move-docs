# useGetAccountModule(s)

## useGetAccountModule

Use this hook to fetch the MOVE module that is published on an address by name.

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

## useGetAccountModules

Use this hook to fetch the MOVE modules that are publish on an address.

```
const { data: accountModules, isLoading: accountModulesLoading } = useGetAccountModules(address);
```

This example fetches all modules that are published on this address.

## Parameters
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| address   | string | Address of the account. |

## Return Value
* `moveModuleBytecode[]`: A list of `MoveModuleBytecode` objects.
