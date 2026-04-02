---
title: Private methods in interfaces (Java 9+)
sidebar:
  order: 6
  label: 8.6 Private methods in interfaces (Java 9+)
---

Java 9 introduced **private methods** in interfaces. They can be static or non‑static. Private methods help reduce code duplication among default and static methods.

**Purpose**:

- Share common code between default methods.
- Share common code between static methods.
- Keep implementation details hidden from implementing classes.

**Syntax**:

```java
interface Calculator {
    default int add(int a, int b) {
        log("Adding " + a + " + " + b);
        return a + b;
    }

    default int subtract(int a, int b) {
        log("Subtracting " + a + " - " + b);
        return a - b;
    }

    // private non‑static method
    private void log(String message) {
        System.out.println("LOG: " + message);
    }

    // private static method
    private static void validate(int a, int b) {
        if (a < 0 || b < 0) {
            throw new IllegalArgumentException("Negative values not allowed");
        }
    }
}
```

**Rules**:

- Private methods cannot be accessed from outside the interface.
- Private non‑static methods can be called from default and private non‑static methods.
- Private static methods can be called from static and default methods (but not the other way around).
- They are not visible to implementing classes.

**Benefits**: Better encapsulation and code reuse within the interface.
