---
title: Relational operators
sidebar:
  order: 3
  label: 3.3 Relational operators
---

Relational operators compare two values and return a boolean result (`true` or `false`). They are used in conditions like `if`, `while`, etc.

| Operator | Description           | Example  |
| -------- | --------------------- | -------- |
| `<`      | Less than             | `a < b`  |
| `<=`     | Less than or equal    | `a <= b` |
| `>`      | Greater than          | `a > b`  |
| `>=`     | Greater than or equal | `a >= b` |

**Examples**:

```java
int age = 18;
if (age >= 18) {
    System.out.println("Adult");
}

double score = 85.5;
if (score < 60) {
    System.out.println("Fail");
}
```

**Important**: Relational operators work with numeric types only (including `char`). For objects, use methods like `compareTo()`.

```java
char c1 = 'A', c2 = 'B';
System.out.println(c1 < c2); // true (based on Unicode value)
```
