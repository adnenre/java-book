---
title: Compiling and running Java programs (javac, java)
sidebar:
  order: 6
  label: 1.6 Compiling and running Java programs (javac, java)
---

# Compiling and running Java programs

Java uses a two‑step process: compilation to bytecode, then interpretation/JIT execution.

## The compiler: `javac`

The **Java compiler** (`javac`) translates `.java` source files into `.class` bytecode files.

Basic usage:

```bash
javac MyProgram.java
```

If the program has multiple classes, you can compile them all:

```bash
javac *.java
```

Common options:

- `-d <directory>` – specify where to place generated `.class` files.
- `-classpath` / `-cp` – specify where to find required libraries.

## The launcher: `java`

The **Java launcher** (`java`) starts the JVM and executes the bytecode.

Basic usage:

```bash
java MyProgram
```

You pass the **class name** (without `.class`). The JVM looks for a `public static void main(String[] args)` method in that class.

To run a program that resides in a package:

```bash
java com.example.MyProgram
```

You can pass command‑line arguments:

```bash
java MyProgram arg1 arg2
```

Inside the program, `args` contains `["arg1", "arg2"]`.

## Classpath

The classpath tells `javac` and `java` where to find user‑defined classes and libraries. It can be set via the `-cp` option or the `CLASSPATH` environment variable.

Example:

```bash
javac -cp .:lib/* MyProgram.java
java -cp .:lib/* MyProgram
```

## JAR files

JAR (Java Archive) files bundle multiple classes and resources. You can run an executable JAR with:

```bash
java -jar myapp.jar
```

This requires the JAR’s manifest to specify the main class.
