---
title: Functional interfaces and @FunctionalInterface
sidebar:
order: 7
label: 8.7 Functional interfaces and @FunctionalInterface
---

A **functional interface** is an interface that contains exactly one abstract method. They are the foundation for lambda expressions (introduced in Java 8).

**Examples**:

```java
@FunctionalInterface
interface Runnable {
    void run();  // one abstract method
}

@FunctionalInterface
interface Comparator<T> {
    int compare(T o1, T o2);
}
```

**The `@FunctionalInterface` annotation** (optional but recommended) ensures the interface stays functional (compiler error if a second abstract method is added).

**Default and static methods do not count**:

```java
@FunctionalInterface
interface MyFunction {
    int apply(int x);               // abstract
    default void log() { }          // default – OK
    static void helper() { }        // static – OK
}
```

**Using lambda expressions**:

```java
MyFunction square = (x) -> x * x;
System.out.println(square.apply(5)); // 25
```

**Common built‑in functional interfaces (java.util.function)**:

| Interface           | Abstract method     |
| ------------------- | ------------------- |
| `Predicate<T>`      | `boolean test(T t)` |
| `Function<T,R>`     | `R apply(T t)`      |
| `Consumer<T>`       | `void accept(T t)`  |
| `Supplier<T>`       | `T get()`           |
| `BiFunction<T,U,R>` | `R apply(T t, U u)` |

**Example**:

```java
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4)); // true
```
