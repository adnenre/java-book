---
title: Primitive data types
sidebar:
  order: 2
  label: 2.2 Primitive data types
---

# Primitive data types

Java has eight **primitive data types** that represent simple values. They are not objects and are stored directly in memory.

| Type      | Size                  | Range / Values                                 |
| --------- | --------------------- | ---------------------------------------------- |
| `byte`    | 1 byte                | -128 to 127                                    |
| `short`   | 2 bytes               | -32,768 to 32,767                              |
| `int`     | 4 bytes               | -2³¹ to 2³¹‑1 (≈ ±2.1 billion)                 |
| `long`    | 8 bytes               | -2⁶³ to 2⁶³‑1                                  |
| `float`   | 4 bytes               | ±3.4E‑38 to ±3.4E+38 (6‑7 significant digits)  |
| `double`  | 8 bytes               | ±1.7E‑308 to ±1.7E+308 (15 significant digits) |
| `char`    | 2 bytes               | 0 to 65,535 (Unicode characters)               |
| `boolean` | not precisely defined | `true` or `false`                              |

## Why primitives?

- **Performance**: faster than objects because they live on the stack.
- **Simplicity**: directly represent numbers, characters, and booleans.

**Examples**:

```java
byte b = 100;
short s = 30000;
int i = 2_000_000;      // underscores for readability
long l = 9_000_000_000L; // L suffix for long
float f = 3.14f;         // f suffix for float
double d = 3.1415926535;
char c = 'A';
boolean flag = false;
```
