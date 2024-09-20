# useGetAccountNativeBalance

Use this hook to fetch the MOVE balance for an address.

```
const balance = useGetAccountNativeBalance(address);
```

This example retrieves Move balance of the address and stores the details in the balance object.

### **Parameters**

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| address   | string | Address of the account. |

### **Return Value**

* `balance`: Object containing Move balance for this address.
