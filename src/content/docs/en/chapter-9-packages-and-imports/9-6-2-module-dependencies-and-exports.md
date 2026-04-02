---
title: Module dependencies and exports
sidebar:
  order: 8
  label: 9.6.2 Module dependencies and exports
---

Modules explicitly declare dependencies using `requires` and control visibility using `exports`. This ensures reliable configuration and strong encapsulation.

## Requires directive

Declares that a module depends on another module.

```java
module com.example.app {
    requires com.example.lib;      // basic dependency
    requires transitive com.example.utils; // transitive dependency
}
```

**Transitive dependencies**: If module A `requires transitive` B, then any module that requires A automatically reads B.

## Exports directive

Makes packages accessible to other modules. By default, no packages are exported.

```java
module com.example.lib {
    exports com.example.lib.api;      // accessible to all modules
    exports com.example.lib.internal to com.example.app; // only to specific module
}
```

## Module resolution

At startup, the module system checks:

- All required modules are present.
- No cycles (unless using `requires static` for optional dependencies).
- No split packages (same package in multiple modules).

## Example with two modules

**Library module (`com.example.lib`)**:

```java
// com.example.lib/module-info.java
module com.example.lib {
    exports com.example.lib.api;
}

// com.example.lib/com/example/lib/api/Calculator.java
package com.example.lib.api;
public class Calculator {
    public int add(int a, int b) { return a + b; }
}
```

**Application module (`com.example.app`)**:

```java
// com.example.app/module-info.java
module com.example.app {
    requires com.example.lib;
}

// com.example.app/com/example/app/Main.java
package com.example.app;
import com.example.lib.api.Calculator;
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println(calc.add(5, 3));
    }
}
```

**Compiling and running**:

```bash
javac -d mods/com.example.lib src/com.example.lib/module-info.java src/com.example.lib/...
javac --module-path mods -d mods/com.example.app src/com.example.app/module-info.java src/com.example.app/...
java --module-path mods -m com.example.app/com.example.app.Main
```

## Service loading (uses/provides)

Alternative to explicit exports for plugin architectures.

```java
module com.example.spi {
    exports com.example.spi;
}
module com.example.impl {
    requires com.example.spi;
    provides com.example.spi.Service with com.example.impl.ServiceImpl;
}
module com.example.client {
    requires com.example.spi;
    uses com.example.spi.Service;
}
```
