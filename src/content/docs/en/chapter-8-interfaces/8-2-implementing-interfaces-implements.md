---
title: Implementing interfaces (implements)
sidebar:
  order: 2
  label: 8.2 Implementing interfaces (implements)
---

A class implements an interface using the `implements` keyword. It must provide concrete implementations for all abstract methods of the interface (unless the class is abstract).

**Syntax**:

```java
class ClassName implements Interface1, Interface2, ... {
    // implementations of all abstract methods
}
```

**Example**:

```java
interface Drawable {
    void draw();
    void resize(int factor);
}

class Circle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }

    @Override
    public void resize(int factor) {
        System.out.println("Resizing circle by factor " + factor);
    }
}
```

**Usage**:

```java
Circle c = new Circle();
c.draw();
c.resize(2);

// Polymorphic assignment
Drawable d = new Circle();
d.draw();
```

**Important**: Implementing methods must be `public` (because interface methods are implicitly `public`). Access modifier cannot be reduced.

**Multiple interfaces**:

```java
interface Flyable {
    void fly();
}
interface Swimmable {
    void swim();
}
class Duck implements Flyable, Swimmable {
    public void fly() { System.out.println("Duck flying"); }
    public void swim() { System.out.println("Duck swimming"); }
}
```
