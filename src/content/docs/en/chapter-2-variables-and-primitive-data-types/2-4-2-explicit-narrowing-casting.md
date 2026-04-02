---
title: Explicit (narrowing) casting
sidebar:
  order: 9
  label: 2.4.2 Explicit (narrowing) casting
---

**Explicit casting**, also known as **narrowing conversion**, is required when assigning a value of a larger data type to a variable of a smaller data type. This can result in data loss (overflow, underflow, or precision loss). The cast operator `(type)` tells the compiler that you are aware of the potential loss.

## Syntax

```java
targetType variableName = (targetType) expression;
```

## Examples

**Truncation** (floating‑point to integer):

```java
double pi = 3.14159;
int intPi = (int) pi; // intPi = 3 (fractional part discarded)
```

**Overflow** (value out of range):

```java
long big = 300;
byte small = (byte) big; // small = 44 (300 % 256 = 44)
```

**Sign extension**: When converting a signed type, the sign bit is preserved, which may produce unexpected values.

```java
byte b = -50;
int i = (int) b; // i = -50 (no loss, widening)
// Narrowing back:
byte b2 = (byte) i; // still -50
```

**char to integer and back**:

```java
int code = 65;
char ch = (char) code; // ch = 'A'
```

## Casting in expressions

When casting a result of an expression, enclose the expression in parentheses:

```java
double a = 9.7, b = 2.3;
int result = (int) (a + b); // result = 12 (a+b = 12.0 → truncated)
```

## Potential issues

1. **Precision loss** – converting `double` to `float` or `int` loses fractional part.
2. **Overflow** – value may wrap around (e.g., 300 → 44 when casting to `byte`).
3. **Unexpected values** – sign extension can cause large positive values to become negative.

## When to use explicit casting

- When you intentionally want to truncate a floating‑point number.
- When interfacing with APIs that require a smaller type and you know the value fits.
- When performing bit manipulation or low‑level operations.

## Compiler checks

The compiler prevents implicit narrowing assignments to avoid accidental data loss. You must use a cast to override.

```java
int i = 100;
byte b = i; // compilation error
byte b2 = (byte) i; // OK (but may lose data)
```
