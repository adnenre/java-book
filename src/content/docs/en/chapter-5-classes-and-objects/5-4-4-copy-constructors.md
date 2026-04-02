---
title: Copy constructors
sidebar:
  order: 8
  label: 5.4.4 Copy constructors
---

A **copy constructor** creates a new object by copying the state of another object of the same class. Java does not provide a default copy constructor; you must write it yourself.

**Example**:

```java
class Point {
    int x, y;

    // Regular constructor
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Copy constructor
    Point(Point other) {
        this.x = other.x;
        this.y = other.y;
    }
}
```

**Usage**:

```java
Point p1 = new Point(10, 20);
Point p2 = new Point(p1);  // p2 is a copy of p1
```

**Deep copy vs shallow copy**: For objects containing references, you may need a deep copy.

```java
class Address {
    String city;
    Address(Address other) {
        this.city = other.city;
    }
}

class Person {
    String name;
    Address address;

    // Deep copy constructor
    Person(Person other) {
        this.name = other.name;
        this.address = new Address(other.address); // copy nested object
    }
}
```

**Alternatives**: Use `clone()` method or factory methods, but copy constructors are often clearer.
