---
title: Dynamic method dispatch
sidebar:
  order: 6
  label: 7.6 Dynamic method dispatch
---

**Dynamic method dispatch** is the mechanism by which Java decides at runtime which overridden method to call. It is the foundation for runtime polymorphism.

**How it works**:

- A superclass reference variable can refer to a subclass object.
- When an overridden method is called through that reference, Java determines the actual object type and invokes the subclass's version.

**Example**:

```java
class Shape {
    void draw() {
        System.out.println("Drawing Shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
}

class Rectangle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        Shape s;
        s = new Circle();
        s.draw(); // "Drawing Circle"

        s = new Rectangle();
        s.draw(); // "Drawing Rectangle"
    }
}
```

**Why is this powerful?** It allows writing code that works on the superclass type, but at runtime it behaves correctly for the actual object type.

**Example with array**:

```java
Shape[] shapes = { new Circle(), new Rectangle(), new Circle() };
for (Shape shape : shapes) {
    shape.draw(); // correct version called for each
}
```

**Dynamic dispatch applies only to instance methods, not static methods (which use compile‑time binding) nor fields (which are accessed based on reference type).**
