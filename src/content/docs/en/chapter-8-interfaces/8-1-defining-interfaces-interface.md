---
title: Defining interfaces (interface)
sidebar:
  order: 1
  label: 8.1 Defining interfaces (interface)
---

An **interface** in Java is a contract that defines what a class can do without specifying how. It contains abstract methods (until Java 8 added defaults and statics). Interfaces enable abstraction, multiple inheritance of type, and polymorphism.

# Definition of interface

An interface is defined using the `interface` keyword. It can contain:

- Abstract methods (implicitly `public abstract`)
- Constant fields (implicitly `public static final`)
- Default methods (Java 8+)
- Static methods (Java 8+)
- Private methods (Java 9+)

**Syntax**:

```java
interface Drawable {
// constant
int COLOR = 0xFF0000; // public static final

    // abstract method (no body)
    void draw();

    // default method (Java 8)
    default void display() {
        System.out.println("Displaying");
    }

    // static method (Java 8)
    static void info() {
        System.out.println("Drawable interface");
    }

}
```

**Characteristics**:

- All fields are implicitly `public static final`.
- All abstract methods are implicitly `public abstract` (no need to write these modifiers).
- Interfaces cannot be instantiated directly.
- An interface can extend multiple interfaces.

**Example with only abstract methods (traditional)**:

```java
interface Animal {
    void eat();
    void sleep();
}
```
