---
title: Operator precedence and associativity
sidebar:
  order: 9
  label: 3.9 Operator precedence and associativity
---

Operator precedence determines the order in which operators are evaluated. Associativity determines the direction (left‑to‑right or right‑to‑left) when operators have the same precedence.

**Precedence table (highest to lowest)**:

| Precedence | Operators                           | Associativity |
| ---------- | ----------------------------------- | ------------- |
| 1          | `++` `--` `+` `-` `~` `!` (postfix) | right‑to‑left |
| 2          | `*` `/` `%`                         | left‑to‑right |
| 3          | `+` `-`                             | left‑to‑right |
| 4          | `<<` `>>` `>>>`                     | left‑to‑right |
| 5          | `<` `<=` `>` `>=` `instanceof`      | left‑to‑right |
| 6          | `==` `!=`                           | left‑to‑right |
| 7          | `&`                                 | left‑to‑right |
| 8          | `^`                                 | left‑to‑right |
| 9          | `\|`                                | left‑to‑right |
| 10         | `&&`                                | left‑to‑right |
| 11         | `\|\|`                              | left‑to‑right |
| 12         | `? :`                               | right‑to‑left |
| 13         | `=` `+=` `-=` etc.                  | right‑to‑left |

**Examples**:

```java
int a = 5 + 3 * 2; // 5 + (3*2) = 11
int b = (5 + 3) * 2; // (5+3)*2 = 16
```

**Associativity**:

```java
int c = 10 / 5 * 2; // (10/5)*2 = 4 (left‑to‑right)
int d = a = b = 5; // a = (b = 5) (right‑to‑left)
```

**Use parentheses to make intent clear**:

```java
if ((x > 0) && (y < 10)) { ... }
```
