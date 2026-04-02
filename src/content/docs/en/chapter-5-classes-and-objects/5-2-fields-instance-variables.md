---
title: Fields (instance variables)
sidebar:
  order: 2
  label: 5.2 Fields (instance variables)
---

**Fields** (also called instance variables) store the state of an object. Each object gets its own copy of these variables.

**Declaration**:

```java
class Car {
    String model;      // instance variable
    int year;          // instance variable
    double price;      // instance variable
}
```

**Initialization**:

Fields can be initialized at declaration or in constructors.

```java
class Car {
    String model = "Unknown";
    int year;

    Car(int year) {
        this.year = year;
    }
}
```

**Default values**: If not initialized, fields get default values (0, false, null, etc.).

**Access**:

```java
Car myCar = new Car();
myCar.model = "Tesla";
System.out.println(myCar.year);
```

**Field modifiers**:

- `public`, `private`, `protected` – access control
- `static` – belongs to class, not instance
- `final` – constant (cannot be changed)
- `transient` – excluded from serialization
- `volatile` – used in multi‑threading
