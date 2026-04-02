---
title: Static methods in interfaces
sidebar:
  order: 5
  label: 8.5 Static methods in interfaces
---

Java 8 allows **static methods** in interfaces. They belong to the interface itself, not to implementing classes.

**Syntax**:

```java
interface MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}
```

**Usage**:

```java
int sum = MathUtils.add(5, 3);  // called on the interface, not on an instance
```

**Important rules**:

- Static methods cannot be overridden by implementing classes.
- They are not inherited by implementing classes (unlike default methods).
- They can only be accessed using the interface name.

```java
class MyMath implements MathUtils {
    // Cannot override static add()
    void test() {
        // add(1,2); // error: cannot call static method from interface via class
        MathUtils.add(1,2); // correct
    }
}
```

**Use cases**:

- Utility methods related to the interface (e.g., factory methods, helper functions).
- Grouping related static methods without needing a separate utility class.

**Note**: Static methods in interfaces cannot be called from an instance of the implementing class.
