---
title: Garbage collection and finalize() method
sidebar:
  order: 14
  label: 5.10 Garbage collection and finalize() method
---

**Garbage collection (GC)** automatically frees memory occupied by objects that are no longer reachable. The programmer does not need to manually deallocate memory.

**When does an object become eligible for GC?**

- When there are no references to it.
- When the reference goes out of scope.
- When the reference is reassigned.

```java
Person p = new Person();
p = null;  // object eligible for GC
```

## Requesting garbage collection

You can suggest GC with `System.gc()` or `Runtime.getRuntime().gc()`, but the JVM may ignore the request.

## finalize() method (deprecated)

The `finalize()` method was called by the GC before an object is destroyed. It has been **deprecated** since Java 9 and removed/disabled in later versions because it is unpredictable and causes performance issues.

```java
// Deprecated – do not use
@Override
protected void finalize() throws Throwable {
    // cleanup code (unreliable)
}
```

## Modern alternatives

Use `try‑with‑resources`, `Cleaner`, or explicit cleanup methods.

```java
try (FileInputStream fis = new FileInputStream("file.txt")) {
    // automatic resource cleanup
}
```

**Best practices**:

- Do not rely on `finalize()`.
- Close resources explicitly.
- Nullify references only if necessary (e.g., large objects).
- Use weak references for caches (`WeakHashMap`).
