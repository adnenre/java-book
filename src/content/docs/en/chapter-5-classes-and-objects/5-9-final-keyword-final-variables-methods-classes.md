---
title: Final keyword (final variables, methods, classes)
sidebar:
  order: 13
  label: 5.9 Final keyword
---

The `final` keyword restricts modification. Its meaning depends on where it is applied.

## final variables

Cannot be reassigned after initialization. They are constants.

```java
final double PI = 3.14159;
PI = 3.14; // compilation error

// Blank final (initialized in constructor)
final int MAX_SIZE;
MyClass() {
    MAX_SIZE = 100;
}
```

## final methods

Cannot be overridden by subclasses.

```java
class Parent {
    final void display() {
        System.out.println("Cannot override");
    }
}
class Child extends Parent {
    // void display() { } // error: cannot override
}
```

## final classes

Cannot be extended (subclassed).

```java
final class ImmutableClass {
    // ...
}
// class SubClass extends ImmutableClass { } // error
```

**Use cases**:

- `final` variables: for true constants (often `static final`)
- `final` methods: to prevent breaking internal logic
- `final` classes: for immutability (e.g., `String`, `Integer`)

**Note**: `final` does not make objects immutable; only the reference is fixed.
