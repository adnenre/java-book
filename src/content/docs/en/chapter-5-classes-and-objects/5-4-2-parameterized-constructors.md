---
title: Parameterized constructors
sidebar:
  order: 6
  label: 5.4.2 Parameterized constructors
---

A **parameterized constructor** accepts arguments to initialize an object with specific values.

**Example**:

```java
class Student {
    String name;
    int id;
    double grade;

    // Parameterized constructor
    Student(String name, int id, double grade) {
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
}

Student s1 = new Student("Alice", 101, 85.5);
Student s2 = new Student("Bob", 102, 92.0);
```

**Benefits**:

- Allows creating objects with different initial states.
- Reduces the need for setter methods after creation.
- Makes objects immediately usable.

**Multiple parameterized constructors**: Use overloading (different parameter lists).

```java
Student(String name, int id) {
    this(name, id, 0.0);  // calling another constructor
}
```
