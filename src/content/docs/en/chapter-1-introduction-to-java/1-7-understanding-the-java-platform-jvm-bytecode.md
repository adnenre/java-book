---
title: Understanding the Java platform (JVM, bytecode)
sidebar:
  order: 7
  label: 1.7 Understanding the Java platform (JVM, bytecode)
---

# Understanding the Java platform (JVM, bytecode)

The **Java platform** is a software‑only environment that runs Java applications. It consists of two main parts:

## Java Virtual Machine (JVM)

The JVM is the heart of the platform. It is an abstract computing machine that provides:

- **Bytecode execution** – interprets and/or compiles bytecode to native code.
- **Memory management** – automatic garbage collection.
- **Security** – bytecode verification, sandboxing.
- **Platform abstraction** – isolates the program from the underlying OS.

Different JVMs exist for Windows, Linux, macOS, etc., but they all understand the same bytecode format.

## Bytecode

Java source code is compiled to **bytecode** – a set of instructions designed to be executed by the JVM. Bytecode is platform‑independent, which enables “Write Once, Run Anywhere”.

### How a Java program runs:

1. **Compilation**: `javac` converts `.java` → `.class` (bytecode).
2. **Class loading**: The JVM’s class loader loads the `.class` file into memory.
3. **Bytecode verification**: The verifier checks bytecode for illegal operations.
4. **Execution**: The interpreter executes bytecode. For frequently executed code (“hot spots”), the **Just‑In‑Time (JIT) compiler** compiles the bytecode to native machine code for performance.

### Bytecode example

Given this code:

```java
public class Demo {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        System.out.println(a + b);
    }
}
```

After compilation, you can view the bytecode with `javap -c Demo`:

```shell
0: iconst_5
1: istore_1
2: bipush 10
3: istore_2
4: getstatic #2  // Field java/lang/System.out
5: iload_1
6: iload_2
7: iadd
8: invokevirtual #3  // Method println(I)V
9: return
```

This shows the low‑level operations performed by the JVM.

## JVM implementations

- **HotSpot** (Oracle’s default)
- **OpenJ9** (Eclipse’s efficient JVM)
- **GraalVM** (high‑performance, polyglot JVM)

All are compatible with the Java bytecode standard.
