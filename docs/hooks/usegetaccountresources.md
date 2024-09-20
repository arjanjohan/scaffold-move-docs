# useGetAccountResources

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
