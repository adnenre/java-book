---
title: Default constructor
sidebar:
  order: 5
  label: 5.4.1 Default constructor
---

If you do not define any constructor in a class, Java automatically provides a **default constructor** with no parameters. It initializes fields to their default values (0, false, null, etc.).

**Example**:

```java
class Dog {
    String name;
    int age;
    // No constructor defined – Java adds default constructor
}

Dog myDog = new Dog();  // Calls default constructor
System.out.println(myDog.name); // null
System.out.println(myDog.age);  // 0
```

**Important**: If you define **any** constructor (even a parameterized one), the default constructor is **not** provided.

```java
class Cat {
    String name;
    Cat(String n) {
        name = n;
    }
    // No default constructor
}

// Cat c = new Cat(); // Error: no default constructor
Cat c = new Cat("Whiskers"); // OK
```

To have both a default and parameterized constructor, explicitly define the default one.
