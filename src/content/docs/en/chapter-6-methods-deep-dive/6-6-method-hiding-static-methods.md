---
title: Method hiding (static methods)
sidebar:
  order: 8
  label: 6.6 Method hiding
---

**Method hiding** occurs when a subclass defines a `static` method with the same signature as a `static` method in its superclass. This is different from overriding (which applies to instance methods).

**Key differences**:

- Overriding: instance methods – dynamic dispatch based on object type.
- Hiding: static methods – dispatch based on reference type (compile‑time).

**Example**:

```java
class Parent {
    static void display() {
        System.out.println("Parent static");
    }
    void show() {
        System.out.println("Parent instance");
    }
}

class Child extends Parent {
    static void display() {   // hides Parent.display()
        System.out.println("Child static");
    }
    @Override
    void show() {              // overrides Parent.show()
        System.out.println("Child instance");
    }
}
```

**Calling behavior**:

```java
Parent p = new Child();
p.display(); // "Parent static"  (based on reference type)
p.show();    // "Child instance" (based on object type)

Child c = new Child();
c.display(); // "Child static"
```

**Accessing hidden method**: Use the superclass name.

```java
Parent.display();  // calls Parent's version
Child.display();   // calls Child's version
```

**Best practices**:

- Avoid hiding static methods; it can be confusing.
- If you need to, use different names or clearly document the behavior.
- Use `@Override` only for instance methods; it does not apply to static methods.
