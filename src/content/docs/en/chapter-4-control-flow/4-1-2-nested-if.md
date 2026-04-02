---
title: Nested if
sidebar:
  order: 2
  label: 4.1.2 Nested if
---

A **nested if** is an `if` statement inside another `if` or `else` block. It allows checking multiple conditions at different levels.

**Example**:

```java
int age = 25;
boolean hasLicense = true;

if (age >= 18) {
    System.out.println("Adult");
    if (hasLicense) {
        System.out.println("Can drive");
    } else {
        System.out.println("Cannot drive");
    }
} else {
    System.out.println("Minor");
}
```

**Nested if‑else if**:

```java
int x = 10, y = 20;

if (x > 0) {
    if (y > 0) {
        System.out.println("Both positive");
    } else {
        System.out.println("x positive, y non‑positive");
    }
} else {
    System.out.println("x non‑positive");
}
```

**Best practices**:

- Avoid deep nesting (more than 2‑3 levels) for readability.
- Consider extracting inner conditions into separate methods or using logical operators (`&&`, `||`).

```java
// Instead of deep nesting:
if (x > 0 && y > 0) {
    System.out.println("Both positive");
}
```
