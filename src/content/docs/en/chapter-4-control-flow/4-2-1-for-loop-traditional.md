---
title: For loop (traditional)
sidebar:
  order: 5
  label: 4.2.1 For loop (traditional)
---

The traditional `for` loop repeats a block of code a specified number of times. It consists of three parts: initialization, condition, and update.

**Syntax**:

```java
for (initialization; condition; update) {
    // loop body
}
```

**Example**: print numbers 0 to 4

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

**Multiple variables**:

```java
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println(i + " " + j);
}
```

**Infinite loop**:

```java
for (;;) {
    // infinite loop, use break to exit
}
```

**Omitting parts**:

```java
int i = 0;
for (; i < 5; ) {
    System.out.println(i);
    i++;
}
```

**Scope**: variables declared in initialization are local to the loop.

```java
for (int i = 0; i < 5; i++) { }
// System.out.println(i); // error: i not in scope
```
