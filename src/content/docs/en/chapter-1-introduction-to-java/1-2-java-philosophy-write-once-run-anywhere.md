---
title: Java philosophy (Write once, run anywhere)
sidebar:
  order: 2
  label: 1.2 Java philosophy (Write once, run anywhere)
---

# Java philosophy (Write once, run anywhere)

The core philosophy behind Java is **“Write Once, Run Anywhere”** (WORA). This means that a Java program compiled on one platform can run on any other platform that supports Java, without recompilation.

**How it works**:

1. **Source code** (`.java`) is compiled into **bytecode** (`.class` files).
2. The bytecode is executed by the **Java Virtual Machine (JVM)**.
3. Different JVM implementations exist for each operating system (Windows, macOS, Linux, etc.), but all understand the same bytecode.

**Benefits**:

- **Portability** – applications can be developed on one OS and deployed on another.
- **Security** – the JVM verifies bytecode before execution, preventing unsafe operations.
- **Network‑centric** – code can be distributed easily over networks (e.g., applets, web applications).

**Limitations**:

- JVM overhead can affect performance, though Just‑In‑Time (JIT) compilation mitigates this.
- Some platform‑specific native libraries may still require separate builds.

Nevertheless, WORA remains the foundation of Java’s success, enabling everything from enterprise servers to Android apps (which use a modified JVM called Dalvik/ART).
