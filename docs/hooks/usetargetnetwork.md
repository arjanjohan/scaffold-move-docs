
# useTargetNetwork

This hook retrieves the connected wallet's network from `targetNetworks` in `scaffold.config.ts`, or defaults to the 0th network in the list if the wallet is not connected.

## Usage
``` tsx
const { targetNetwork } = useTargetNetwork();
```

## Return Value

* `targetNetwork`: The target network as [`Chain`](../utils/chains.md) object.
