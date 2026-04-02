---
title: Unary operators
sidebar:
  order: 8
  label: 3.8 Unary operators
---

Unary operators operate on a single operand. They include increment, decrement, sign, and logical NOT.

| Operator | Description            | Example        |
| -------- | ---------------------- | -------------- |
| `+`      | Unary plus (no effect) | `+a`           |
| `-`      | Unary minus (negation) | `-a`           |
| `++`     | Increment by 1         | `a++` or `++a` |
| `--`     | Decrement by 1         | `a--` or `--a` |
| `!`      | Logical NOT            | `!flag`        |
| `~`      | Bitwise complement     | `~a`           |

**Increment/Decrement**:

- **Prefix** (`++a`): increments then uses the value.
- **Postfix** (`a++`): uses the value then increments.

```java
int x = 5;
System.out.println(++x); // 6 (x becomes 6, then printed)
System.out.println(x++); // 6 (printed, then x becomes 7)
System.out.println(x);   // 7
```

**Unary plus/minus**:

```java
int a = 10;
int b = -a; // b = -10
int c = +a; // c = 10 (unary plus does nothing)
```

**Logical NOT**:

```java
boolean flag = true;
System.out.println(!flag); // false
```
