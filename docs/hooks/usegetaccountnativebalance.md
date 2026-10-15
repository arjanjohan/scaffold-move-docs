# useGetAccountNativeBalance

Use this hook to fetch the native token balance for an address on the target network.

## Usage
``` tsx
const { balance, loading, error, nativeTokenSymbol } = useGetAccountNativeBalance(address);
```

This example retrieves the native token balance of the address.

## Parameters
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| **address** (optional) | string | Address of the account to query. Uses the connected account address if no address is given. |

## Return Value
* `balance`: The balance in the smallest unit of the native token, or `null` while loading or when the request failed.
* `loading`: `true` while the balance is being fetched.
* `error`: `true` if fetching the balance failed.
* `nativeTokenSymbol`: The `native_token_symbol` of the target network, or `"APT"` if the network does not define one.
