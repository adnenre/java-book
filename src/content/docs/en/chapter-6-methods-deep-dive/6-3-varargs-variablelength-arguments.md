---
title: Varargs (variable‑length arguments)
sidebar:
  order: 3
  label: 6.3 Varargs
---

**Varargs** allow a method to accept zero or more arguments of the same type. The syntax uses an ellipsis (`...`) after the type.

**Syntax**:

```java
returnType methodName(Type... parameterName) { ... }
```

Internally, the varargs parameter is treated as an array.

**Example**:

```java
int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) {
        total += n;
    }
    return total;
}

System.out.println(sum(1, 2, 3));    // 6
System.out.println(sum());           // 0
System.out.println(sum(10));         // 10
```

**Rules**:

- Only one varargs parameter per method.
- It must be the last parameter.

```java
void example(String prefix, int... values) { } // correct
// void example(int... values, String prefix) { } // error
```

**Overloading with varargs** – can be ambiguous; use with care.

```java
void print(int... a) { }
void print(int a, int... b) { }
print(1); // ambiguous: matches both? Actually second is more specific? Java rules.
```

**Use cases**: Logging, formatting, mathematical operations with variable inputs.
