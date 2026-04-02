---
title: Implicit (widening) conversion
sidebar:
  order: 8
  label: 2.4.1 Implicit (widening) conversion
---

**Implicit conversion**, also known as **widening conversion**, occurs automatically when a value of a smaller data type is assigned to a variable of a larger data type. No data loss is possible because the target type can hold all values of the source type.

## Widening primitive conversions

The following conversions are performed automatically:

`byte` → `short` → `int` → `long` → `float` → `double`

`char` → `int` → `long` → `float` → `double`

**Examples**:

```java
byte b = 10;
short s = b;        // byte → short
int i = s;          // short → int
long l = i;         // int → long
float f = l;        // long → float
double d = f;       // float → double
```

**char to int**:

```java
char ch = 'A';
int code = ch;      // char → int (65)
```

## Assignment context

In assignment, widening conversion is automatically applied.

```java
int intVal = 100;
long longVal = intVal;   // OK
double doubleVal = intVal; // OK
```

## Arithmetic promotion

In expressions, operands are promoted to a common type before the operation:

- If either operand is `double`, the other is promoted to `double`.
- Else if either is `float`, promoted to `float`.
- Else if either is `long`, promoted to `long`.
- Else both are promoted to `int`.

**Examples**:

```java
byte a = 10, b = 20;
int c = a + b;   // a and b are promoted to int, result is int

double d = a + 5.5;  // a promoted to double, result double
```

## Method invocation

When calling a method, arguments are widened if necessary to match the parameter type.

```java
public void print(double value) {
    System.out.println(value);
}

print(10);   // int is widened to double automatically
```

## Benefits

- **Simplicity** – you don’t need explicit casts for safe conversions.
- **Safety** – no data loss (except possible precision loss when converting `long` to `float` or `double` due to floating‑point representation, but Java still considers it a widening conversion).

**Note**: Converting `int` to `float` or `long` to `double` is considered a widening conversion, but precision may be lost because floating‑point types have limited mantissa. However, Java still performs it implicitly.
