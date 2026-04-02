---
title: Switch statement (traditional and enhanced with arrows, yield)
sidebar:
  order: 3
  label: 4.1.3 Switch statement
---

The `switch` statement selects one of many code blocks to execute based on the value of an expression.

## Traditional switch (fall‑through)

Uses `case` and `break` to prevent fall‑through.

```java
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}
```

Without `break`, execution continues to the next `case` (fall‑through).

## Enhanced switch (Java 14+)

Uses `->` arrows (no fall‑through) and can return a value with `yield`.

**Arrow syntax**:

```java
switch (day) {
    case 1 -> System.out.println("Monday");
    case 2 -> System.out.println("Tuesday");
    case 3 -> System.out.println("Wednesday");
    default -> System.out.println("Other day");
}
```

**Multiple labels**:

```java
switch (day) {
    case 1, 2, 3 -> System.out.println("Weekday");
    case 6, 7 -> System.out.println("Weekend");
    default -> System.out.println("Invalid");
}
```

**Using `yield` to return a value**:

```java
String result = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};
```

Or with block:

```java
int numLetters = switch (day) {
    case 1 -> {
        System.out.println("Monday");
        yield 6;   // returns 6
    }
    case 2 -> {
        System.out.println("Tuesday");
        yield 7;
    }
    default -> 0;
};
```
