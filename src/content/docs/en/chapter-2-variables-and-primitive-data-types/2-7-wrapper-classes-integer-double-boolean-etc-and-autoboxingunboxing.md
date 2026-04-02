---
title: Wrapper classes (Integer, Double, Boolean, etc.) and autoboxing/unboxing
sidebar:
  order: 11
  label: 2.7 Wrapper classes and autoboxing/unboxing
---

# Wrapper classes and autoboxing/unboxing

Java provides **wrapper classes** for each primitive type, allowing primitives to be treated as objects.

| Primitive | Wrapper class |
| --------- | ------------- |
| `byte`    | `Byte`        |
| `short`   | `Short`       |
| `int`     | `Integer`     |
| `long`    | `Long`        |
| `float`   | `Float`       |
| `double`  | `Double`      |
| `char`    | `Character`   |
| `boolean` | `Boolean`     |

## Why wrappers?

- **Collections** (like `ArrayList`) can only store objects, not primitives.
- **Methods** that require objects (e.g., reflection, generics).
- **Utility methods**: parsing, converting, etc.

## Autoboxing

Automatic conversion from a primitive to its wrapper object.

```java
Integer i = 10;            // autoboxing: int → Integer
Double d = 3.14;           // autoboxing: double → Double
```

## Unboxing

Automatic conversion from a wrapper object to its primitive.

```java
int num = i;               // unboxing: Integer → int
double pi = d;             // unboxing: Double → double
```

## Example with collections

```java
List<Integer> numbers = new ArrayList<>();
numbers.add(5);            // autoboxing int → Integer
int first = numbers.get(0); // unboxing Integer → int
```

## Caching

Wrapper classes cache frequently used values for performance:

- `Integer` caches values from -128 to 127 by default (can be extended via system property).
- Similar caching for `Byte`, `Short`, `Long`, `Character` (0–127).

```java
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // true (both from cache)

Integer c = 200;
Integer d = 200;
System.out.println(c == d); // false (different objects)
```

## Comparison

Use `.equals()` for value comparison, not `==` (which compares references).

```java
Integer x = 1000;
Integer y = 1000;
System.out.println(x.equals(y)); // true
System.out.println(x == y);       // false
```

## Performance considerations

Autoboxing/unboxing can create extra objects, so be mindful in performance‑critical loops.

```java
Integer sum = 0;
for (int i = 0; i < 1000; i++) {
    sum += i;   // creates many Integer objects
}
```

Prefer primitives for calculations.
