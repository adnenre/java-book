---
title: Default methods (default)
sidebar:
  order: 4
  label: 8.4 Default methods (default)
---

Introduced in Java 8, **default methods** allow interfaces to provide concrete method implementations without breaking existing code. They are defined with the `default` keyword.

**Purpose**:

- Evolve interfaces by adding new methods without forcing all implementing classes to provide implementation.
- Provide common behavior that can be overridden if needed.

**Syntax**:

```java
interface Vehicle {
    void start();

    default void honk() {
        System.out.println("Beep beep!");
    }
}
```

**Using default methods**:

```java
class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car starting");
    }
    // honk() is inherited (can be overridden optionally)
}

Car car = new Car();
car.start();  // Car starting
car.honk();   // Beep beep!
```

**Overriding default methods**:

```java
class ElectricCar implements Vehicle {
    @Override
    public void start() {
        System.out.println("Electric car silently starts");
    }
    @Override
    public void honk() {
        System.out.println("Electric beep");
    }
}
```

**Conflict resolution**: When a class implements multiple interfaces with conflicting default methods, the class must override the method. Use `InterfaceName.super.methodName()` to call a specific default.

**Note**: Default methods are not allowed to override `Object` class methods (e.g., `equals`, `hashCode`).
