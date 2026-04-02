---
title: Method signature and overloading
sidebar:
  order: 1
  label: 6.1 Method signature and overloading
---

## Method signature

A method signature consists of:

- Method name
- Parameter types and order (number, types, and sequence)

**It does NOT include**:

- Return type
- Access modifiers
- Thrown exceptions

```java
public int calculateSum(int a, double b) throws Exception { ... }
// Signature: calculateSum(int, double)
```

## Method overloading

Defining multiple methods with the **same name** but **different parameter lists** (different signatures). Return type alone is not sufficient to overload.

**Valid overloading**:

```java
class Calculator {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
}
```

**Invalid overloading** (only return type differs):

```java
int process(int x) { ... }
double process(int x) { ... } // compilation error
```

**Overloading with varargs**:

```java
void display(String s) { ... }
void display(String... args) { ... } // valid but ambiguous sometimes
```

**Overloading and type promotion**: Java chooses the most specific method.

```java
void print(int i) { System.out.println("int"); }
void print(double d) { System.out.println("double"); }
print(5);      // calls int version
print(5.0);    // calls double version
```
