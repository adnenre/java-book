---
title: Integer types (byte, short, int, long)
sidebar:
  order: 3
  label: 2.2.1 Integer types (byte, short, int, long)
---

# Integer types

Java provides four integer types to represent whole numbers. Choose the smallest type that fits your range to save memory.

| Type    | Size    | Range             | Use case                                       |
| ------- | ------- | ----------------- | ---------------------------------------------- |
| `byte`  | 1 byte  | -128 to 127       | small counters, file I/O, network data         |
| `short` | 2 bytes | -32,768 to 32,767 | rarely used, mostly for compatibility          |
| `int`   | 4 bytes | -2³¹ to 2³¹‑1     | default integer type, most common              |
| `long`  | 8 bytes | -2⁶³ to 2⁶³‑1     | large numbers (e.g., timestamps, large counts) |

**Literals**:

- Decimal: `int i = 100;`
- Octal (prefix `0`): `int octal = 012;` // decimal 10
- Hexadecimal (prefix `0x`): `int hex = 0x1A;` // decimal 26
- Binary (prefix `0b`): `int bin = 0b1010;` // decimal 10
- Underscores: `int million = 1_000_000;`

**Long literals** must end with `L` or `l`:

```java
long big = 2_147_483_648L;   // beyond int range
```

**Operations**:

```java
int a = 10, b = 3;
int sum = a + b;      // 13
int product = a * b;  // 30
int division = a / b; // 3 (integer division truncates)
int remainder = a % b; // 1
```

Be careful with overflow: if the result exceeds the range, it wraps around silently.

```java
int max = Integer.MAX_VALUE; // 2_147_483_647
int overflow = max + 1;      // becomes -2_147_483_648
```
