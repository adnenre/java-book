---
title: Polymorphism (compile‑time vs runtime)
sidebar:
  order: 5
  label: 7.5 Polymorphism (compile‑time vs runtime)
---

**Polymorphism** means "many forms". Java supports two types:

## Compile‑time polymorphism (static polymorphism)

Achieved through **method overloading**. The method to call is determined at compile time based on the argument types.

```java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}
// Call resolved at compile time
```

## Runtime polymorphism (dynamic polymorphism)

Achieved through **method overriding**. The method to call is determined at runtime based on the actual object type, not the reference type.

```java
Animal a = new Dog();
a.makeSound(); // Dog's makeSound() called at runtime
```

**Key difference**:

| Aspect           | Compile‑time | Runtime                            |
| ---------------- | ------------ | ---------------------------------- |
| Also known as    | Overloading  | Overriding                         |
| Resolution time  | Compilation  | Execution                          |
| Method signature | Must differ  | Must be same                       |
| Performance      | Faster       | Slightly slower (dynamic dispatch) |

**Example demonstrating both**:

```java
class Parent {
    void print(int x) { System.out.println("Parent int: " + x); } // overloaded
    void print(double x) { System.out.println("Parent double: " + x); }
    void display() { System.out.println("Parent display"); }
}

class Child extends Parent {
    @Override
    void display() { System.out.println("Child display"); }
    // Overloading inside child
    void print(String s) { System.out.println("Child string: " + s); }
}

Parent p = new Child();
p.print(10);       // compile‑time: Parent.print(int)
p.display();       // runtime: Child.display()
// p.print("hello"); // error: Parent has no print(String)
```
