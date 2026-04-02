---
title: if, else if, else
sidebar:
  order: 1
  label: 4.1.1 if, else if, else
---

The `if` statement executes a block of code only if a condition is `true`. Optionally, `else` and `else if` provide alternative paths.

**Syntax**:

```java
if (condition) {
    // executes if condition is true
} else if (anotherCondition) {
    // executes if first condition false and anotherCondition true
} else {
    // executes if all previous conditions false
}
```

**Examples**:

```java
int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
```

**Without braces** (allowed for single statement, but not recommended):

```java
if (x > 0)
    System.out.println("Positive");
```

**Important**: Conditions must be boolean expressions.

```java
int x = 5;
// if (x) { ... } // error: int cannot be converted to boolean
if (x != 0) { ... } // correct
```
