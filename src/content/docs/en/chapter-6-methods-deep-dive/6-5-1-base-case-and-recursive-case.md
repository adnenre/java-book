---
title: Base case and recursive case
sidebar:
  order: 6
  label: 6.5.1 Base case and recursive case
---

Every recursive method must have two parts:

## Base case

The condition that stops the recursion. It provides a direct answer for the smallest instance of the problem.

## Recursive case

The part where the method calls itself with a smaller or simpler input, moving toward the base case.

**Example – power function**:

```java
int power(int base, int exponent) {
    // Base case: exponent == 0
    if (exponent == 0) {
        return 1;
    }
    // Recursive case: base^exponent = base * base^(exponent-1)
    return base * power(base, exponent - 1);
}
```

**Multiple base cases**:

```java
int fibonacci(int n) {
    if (n == 0) return 0;      // base case 1
    if (n == 1) return 1;      // base case 2
    return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}
```

**Common mistake**: Missing base case leads to infinite recursion and `StackOverflowError`.

```java
int infinite(int n) {
    return infinite(n - 1); // no base case
}
```

**Tips**:

- Always define a base case that is reachable.
- Ensure the recursive case reduces the problem size.
- Test with small inputs first.
