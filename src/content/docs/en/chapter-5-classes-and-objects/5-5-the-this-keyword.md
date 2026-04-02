---
title: The this keyword
sidebar:
  order: 9
  label: 5.5 The this keyword
---

The `this` keyword refers to the current object instance. It is used to:

1. Distinguish instance variables from parameters with the same name.
2. Call another constructor from a constructor (`this(...)`).
3. Pass the current object as an argument.
4. Return the current object from a method.

**1. Resolve name conflicts**:

```java
class Person {
    String name;
    Person(String name) {
        this.name = name;  // this.name refers to instance variable
    }
}
```

**2. Call another constructor**:

```java
class Rectangle {
    int width, height;
    Rectangle() {
        this(0, 0);  // calls parameterized constructor
    }
    Rectangle(int w, int h) {
        width = w;
        height = h;
    }
}
```

**3. Pass current object**:

```java
class Processor {
    void process(Person p) { ... }
}

class Person {
    void submit() {
        Processor proc = new Processor();
        proc.process(this);  // pass current Person object
    }
}
```

**4. Return current object (method chaining)**:

```java
class Counter {
    int count;
    Counter increment() {
        count++;
        return this;
    }
}
Counter c = new Counter().increment().increment(); // chaining
```
