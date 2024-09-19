# view

Use this function to call a View function on a Move Module.

```
import { view } from "~~/utils/scaffold-move/view";

[...]

const viewResult = await view(
  {
    module_address: module.address,
    module_name: module.name,
    function_name: fn.name,
    ty_args: data.typeArgs,
    function_args: data.args,
  },
  aptos,
);

```

This example calls the View function.

### **Parameters**

| Parameter                     | Type      | Description                            |
| ----------------------------- | --------- | -------------------------------------- |
| **module\_address**           | string    | Address of the module                  |
| **module\_name**              | string    | Name of the module                     |
| **function\_name**            | string    | Name of the function                   |
| **ty\_args** (optional)       | string\[] | Type arguments                         |
| **function\_args** (optional) | string\[] | Input  arguments for the view function |

### **Return Value**

Returns an array of Move values
