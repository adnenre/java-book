---
title: Overriding methods (@Override)
sidebar:
  order: 3
  label: 7.3 Overriding methods (@Override)
---

**Method overriding** occurs when a subclass provides a specific implementation of a method already defined in its superclass.

**Rules for overriding**:

- Same method name, same parameter list (signature).
- Same return type (or covariant return type – subclass of original return type).
- Access level cannot be more restrictive (e.g., `public` cannot override `protected`).
- Cannot override `final` methods.
- Cannot override `static` methods (they are hidden, not overridden).

**Using `@Override` annotation** (optional but recommended):

```java
class Animal {
    void makeSound() {
        System.out.println("Animal sound");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow");
    }
}
```

**Covariant return type**:

```java
class Animal { }
class Dog extends Animal { }

class Shelter {
    Animal getAnimal() { return new Animal(); }
}

class DogShelter extends Shelter {
    @Override
    Dog getAnimal() { return new Dog(); } // Dog is subtype of Animal
}
```

**Calling overridden method from subclass**:

```java
class Child extends Parent {
    @Override
    void display() {
        super.display(); // call parent version
        System.out.println("Child version");
    }
}
```

**Benefits**: Polymorphism, code reuse, extensibility.
