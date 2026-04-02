---
title: do‑while loop
sidebar:
  order: 8
  label: 4.2.4 do‑while loop
---

The `do‑while` loop executes the block of code **once before checking the condition** (post‑test). The loop continues as long as the condition is `true`.

**Syntax**:

```java
do {
    // loop body
} while (condition);
```

**Example**:

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

**Guaranteed at least one execution**:

```java
int x = 10;
do {
    System.out.println("This runs once even if condition false");
} while (x < 5);
```

**Use case**: When you need to execute the loop body at least once, e.g., displaying a menu and reading user input until a valid choice.

```java
int choice;
do {
    System.out.println("1. Option 1");
    System.out.println("2. Option 2");
    System.out.println("0. Exit");
    choice = scanner.nextInt();
    // process choice
} while (choice != 0);
```

**Note**: The `while` condition ends with a semicolon.
