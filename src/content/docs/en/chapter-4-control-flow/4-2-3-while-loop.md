---
title: While loop
sidebar:
  order: 7
  label: 4.2.3 While loop
---

The `while` loop repeats a block of code as long as the condition is `true`. The condition is checked **before** each iteration (pre‑test).

**Syntax**:

```java
while (condition) {
    // loop body
}
```

**Example**:

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

**Infinite loop**:

```java
while (true) {
    // infinite loop, use break to exit
}
```

**Reading input until sentinel**:

```java
Scanner scanner = new Scanner(System.in);
int sum = 0;
int input;
while ((input = scanner.nextInt()) != -1) {
    sum += input;
}
System.out.println("Sum: " + sum);
```

**Important**: Ensure the loop condition eventually becomes `false` to avoid infinite loops.
