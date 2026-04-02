---
title: Defining classes (class)
sidebar:
  order: 1
  label: 5.1 Defining classes (class)
---

A class is defined using the `class` keyword, followed by the class name and a body `{}` containing fields and methods.

**Syntax**:

```java
class ClassName {
    // fields
    // constructors
    // methods
}
```

**Example**:

```java
class Person {
    String name;
    int age;

    void speak() {
        System.out.println("Hello, my name is " + name);
    }
}
```

**Naming conventions**:

- Class names start with an uppercase letter (PascalCase).
- Use meaningful, descriptive names.

**Class modifiers**:

- `public` – accessible from anywhere (most common)
- `abstract` – cannot be instantiated
- `final` – cannot be subclassed
- `strictfp` – strict floating‑point behavior

```java
public class Employee {
    // ...
}
```
