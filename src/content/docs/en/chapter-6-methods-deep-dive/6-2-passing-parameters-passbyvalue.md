---
title: Passing parameters (pass‑by‑value)
sidebar:
  order: 2
  label: 6.2 Passing parameters (pass‑by‑value)
---

Java is **strictly pass‑by‑value**. This means a copy of the argument's value is passed to the method.

## With primitive types

The method receives a copy of the value. Changes to the parameter do not affect the original.

```java
void increment(int x) {
    x++;
}
int a = 5;
increment(a);
System.out.println(a); // still 5
```

## With reference types

The method receives a copy of the **reference** (the memory address). The reference copy points to the same object.

- Changing the **object's fields** affects the original object.
- Reassigning the parameter to a **new object** does NOT affect the original reference.

```java
class Person { String name; }

void changeName(Person p) {
    p.name = "Bob";   // modifies original object
}

void reassign(Person p) {
    p = new Person(); // local copy now points to new object
    p.name = "Charlie";
}

Person alice = new Person();
alice.name = "Alice";
changeName(alice);
System.out.println(alice.name); // Bob

reassign(alice);
System.out.println(alice.name); // still Bob (original reference unchanged)
```

**Key takeaway**: You cannot swap two objects using a method because Java copies references, not the objects themselves.
