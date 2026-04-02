---
title: Installing Java (JDK, JRE, JVM)
sidebar:
  order: 3
  label: 1.3 Installing Java (JDK, JRE, JVM)
---

# Installing Java (JDK, JRE, JVM)

Before you can develop and run Java applications, you need to install the appropriate Java environment.

## JVM – Java Virtual Machine

The **JVM** is the engine that executes Java bytecode. It is platform‑specific and provides the runtime environment.

## JRE – Java Runtime Environment

The **JRE** includes the JVM plus core libraries and other components needed to run existing Java programs. It does **not** include development tools like the compiler.

## JDK – Java Development Kit

The **JDK** contains the JRE plus development tools such as:

- `javac` – the Java compiler (source → bytecode)
- `jar` – archiver
- `javadoc` – documentation generator
- `jdb` – debugger

### How to install

1. **Choose a JDK distribution** – Oracle JDK, OpenJDK, Adoptium, Amazon Corretto, etc.
2. **Download** the installer for your operating system from the official site (e.g., [adoptium.net](https://adoptium.net/)).
3. **Run the installer** and follow the instructions.
4. **Set environment variables** (optional, but recommended):
   - `JAVA_HOME` – path to the JDK installation directory.
   - Add `%JAVA_HOME%\bin` (Windows) or `$JAVA_HOME/bin` (macOS/Linux) to your `PATH`.

### Verify installation

Open a terminal/command prompt and run:

```bash
java -version
javac -version
```

You should see version information confirming that both java (the launcher) and javac (the compiler) are available.
