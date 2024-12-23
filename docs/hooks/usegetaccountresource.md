# useGetAccountResource

Use this hook to fetch a specific resource for an address.

## Usage
``` tsx
const { data: accountResource, isLoading: accountResourceoading } = useGetAccountResource(address, "onchain_bio", "bio");
```

This example fetches a `bio` resource of the `onchain_bio` module for a predefined address.


## Parameters
| Parameter               | Type   | Description                                       |
| ----------------------- | ------ | ------------------------------------------------- |
| **moduleName**          | string | Name of the module where the resource is defined. |
| **resourceName**        | string | Name of the Resource                              |
| **externalModuleAddress** (optional)  | string | If the module is not loaded in Scaffold Move (not deployed or imported as external module), this field is required to access the module's resource. |
| **address** (optional)  | string | Address of the account which holds the resource. Uses the connected account address if no address is given. |
| **options** (optional)  | object | Additional options for the query (e.g., retry settings) |

## Return Value
* `T`: An object where `T` is the type of the resource (defaults to `any`).
