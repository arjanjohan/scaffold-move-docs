# useGetAccountResource(s)

## useGetAccountResource

Use this hook to fetch a specific resource for an address.

``` tsx
const { data: accountResource, isLoading: accountResourceoading } = useGetAccountResource(address, "onchain_bio", "bio");
```

This example fetches a `bio` resource of the `onchain_bio` module for a predefined address.

## Parameters
| Parameter    | Type   | Description                                       |
| ------------ | ------ | ------------------------------------------------- |
| address      | string | Address of the account.                           |
| moduleName   | string | Name of the module where the resource is defined. |
| resourceName | string | Name of the Resource                              |

## Return Value
* `moveResource`: A [`MoveResource`](https://aptos.dev/en/network/blockchain/resources) object.

## useGetAccountResources

Use this hook to fetch the resources that are available for an address.

``` tsx
const { data: accountResources, isLoading: accountResourcesLoading } = useGetAccountResources(address);
```

This example fetches all resources that are on this address.

## Parameters
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| address   | string | Address of the account. |

## Return Value
* `moveResources`: A list of [`MoveResource`](https://aptos.dev/en/network/blockchain/resources) objects.
