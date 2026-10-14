# getAllModules

Use this function to get all modules by chainId.

``` tsx
import { useTargetNetwork } from "~~/hooks/scaffold-move/useTargetNetwork";
import { getAllModules } from "~~/utils/scaffold-move/modulesData";

const { targetNetwork } = useTargetNetwork();
const modulesData = getAllModules(targetNetwork.id);
```

This example uses the `getAllModules` function to get all modules deployed on the target network.

## Parameters

| Parameter        | Type   | Description                |
| ---------------- | ------ | -------------------------- |
| **chainId**      | number | The id for a chain/network |

## Return Value
Returns an object that maps module names to `GenericModule` objects (empty if no modules are available for this chain):

* `bytecode`: The raw bytecode of the module.
* `abi`: An object that contains the following:
  * `address`: The address where the module is deployed.
  * `name`: The name of the module.
  * `friends`: A list of module addresses that have access to private elements of the module.
  * `exposed_functions`: A list of functions that the module exposes, which include their name, visibility, parameters, and return types.
  * `structs`: A list of data structures defined in the module, including their fields and type information.