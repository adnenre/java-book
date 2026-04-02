---
title: Variables and identifiers
sidebar:
  order: 1
  label: 2.1 Variables and identifiers
---

# Variables and identifiers

## Variables

A **variable** is a named memory location that holds a value. In Java, every variable has a **type** that determines what kind of data it can store.

**Variable declaration syntax**:

```java
type identifier [ = value ];
```

Example:

```java
int age;
double salary = 45000.50;
char grade = 'A';
boolean isActive = true;
```

## Identifiers

**Identifiers** are names given to variables, methods, classes, packages, etc. Java has strict rules for identifiers:

- Can contain letters, digits, underscores (`_`), and dollar signs (`$`).
- Must **not** start with a digit.
- Are case‑sensitive (`age` and `Age` are different).
- Cannot be a reserved keyword (like `int`, `class`, `public`).

**Valid identifiers**:

```java
int score;
double _price;
String $name;
int counter1;
```

**Invalid identifiers**:

```java
int 1stPlace;   // starts with a digit
double class;   // 'class' is a keyword
String my-name; // hyphen not allowed
```

**Naming conventions** (recommended):

- Variables and methods: `camelCase` (e.g., `studentName`, `calculateTotal()`)
- Classes: `PascalCase` (e.g., `Student`, `BankAccount`)
- Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_VALUE`, `PI`)
