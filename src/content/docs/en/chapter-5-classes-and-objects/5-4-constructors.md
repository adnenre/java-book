---
title: Constructors
sidebar:
  order: 4
  label: 5.4 Constructors
---

A **constructor** is a special method that initializes an object when it is created. It has the same name as the class and no return type (not even `void`).

**Syntax**:

```java
class ClassName {
    ClassName(parameters) {
        // initialization code
    }
}
```

**Example**:

```java
class Book {
    String title;
    String author;

    // Constructor
    Book(String t, String a) {
        title = t;
        author = a;
    }
}
```

**Calling a constructor**: Using the `new` keyword.

```java
Book myBook = new Book("1984", "Orwell");
```

**Key points**:

- Constructors can be overloaded (different parameter lists).
- If no constructor is defined, Java provides a default no‑argument constructor.
- Constructors cannot be `static`, `final`, or `abstract`.
- They can call other constructors using `this()`.
