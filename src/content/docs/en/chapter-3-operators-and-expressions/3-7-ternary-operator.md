---
title: Ternary operator
sidebar:
  order: 7
  label: 3.7 Ternary operator
---

The ternary operator `? :` is a shorthand for an `if‑else` statement that returns a value.

**Syntax**:

```java
condition ? expressionIfTrue : expressionIfFalse
```

**Examples**:

```java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status); // Adult

int max = (a > b) ? a : b; // assign the larger value

System.out.println((score >= 60) ? "Pass" : "Fail");
```

**Nested ternary** (use sparingly for readability):

```java
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";
```

**Important**: Both expressions must be compatible types (or one must be assignable to the other). The result is the common type.

```java
// int and double: result is double
double result = (x > 0) ? 10 : 2.5;
```
