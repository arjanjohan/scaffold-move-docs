# useGetAccountResource

Use this hook to fetch a specific resource for an address.

## Usage
``` tsx
const { data: accountResource, isLoading: accountResourceoading } = useGetAccountResource("onchain_bio", "bio", address);
```

This example fetches the `bio` resource of the `onchain_bio` module for `address`. The module must be available in `deployedModules.ts` or `externalModules.ts` for the target network.


## Parameters
| Parameter               | Type   | Description                                       |
| ----------------------- | ------ | ------------------------------------------------- |
| **moduleName**          | string | Name of the module where the resource is defined. |
| **resourceName**        | string | Name of the Resource                              |
| **address** (optional)  | string | Address of the account which holds the resource. Uses the connected account address if no address is given. |
| **options** (optional)  | object | Additional options for the query (e.g., retry settings) |

## Return Value
* A React Query result. `data` is the resource of type `T` (defaults to `any`).
