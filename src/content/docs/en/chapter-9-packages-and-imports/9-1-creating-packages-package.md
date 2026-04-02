---
title: packages (package)
sidebar:
  order: 1
  label: 9.1  packages (package)
---

Packages and modules are Java's mechanisms for organizing code, managing namespaces, and controlling visibility.

**Packages** group related classes and interfaces, preventing naming conflicts and providing access protection.

**Modules** (introduced in Java 9) add another layer of encapsulation above packages, allowing explicit dependencies and strong encapsulation.

A **package** is a namespace that groups related classes and interfaces. The `package` statement must be the first line in a source file (except comments).

**Syntax**:

```java
package com.example.myapp;

public class MyClass {
// ...
}
```

**Naming conventions**:

- Use reverse domain name (e.g., `com.company.project`).
- All lowercase letters.
- Underscores are allowed but not common.

**Directory structure** must match package hierarchy:

```bash
src/
└── com/
    └── example/
        └── myapp/
            └── MyClass.java
```

**Compiling**:

```bash
javac -d . src/com/example/myapp/MyClass.java
```

The `-d .` creates directories matching the package structure.

**Running**:

```bash
java com.example.myapp.MyClass
```

**Default package** (no `package` statement) – not recommended for anything but small examples. Classes in default package cannot be imported.

**Benefits**:

- Avoid name conflicts.
- Control access (package‑private).
- Organize large codebases.
