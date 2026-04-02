---
title: Module system (Java 9+)
sidebar:
  order: 6
  label: 9.6 Module system (Java 9+)
---

The **Java Platform Module System (JPMS)** was introduced in Java 9 (Project Jigsaw). It adds modularity at a higher level than packages.

**Key concepts**:

- A **module** is a named, self‑describing collection of code and data.
- Each module has a **module descriptor** (`module-info.java`).
- Modules explicitly declare which packages they **export** and which modules they **require**.

**Benefits**:

- Strong encapsulation (internal packages are not accessible by default).
- Reliable configuration (no missing dependencies at startup).
- Scalability (can create custom runtime images with `jlink`).

**Module declaration example** (`module-info.java`):

```java
module com.example.myapp {
    requires java.sql;
    requires transitive java.logging;
    exports com.example.myapp.api;
    exports com.example.myapp.util to com.example.test;
    uses com.example.spi.Service;
    provides com.example.spi.Service with com.example.impl.ServiceImpl;
}
```

**Compiling modules**:

```bash
javac -d mods/com.example.myapp src/com.example.myapp/module-info.java src/com.example.myapp/...
```

**Running a module**:

```bash
java --module-path mods -m com.example.myapp/com.example.myapp.Main
```

**Module path vs classpath**: Modules go on the module path; traditional JARs can still be on the classpath (automatic modules).

**Common directives**:

- `requires` – module dependency.
- `requires transitive` – implied readability.
- `exports` – makes package accessible to other modules.
- `opens` – opens package for deep reflection.
- `uses` / `provides` – service loading.
