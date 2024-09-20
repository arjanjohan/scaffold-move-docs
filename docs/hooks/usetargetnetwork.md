
# useTargetNetwork

This hook retrieves the connected wallet's network from scaffold.config or defaults to the 0th network in the list if the wallet is not connected.

``` tsx
const network = useTargetNetwork();
```

## Return Value

* `network`: The target network as `Chain` object.
