---
title: Literals and constants (final)
sidebar:
  order: 7
  label: 2.3 Literals and constants (final)
---

# Literals and constants

## Literals

A **literal** is a fixed value written directly in the source code.

**Examples**:

```java
int age = 25;               // integer literal
double pi = 3.14159;        // floating‑point literal
char grade = 'A';           // character literal
String name = "Alice";      // string literal (an object)
boolean flag = true;        // boolean literal
```

**Integer literal forms**:

```java
int dec = 42;          // decimal
int oct = 052;         // octal (prefix 0)
int hex = 0x2A;        // hexadecimal (prefix 0x)
int bin = 0b101010;    // binary (prefix 0b)
```

**Underscores in literals** (Java 7+):

```java
int million = 1_000_000;
long creditCard = 1234_5678_9012_3456L;
```

## Constants

A **constant** is a variable whose value cannot be changed after initialization. Declare it with the `final` keyword.

```java
final double PI = 3.141592653589793;
final int MAX_USERS = 100;
```

**Convention**: Constant names are in uppercase with underscores.

**Blank final**: you can declare a `final` variable without initializing it immediately, but you must assign it exactly once.

```java
final int SIZE;
SIZE = 10; // allowed only once
```

**Static constants** are often used for shared immutable values:

```java
public class MathConstants {
    public static final double PI = 3.14159;
    public static final double E = 2.71828;
}
```

They can be accessed as `MathConstants.PI` without creating an instance.
