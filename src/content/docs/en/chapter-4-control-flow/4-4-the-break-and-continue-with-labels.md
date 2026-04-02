---
title: Break and continue with labels
sidebar:
  order: 10
  label: 4.4 Break and continue with labels
---

Labels extend `break` and `continue` to work with nested loops. A label is an identifier followed by a colon (`:`).

## break with label

Exits the labeled block (not just the innermost loop).

```java
outerLoop:
for (int i = 0; i < 3; i++) {
    System.out.println("Outer " + i);
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break outerLoop;   // exits outerLoop completely
        }
        System.out.println("  Inner " + j);
    }
}
```

## continue with label

Skips the current iteration of the labeled loop and continues with the next iteration of that loop.

```java
outer:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue outer;   // goes to next i, skipping remaining j
        }
        System.out.println("i=" + i + ", j=" + j);
    }
}
```

## Labeled blocks (not just loops)

You can label any block and use `break` to exit it.

```java
block:
{
    int x = 10;
    if (x > 5) {
        break block;
    }
    System.out.println("This won't print");
}
System.out.println("After block");
```

**Important**: Labels must be placed before the statement (loop or block) they refer to. Cannot `break` or `continue` to a label that is not enclosing the current statement.
