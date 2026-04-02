---
title: Ternary operator
sidebar:
  order: 4
  label: 4.1.4 Ternary operator
---

The ternary operator `? :` is a shorthand for an `if‑else` statement that returns a value. It was already covered in section 3.7, but here it is presented in the context of conditional statements.

**Syntax**:

```java
condition ? expressionIfTrue : expressionIfFalse
```

**Examples**:

```java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";

int max = (a > b) ? a : b;

System.out.println((score >= 60) ? "Pass" : "Fail");
```

**Nested ternary** (use sparingly for readability):

```java
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";
```

**When to use**: Simple conditional assignments. For complex logic, use `if‑else`.

**Important**: Both expressions must be compatible types (or one must be assignable to the other).

```java
double result = (x > 0) ? 10 : 2.5; // int and double → double
```
