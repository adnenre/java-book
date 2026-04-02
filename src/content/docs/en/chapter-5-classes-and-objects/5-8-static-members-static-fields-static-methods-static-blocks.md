---
title: Static members (static fields, static methods, static blocks)
sidebar:
  order: 12
  label: 5.8 Static members
---

`static` members belong to the class itself, not to individual instances. They are shared among all objects of the class.

## Static fields

One copy shared by all instances.

```java
class Counter {
    static int count = 0;
    Counter() {
        count++;
    }
}
Counter c1 = new Counter(); // count = 1
Counter c2 = new Counter(); // count = 2
System.out.println(Counter.count); // Access via class name
```

## Static methods

Can be called without an instance. They can only access static members directly.

```java
class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}
int sum = MathUtils.add(5, 3);
```

## Static blocks

Executed when the class is first loaded. Used for static initialization.

```java
class Database {
    static String url;
    static {
        url = "jdbc:mysql://localhost:3306/db";
        System.out.println("Static block executed");
    }
}
```

**Order of execution**: Static blocks run in the order they appear, before any constructor or static method calls.

**Common uses**:

- Constants: `public static final double PI = 3.14159;`
- Factory methods: `public static Car createDefault() { ... }`
- Utility classes (e.g., `Math`, `Collections`)
