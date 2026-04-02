---
title: The super keyword
sidebar:
  order: 4
  label: 7.4 The super keyword
---

The `super` keyword refers to the immediate superclass. It is used for two purposes:

## 1. Access superclass fields and methods

When a subclass overrides a method or hides a field, `super` can be used to access the superclass version.

```java
class Parent {
    String name = "Parent";
    void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    String name = "Child";
    void show() {
        super.show();                 // call parent method
        System.out.println(super.name); // access parent field
        System.out.println(this.name);   // child field
    }
}
```

## 2. Call superclass constructor

The `super()` call must be the first statement in a constructor. It invokes the parent class constructor.

```java
class Parent {
    Parent(String message) {
        System.out.println("Parent: " + message);
    }
}

class Child extends Parent {
    Child(String msg) {
        super(msg);   // must be first
        System.out.println("Child constructor");
    }
}
```

**Important**: If a constructor does not explicitly call `super()` or `this()`, the compiler inserts `super()` (calling the no‑argument constructor of the parent). If the parent lacks a no‑argument constructor, you must explicitly call a parameterized `super()`.

```java
class Parent {
    Parent(int x) { }
}
class Child extends Parent {
    Child() {
        super(10); // required
    }
}
```
