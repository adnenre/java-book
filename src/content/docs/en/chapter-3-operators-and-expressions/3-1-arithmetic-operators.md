---
title: Arithmetic operators
sidebar:
  order: 1
  label: 3.1 Arithmetic operators
---

Arithmetic operators perform mathematical operations on numeric types.

| Operator | Description         | Example |
| -------- | ------------------- | ------- |
| `+`      | Addition            | `a + b` |
| `-`      | Subtraction         | `a - b` |
| `*`      | Multiplication      | `a * b` |
| `/`      | Division            | `a / b` |
| `%`      | Modulus (remainder) | `a % b` |

**Examples**:

```java
int a = 10, b = 3;
System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3 (integer division)
System.out.println(a % b); // 1
```

**Division with floating‑point**:

```java
double x = 10.0, y = 3.0;
System.out.println(x / y); // 3.3333333333333335
```

**Division by zero**:

- Integer division by zero throws `ArithmeticException`.
- Floating‑point division by zero yields `Infinity` or `NaN`.

```java
// int zeroDiv = 10 / 0; // throws ArithmeticException
double inf = 10.0 / 0.0; // Infinity
```

**Modulus with negative numbers**:
The sign of the result is the sign of the dividend.

```java
System.out.println(10 % 3);  // 1
System.out.println(10 % -3); // 1
System.out.println(-10 % 3); // -1
```
