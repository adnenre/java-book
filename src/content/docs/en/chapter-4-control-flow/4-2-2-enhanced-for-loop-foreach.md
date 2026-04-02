---
title: Enhanced for loop (for‑each)
sidebar:
  order: 6
  label: 4.2.2 Enhanced for loop (for‑each)
---

The enhanced `for` loop (also called **for‑each** loop) simplifies iterating over arrays and collections. It is read‑only (cannot modify the collection while iterating).

**Syntax**:

```java
for (type variable : arrayOrCollection) {
    // loop body
}
```

**Examples**:

```java
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

**With collections**:

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
for (String name : names) {
    System.out.println(name);
}
```

**Limitations**:

- Cannot modify the underlying array/collection (except via the variable, but it doesn’t affect the source).
- Cannot access the current index directly.

```java
// To modify elements, use traditional for loop
for (int i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}
```
