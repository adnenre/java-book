---
title: Boolean type (boolean)
sidebar:
  order: 6
  label: 2.2.4 Boolean type (boolean)
---

# Boolean type

`boolean` represents one of two values: `true` or `false`. It is used for logical expressions and control flow.

**Declaration**:

```java
boolean isJavaFun = true;
boolean isRaining = false;
```

**Common uses**:

- **Conditions**:

```java
if (isJavaFun) {
    System.out.println("Java is fun!");
}
```

- **Loop controls**:

```java
boolean keepRunning = true;
while (keepRunning) {
    // do something
    keepRunning = false; // stop condition
}
```

- **Return values** from methods:

```java
public boolean isEven(int number) {
    return number % 2 == 0;
}
```

**Short‑circuit evaluation**: `&&` and `||` evaluate only the necessary operands.

```java
int x = 5;
if (x > 0 && (10 / x) > 1) { // safe: second part only if x > 0
    // ...
}
```

**Note**: Java does not treat integers as booleans (unlike C/C++). You cannot write `if (x)`; you must write `if (x != 0)`.
