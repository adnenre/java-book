---
title: Abstract classes and methods (abstract)
sidebar:
  order: 7
  label: 7.7 Abstract classes and methods (abstract)
---

An **abstract class** cannot be instantiated. It may contain **abstract methods** (without a body) and concrete methods.

**Abstract method**:

- Declared with the `abstract` keyword.
- Has no body (ends with semicolon).
- Must be implemented by the first concrete subclass.

**Syntax**:

```java
abstract class Animal {
    abstract void makeSound(); // no body
    void sleep() {             // concrete method
        System.out.println("Sleeping");
    }
}
```

**Concrete subclass must implement abstract methods**:

```java
class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Bark");
    }
}
```

**Key points**:

- Abstract classes can have constructors (called when subclass is instantiated).
- They can have fields, concrete methods, static methods, etc.
- Cannot be instantiated: `new Animal();` // error.
- If a subclass does not implement all abstract methods, it must also be declared `abstract`.

**Why use abstract classes?**

- To provide a common base with shared code and enforce certain methods.
- To define a template for subclasses.

**Abstract vs Interface** (brief): Abstract classes can hold state (fields) and provide partial implementation; interfaces (before Java 8) were purely abstract. Java 8+ interfaces can have default/static methods.
