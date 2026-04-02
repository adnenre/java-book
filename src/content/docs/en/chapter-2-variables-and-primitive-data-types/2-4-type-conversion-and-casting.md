---
title: Type conversion and casting
sidebar:
  order: 8
  label: 2.4 Type conversion and casting
---

## Type conversion

Converting a value from one data type to another.

- **Implicit (widening)**: automatic, safe conversion (smaller type → larger type)
- **Explicit (narrowing)**: manual, may lose information

## Implicit conversion (widening)

Java automatically converts smaller types to larger types when no data loss is possible.

**Widening primitive conversions**:

`byte` → `short` → `int` → `long` → `float` → `double`

`char` → `int` → `long` → `float` → `double`

**Examples**:

```java
int intValue = 100;
long longValue = intValue;      // automatic
float floatValue = longValue;   // automatic
double doubleValue = floatValue;
```

**Assignment context**:

```java
byte b = 10;
int i = b;   // OK
```

**Arithmetic promotion**:

```java
byte a = 5, b = 6;
int result = a + b;   // result is int
```

In expressions, `byte`, `short`, `char` are promoted to `int` before arithmetic.

## Explicit casting (narrowing)

When converting a larger type to a smaller type, you must use a **cast operator** `(type)`. Information may be lost (overflow, precision loss).

```java
double d = 9.78;
int i = (int) d;      // i = 9 (fractional part truncated)
```

**Potential issues**:

- **Overflow**: when the value exceeds the target range
- **Precision loss**: for floating‑point to integer
- **Sign extension**: for signed types

```java
long big = 300;
byte b = (byte) big;   // b = 44 (overflow: 300 % 256 = 44)
```

**Casting between compatible types**:

```java
int intVal = 65;
char ch = (char) intVal;    // ch = 'A'
```

**Casting with expressions**:

```java
float f = 3.14f;
int i = (int) (f * 2);       // parentheses needed
```
