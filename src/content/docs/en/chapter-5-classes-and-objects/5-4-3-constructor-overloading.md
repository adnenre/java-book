---
title: Constructor overloading
sidebar:
  order: 7
  label: 5.4.3 Constructor overloading
---

**Constructor overloading** means defining multiple constructors with different parameter lists. The appropriate constructor is called based on the arguments passed.

**Example**:

```java
class Product {
    String name;
    double price;
    int quantity;

    // Constructor 1: no parameters
    Product() {
        this("Unknown", 0.0, 0);
    }

    // Constructor 2: name only
    Product(String name) {
        this(name, 0.0, 0);
    }

    // Constructor 3: name and price
    Product(String name, double price) {
        this(name, price, 0);
    }

    // Constructor 4: all parameters
    Product(String name, double price, int quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
```

**Usage**:

```java
Product p1 = new Product();
Product p2 = new Product("Laptop");
Product p3 = new Product("Phone", 599.99);
Product p4 = new Product("Tablet", 299.99, 5);
```

**Benefits**:

- Provides flexibility in object creation.
- Allows default values while still offering full initialization.
- Uses `this()` to avoid code duplication.
