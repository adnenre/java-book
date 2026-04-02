---
title: Logical operators
sidebar:
  order: 5
  label: 3.5 Logical operators
---

Logical operators work with boolean values and return a boolean result.

| Operator | Description                | Example  | Result                          |
| -------- | -------------------------- | -------- | ------------------------------- | --- | --- | --- | --------------------------- |
| `&&`     | Logical AND                | `a && b` | `true` if both true             |
| `        |                            | `        | Logical OR                      | `a  |     | b`  | `true` if at least one true |
| `!`      | Logical NOT                | `!a`     | `true` if a false               |
| `^`      | Logical XOR (exclusive OR) | `a ^ b`  | `true` if a and b are different |

**Short‑circuit evaluation**: `&&` and `||` evaluate the second operand only if necessary.

```java
int x = 10;
if (x > 5 && (x / 0) > 1) {
    // Second part not evaluated because first is false.
}
```

**Examples**:

```java
boolean isWeekend = true;
boolean hasWork = false;

if (isWeekend && !hasWork) {
    System.out.println("Relax!");
}

if (isWeekend || hasWork) {
    System.out.println("Either weekend or work.");
}
```

**XOR**: `true ^ true` → `false`; `true ^ false` → `true`.

**Note**: There are also non‑short‑circuit versions `&` and `|` (bitwise operators) that work with booleans but evaluate both operands.
