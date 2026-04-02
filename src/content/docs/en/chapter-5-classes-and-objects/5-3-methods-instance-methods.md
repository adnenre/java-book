---
title: Methods (instance methods)
sidebar:
  order: 3
  label: 5.3 Methods (instance methods)
---

**Methods** define the behavior of an object. They can access and modify instance variables.

**Syntax**:

```java
returnType methodName(parameterList) {
    // method body
}
```

**Example**:

```java
class Rectangle {
    double width, height;

    double calculateArea() {
        return width * height;
    }

    void setDimensions(double w, double h) {
        width = w;
        height = h;
    }
}
```

**Calling methods**:

```java
Rectangle rect = new Rectangle();
rect.setDimensions(5, 10);
double area = rect.calculateArea();
```

**Method modifiers**:

- `public`, `private`, `protected` – access control
- `static` – belongs to class
- `abstract` – no body, must be overridden
- `final` – cannot be overridden
- `synchronized` – thread‑safe

**Return types**:

- Primitive or reference type
- `void` – no return value

**Parameters**: Passed by value (for primitives) or reference (objects).
