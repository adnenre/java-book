---
title: The new keyword and object creation
sidebar:
  order: 10
  label: 5.6 The new keyword and object creation
---

The `new` keyword is used to create an object (instantiate a class). It allocates memory on the heap and returns a reference to the newly created object.

**Syntax**:

```java
ClassName objectName = new ClassName(arguments);
```

**Steps**:

1. Memory is allocated for the object.
2. The appropriate constructor is called.
3. A reference to the object is returned.

**Example**:

```java
Student s = new Student("Alice", 20);
```

**Multiple objects**:

```java
Point p1 = new Point(0, 0);
Point p2 = new Point(5, 10);
```

**Anonymous objects**: Created without storing a reference.

```java
new Point(3, 4).display();  // method called directly, object eligible for GC after
```

**Array creation**:

```java
int[] numbers = new int[10];        // array of primitives
Point[] points = new Point[5];      // array of references (null initially)
points[0] = new Point(1, 2);        // assign object to array element
```
