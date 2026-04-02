---
title: Extending classes (extends)
sidebar:
  order: 1
  label: 7.1 Extending classes (extends)
---

The `extends` keyword is used to create a subclass that inherits from a superclass.

**Syntax**:

```java
class Subclass extends Superclass {
    // additional fields and methods
}
```

**Example**:

```java
class Animal {
    String name;
    void eat() {
        System.out.println(name + " is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking");
    }
}
```

**Usage**:

```java
Dog dog = new Dog();
dog.name = "Rex";
dog.eat();  // inherited from Animal
dog.bark(); // defined in Dog
```

**What is inherited?**

- All `public` and `protected` members (fields and methods)
- `default` (package‑private) members if subclass is in same package
- **Private members are NOT inherited** (but can be accessed indirectly via public/protected methods).

**Java supports single inheritance**: a class can extend only one direct superclass. Multiple inheritance of classes is not allowed, but multiple interface implementation is possible.

**Inheritance hierarchy**:

```java
class Vehicle { }
class Car extends Vehicle { }
class ElectricCar extends Car { }
```
