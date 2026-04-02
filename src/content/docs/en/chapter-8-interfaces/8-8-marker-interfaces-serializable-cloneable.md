---
title: Marker interfaces (Serializable, Cloneable)
sidebar:
  order: 8
  label: 8.8 Marker interfaces (Serializable, Cloneable)
---

A **marker interface** is an interface with no methods or constants. It is used to signal or "mark" a class for some special behavior by the JVM or compiler.

**Examples**:

- `java.io.Serializable` – indicates that an object can be serialized (converted to byte stream).
- `java.lang.Cloneable` – indicates that `Object.clone()` is allowed (otherwise throws `CloneNotSupportedException`).
- `java.util.RandomAccess` – indicates that a list supports fast random access.

**Using Serializable**:

```java
import java.io.Serializable;

class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    String name;
    int age;
}
```

**Using Cloneable**:

```java
class Point implements Cloneable {
    int x, y;
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

Point p1 = new Point();
Point p2 = (Point) p1.clone(); // works because Cloneable is implemented
```

**Modern alternatives**:

- Annotations (e.g., `@FunctionalInterface`) have largely replaced marker interfaces.
- However, `Serializable` and `Cloneable` remain widely used.

**Key points**:

- Marker interfaces are a design pattern, not a language feature.
- They provide type information that can be checked using `instanceof`.
- They are part of Java's reflection and serialization mechanisms.
