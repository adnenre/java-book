---
title: module‑info.java
sidebar:
  order: 7
  label: 9.6.1 module‑info.java
---

`module-info.java` is the module descriptor file placed in the root of a module's source directory. It defines the module's name, dependencies, and exported packages.

**Basic structure**:

```java
module module.name {
    // directives
}
```

**Common directives**:

| Directive             | Description                                                          | Example                                                               |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `requires`            | Declares a dependency on another module                              | `requires java.base;` (java.base is implicit)                         |
| `requires transitive` | Dependency that is also readable by modules that require this one    | `requires transitive java.sql;`                                       |
| `exports`             | Makes a package available to all other modules                       | `exports com.example.api;`                                            |
| `exports ... to`      | Exports package to specific modules only                             | `exports com.example.internal to com.example.test;`                   |
| `opens`               | Allows deep reflection on a package (used by frameworks like Spring) | `opens com.example.entities;`                                         |
| `uses`                | Declares a service that this module consumes                         | `uses com.example.spi.Service;`                                       |
| `provides ... with`   | Registers a service implementation                                   | `provides com.example.spi.Service with com.example.impl.ServiceImpl;` |

**Example**:

```java
module com.example.myapp {
    requires java.sql;
    requires transitive java.logging;
    exports com.example.myapp.api;
    exports com.example.myapp.model;
    opens com.example.myapp.internal to com.example.test;
    uses com.example.spi.Plugin;
    provides com.example.spi.Plugin with com.example.plugins.MyPlugin;
}
```

**java.base** is implicitly required – no need to declare it.

**File location**:

```bash
src/
└── com.example.myapp/
    ├── module-info.java
    └── com/
        └── example/
            └── myapp/
                ├── api/
                └── internal/

```

**Compilation**:

```bash
javac -d mods/com.example.myapp src/com.example.myapp/module-info.java src/com.example.myapp/...
```
