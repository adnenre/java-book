---
title: Package access and protection
sidebar:
  order: 4
  label: 9.4 Package access and protection
---

Java provides four access levels. **Package‑private** (default, no modifier) is the level when no explicit modifier is used. It allows access within the same package only.

| Modifier    | Class | Package | Subclass (different package) | World |
| ----------- | ----- | ------- | ---------------------------- | ----- |
| `private`   | ✅    | ❌      | ❌                           | ❌    |
| (default)   | ✅    | ✅      | ❌                           | ❌    |
| `protected` | ✅    | ✅      | ✅                           | ❌    |
| `public`    | ✅    | ✅      | ✅                           | ✅    |

**Package‑private example**:

```java
// File: com/example/util/Helper.java
package com.example.util;
class Helper {    // no modifier = package‑private
    void assist() { }
}

// File: com/example/main/Main.java
package com.example.main;
import com.example.util.Helper; // error: Helper not accessible (different package)
```

**Same package access**:

```java
// Both in com.example.util
class Helper { void assist() { } }
class User {
    void use() {
        Helper h = new Helper(); // OK
        h.assist();              // OK
    }
}
```

**Protected vs default**: `protected` allows access in subclasses even in different packages.

**Purpose**: Package‑private is ideal for implementation details that should be visible within a package but not outside.

**Module system (Java 9+) adds another layer**: By default, types are not exported unless explicitly exported in `module-info.java`.
