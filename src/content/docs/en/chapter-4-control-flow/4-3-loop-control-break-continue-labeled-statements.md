---
title: Loop control (break, continue, labeled statements)
sidebar:
  order: 9
  label: 4.3 Loop control (break, continue, labeled statements)
---

Java provides `break` and `continue` to control loop execution.

## break

Exits the current loop immediately.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;   // exits loop when i == 5
    }
    System.out.println(i);
}
// Output: 0 1 2 3 4
```

## continue

Skips the remaining code in the current iteration and moves to the next iteration.

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue;   // skip printing 2
    }
    System.out.println(i);
}
// Output: 0 1 3 4
```

## Labeled statements

Labels allow `break` and `continue` to exit or skip multiple nested loops.

**Syntax**:

```java
labelName:
for (...) {
    for (...) {
        break labelName;   // exits outer loop
    }
}
```

**Example**:

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outer;   // exits both loops
        }
        System.out.println(i + ", " + j);
    }
}
```

**Using `continue` with labels**:

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outer;   // skip to next iteration of outer loop
        }
        System.out.println(i + ", " + j);
    }
}
```
