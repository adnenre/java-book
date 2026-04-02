---
title: Final classes and methods
sidebar:
  order: 8
  label: 7.8 Final classes and methods
---

The `final` keyword can be applied to classes and methods to restrict inheritance and overriding.

## final classes

A `final` class cannot be extended (subclassed).

```java
final class ImmutableClass {
    // ...
}
// class Child extends ImmutableClass { } // error
```

**Use cases**: Immutability (e.g., `String`, `Integer`), security, or design where inheritance would break invariants.

## final methods

A `final` method cannot be overridden by subclasses.

```java
class Parent {
    final void cannotOverride() {
        System.out.println("This method is final");
    }
}

class Child extends Parent {
    // void cannotOverride() { } // error
}
```

**Use cases**: Preventing modification of critical behavior, performance (early binding), or ensuring correctness of algorithms.

## Comparison

| Modifier         | Can be extended? | Can be overridden? |
| ---------------- | ---------------- | ------------------ |
| `final class`    | No               | N/A                |
| non‑final class  | Yes              | –                  |
| `final method`   | –                | No                 |
| non‑final method | –                | Yes                |

**Note**: `final` does not affect static methods (they are hidden, not overridden). Also, `final` methods can be overloaded (different parameters) – that's allowed.
