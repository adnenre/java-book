---
title: Variable scope and lifetime
sidebar:
  order: 9
  label: 2.5 Variable scope and lifetime
---

# Variable scope and lifetime

**Scope** defines where a variable can be accessed. **Lifetime** is how long the variable exists in memory.

## Types of scope

1. **Block scope** – variables declared inside a block `{}` are only visible within that block.

```java
{
    int x = 10;   // scope starts here
    // x is accessible
}
// x is not accessible here
```

2. **Method scope** – parameters and local variables declared inside a method are only visible inside that method.

```java
public void myMethod(int param) {   // param scope is whole method
    int local = 5;                  // local scope is the method
    // both accessible here
}
```

3. **Class scope** – instance variables (non‑static) are accessible throughout the class (subject to access modifiers).

4. **Static scope** – static variables belong to the class and are accessible everywhere the class is.

**Example of block scope**:

```java
public void demo() {
    int a = 1;
    if (a > 0) {
        int b = 2;        // b's scope is only the if block
        System.out.println(a + b);
    }
    // System.out.println(b); // error: b not in scope
}
```

**Shadowing**: A variable in an inner scope can hide a variable in an outer scope.

```java
int x = 5;
{
    int x = 10;   // shadows outer x
    System.out.println(x); // prints 10
}
System.out.println(x); // prints 5
```

## Lifetime

- **Local variables** – created when execution enters their block, destroyed when block exits.
- **Instance variables** – created when an object is instantiated, destroyed when object is garbage collected.
- **Static variables** – created when class is loaded, destroyed when class is unloaded (typically at program end).

**Example**:

```java
public class LifetimeDemo {
    static int staticVar = 1;    // lives for whole program
    int instanceVar = 2;         // lives per object

    public void method() {
        int localVar = 3;        // lives only during method call
        // ...
    }
}
```
