# useGetAccountNativeBalance

Use this hook to fetch the MOVE balance for an address.

## Usage
``` tsx
const balance = useGetAccountNativeBalance(address);
```

This example retrieves Move balance of the address and stores the details in the balance object.

## Parameters
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| **address** (optional) | string | Address of the account to query. Uses the connected account address if no address is given. |

## Parameters
* `balance`: Object containing Move balance for this address.
