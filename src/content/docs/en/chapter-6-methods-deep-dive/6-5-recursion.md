---
title: Recursion
sidebar:
  order: 5
  label: 6.5 Recursion
---

**Recursion** occurs when a method calls itself. It is a technique for solving problems by breaking them into smaller, similar sub‑problems.

**Basic example – factorial**:

```java
int factorial(int n) {
    if (n == 0) return 1;           // base case
    return n * factorial(n - 1);    // recursive call
}
```

**How it works**:

`factorial(4)` → `4 * factorial(3)` → `4 * 3 * factorial(2)` → ... → `4 * 3 * 2 * 1 * 1 = 24`

**Stack usage**: Each recursive call adds a new frame to the call stack. Deep recursion may cause `StackOverflowError`.

**Common recursion examples**:

- Fibonacci sequence
- Binary search
- Tree traversal
- Directory listing

**Fibonacci example**:

```java
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

**Tail recursion**: Java does not optimize tail recursion, but you can convert recursion to iteration for performance.
