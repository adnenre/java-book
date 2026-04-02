---
title: Object lifecycle
sidebar:
  order: 15
  label: 5.11 Object lifecycle
---

An object goes through several stages from creation to destruction.

**1. Declaration** – reference variable is created on the stack (no object yet).

```java
Person p;  // reference variable, null
```

**2. Instantiation** – memory is allocated on the heap using `new`.

```java
p = new Person();  // object created
```

**3. Initialization** – constructor runs, fields are initialized.

**4. Usage** – object is used via its reference.

```java
p.setName("Alice");
String name = p.getName();
```

**5. Becoming unreachable** – when no references point to the object.

```java
p = null;        // object becomes unreachable
// or method exits, local reference goes out of scope
```

**6. Garbage collection** – JVM automatically frees memory (nondeterministic time).

**7. Finalization (deprecated)** – historically, `finalize()` was called before collection. Now discouraged.

**8. Memory reclamation** – memory is returned to the heap for reuse.

## Diagram

Declaration → Instantiation → Initialization → Usage → Unreachable → GC → Reclamation

**Best practices**:

- Minimize object creation in performance‑critical loops.
- Use object pooling for expensive objects.
- Let GC handle memory; avoid manual interference.
- Use `try‑with‑resources` for external resources.
