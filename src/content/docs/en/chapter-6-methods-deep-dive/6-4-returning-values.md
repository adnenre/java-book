---
title: Returning values
sidebar:
  order: 4
  label: 6.4 Returning values
---

Methods return values using the `return` keyword. The return type must match the declared type (or be a subtype for objects).

**Basic return**:

```java
int add(int a, int b) {
    return a + b;
}
```

**Return early** (multiple return points):

```java
int max(int a, int b) {
    if (a > b) return a;
    else return b;
}
```

**Returning objects**:

```java
Person createPerson(String name, int age) {
    Person p = new Person(name, age);
    return p;
    // or simply: return new Person(name, age);
}
```

**Void methods** – use `return;` to exit early (optional).

```java
void printPositive(int x) {
    if (x <= 0) return;
    System.out.println(x);
}
```

**Returning multiple values**: Java methods can return only one value. To return multiple, use:

- An array
- A collection
- A custom object (record or class)

```java
int[] getMinMax(int[] arr) {
    int min = arr[0], max = arr[0];
    for (int n : arr) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return new int[]{min, max};
}
```
