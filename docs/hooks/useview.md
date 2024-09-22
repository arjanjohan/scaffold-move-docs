# useView

A hook to execute a view function on a Move module.

## Usage

Call this hook with the module name, function name, and optional arguments. It returns the result of the view function along with loading and error states.

```tsx
import { useView } from "~~/hooks/scaffold-move/useView";

const { data, error, isLoading, refetch } = useView({
  moduleName: "onchain_bio",
  functionName: "get_bio",
  args: ["0x74cf40ecf85e057b72e42b6c6e7ba883477b9c36394ab4bdca051d1340c9d058"]
});
```

This example executes the `get_bio` view function on the ONCHAIN_BIO Move module, with one address argument.

## Parameters

| Parameter                | Type     | Description                                                   |
|--------------------------|----------|---------------------------------------------------------------|
| moduleName               | string   | Name of the Move module                                       |
| functionName             | string   | Name of the view function to call                             |
| args (optional)          | any[]    | Array of arguments to pass to the function                    |
| tyArgs (optional)        | string[] | Array of type arguments for generic functions                 |
| watch (optional)         | boolean  | If true, the hook will refetch data every 10 seconds          |

## Return Value

* `data`: The result of the view function call, or `null` if not yet loaded.
* `error`: An `Error` object if the call failed, or `null` if successful.
* `isLoading`: A boolean indicating whether the view function is currently being called.
* `refetch`: A function to manually trigger a refetch of the data.

## Notes

- The hook will automatically fetch data when mounted and when any of its parameters change.
- If `watch` is set to `true`, it will continue to refetch data every 10 seconds.
- You can manually refetch data by calling the `refetch` function returned by the hook.
- If any of the `args` are `undefined`, the hook will not attempt to fetch data.