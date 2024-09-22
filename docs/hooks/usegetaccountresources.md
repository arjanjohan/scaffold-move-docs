# useGetAccountResources

Use this hook to fetch the resources that are available for an address.

``` tsx
const { data: accountResources, isLoading: accountResourcesLoading } = useGetAccountResources(address);
```

This example fetches all resources that are on this address.

## Parameters
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| address (optional)   | string | Address of the account. Uses the connected account address if no address is given. |
| **options** (optional)  | object | Additional options for the query (e.g., retry settings) |


## Return Value
* `moveResources`: An array of [`MoveResource`](https://aptos.dev/en/network/blockchain/resources) objects.
