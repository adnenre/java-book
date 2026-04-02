---
title: Access modifiers (public, protected, default, private)
sidebar:
  order: 11
  label: 5.7 Access modifiers
---

Access modifiers control the visibility of classes, fields, methods, and constructors.

| Modifier              | Class | Package | Subclass | World |
| --------------------- | ----- | ------- | -------- | ----- |
| `private`             | ✅    | ❌      | ❌       | ❌    |
| default (no modifier) | ✅    | ✅      | ❌       | ❌    |
| `protected`           | ✅    | ✅      | ✅       | ❌    |
| `public`              | ✅    | ✅      | ✅       | ✅    |

**Examples**:

```java
public class BankAccount {           // accessible everywhere
    private double balance;          // only within this class
    String accountNumber;            // default: accessible within package
    protected double interestRate;   // accessible in subclasses and package
    public String owner;             // accessible everywhere
}
```

**Class‑level modifiers**: A top‑level class can be `public` or default (package‑private). It cannot be `private` or `protected`.

**Best practices**:

- Keep fields `private` and provide public getters/setters if needed (encapsulation).
- Use `default` for package‑internal implementation details.
- Use `protected` for members intended to be inherited.
- Use `public` only for the API that external code should use.
