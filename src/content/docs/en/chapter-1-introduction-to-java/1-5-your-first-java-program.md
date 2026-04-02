---
title: Your first Java program
sidebar:
  order: 5
  label: 1.5 Your first Java program
---

# Your first Java program

Let’s create the classic “Hello, World!” program.

## Step 1: Create a file

Create a file named `HelloWorld.java` with the following content:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Explanation**:

- `public class HelloWorld` – declares a class named `HelloWorld`. The filename must match the class name (case‑sensitive).
- `public static void main(String[] args)` – the entry point of any Java application. The JVM calls this method when the program starts.
- `System.out.println(...)` – prints the argument to the standard output (console).

## Step 2: Compile

Open a terminal in the same directory and run:

```bash
javac HelloWorld.java
```

This produces `HelloWorld.class` – the bytecode file.

## Step 3: Run

Execute the bytecode using the `java` launcher:

```bash
java HelloWorld
```

**Output**:

```bash
Hello, World!
```

Note: you do **not** include the `.class` extension when running.

## Step 4: Experiment

Try modifying the message, adding multiple print statements, or even using variables.
