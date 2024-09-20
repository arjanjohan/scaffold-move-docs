# getAllModules

Use this function to get all modules by chainId.

```
import { useTargetNetwork } from "~~/hooks/scaffold-move/useTargetNetwork";
import { getAllModules } from "~~/utils/scaffold-move/modulesData";

const { targetNetwork } = useTargetNetwork();
const modulesData = getAllModules(targetNetwork.id);
```

This example uses the `getAllModules` function to get all modules deployed on the target network.

## Parameters

| Parameter        | Type   | Description                |
| ---------------- | ------ | -------------------------- |
| **module\_name** | string | Name of the module         |
| **chainId**      | string | The id for a chain/network |

## Return Value
Returns a list of `GenericModule` objects.
