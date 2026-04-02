---
title: Bitwise operators
sidebar:
  order: 6
  label: 3.6 Bitwise operators
---

Bitwise operators work on integer types (`byte`, `short`, `int`, `long`) at the bit level.

| Operator | Description                | Example   |
| -------- | -------------------------- | --------- |
| `&`      | Bitwise AND                | `a & b`   |
| `\|`     | Bitwise OR                 | `a \| b`  |
| `^`      | Bitwise XOR                | `a ^ b`   |
| `~`      | Bitwise complement (unary) | `~a`      |
| `<<`     | Left shift                 | `a << b`  |
| `>>`     | Signed right shift         | `a >> b`  |
| `>>>`    | Unsigned right shift       | `a >>> b` |

**Examples**:

```java
int a = 0b1010; // 10
int b = 0b1100; // 12

System.out.println(a & b); // 0b1000 (8)
System.out.println(a | b); // 0b1110 (14)
System.out.println(a ^ b); // 0b0110 (6)
System.out.println(~a);    // bitwise complement (2's complement)

System.out.println(a << 1); // 0b10100 (20) (shift left by 1 = multiply by 2)
System.out.println(a >> 1); // 0b0101 (5) (signed shift right = divide by 2, sign preserved)
```

**Shift operators**:

- `<<` shifts left, filling with zero bits.
- `>>` shifts right, preserving sign bit (arithmetic shift).
- `>>>` shifts right, always filling with zero bits (logical shift).

```java
int n = -16;
System.out.println(n >> 2);  // -4 (sign extended)
System.out.println(n >>> 2); // large positive (unsigned shift)
```

**Use cases**: Flags, low‑level I/O, encryption, performance‑critical operations.
