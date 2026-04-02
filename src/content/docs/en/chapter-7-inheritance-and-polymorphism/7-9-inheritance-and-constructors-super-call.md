---
title: Inheritance and constructors (super() call)
sidebar:
  order: 9
  label: 7.9 Inheritance and constructors (super() call)
---

When an object of a subclass is created, the constructors of all superclasses are called in order from the top of the hierarchy down to the subclass.

**Constructor chaining rules**:

- The first statement of every constructor must be a call to `super(...)` or `this(...)` (another constructor in the same class).
- If no explicit call is present, the compiler inserts `super()` (no‑argument constructor of the parent).
- If the parent class does not have a no‑argument constructor, you **must** explicitly call a parameterized `super(...)`.

**Example**:

```java
class GrandParent {
    GrandParent() {
        System.out.println("GrandParent constructor");
    }
}

class Parent extends GrandParent {
    Parent(String name) {
        // implicit super() calls GrandParent()
        System.out.println("Parent constructor: " + name);
    }
}

class Child extends Parent {
    Child() {
        super("ChildName"); // explicit call to Parent(String)
        System.out.println("Child constructor");
    }
}
```

**Output when `new Child();`**:

```
GrandParent constructor
Parent constructor: ChildName
Child constructor
```

**Important**: If a class defines any constructor (even parameterized), the default no‑argument constructor is not automatically provided. So if you extend such a class, you must explicitly call an existing constructor.

```java
class Base {
    Base(int x) { }
}
class Derived extends Base {
    Derived() {
        super(10); // required
    }
}
```

**Order of field initialization**:

1. Superclass static initializers and static fields
2. Subclass static initializers and static fields
3. Superclass instance initializers and instance fields
4. Superclass constructor
5. Subclass instance initializers and instance fields
6. Subclass constructor
