---
title: Static imports (import static)
sidebar:
  order: 3
  label: 9.3 Static imports (import static)
---

**Static import** allows importing static members (fields and methods) of a class so they can be used without the class name.

**Syntax**:

```java
import static packageName.ClassName.staticMember;
import static packageName.ClassName.*;   // all static members
```

**Example without static import**:

```java
double result = Math.sqrt(25);
System.out.println(Math.PI);
```

**With static import**:

```java
import static java.lang.Math.sqrt;
import static java.lang.Math.PI;

double result = sqrt(25);
System.out.println(PI);
```

**Importing all static members**:

```java
import static java.lang.Math.*;

double r = sqrt(25);
double area = PI * r * r;
```

**Use cases**:

- Mathematical constants and functions (`Math`, `StrictMath`)
- Testing frameworks (e.g., `import static org.junit.Assert.*;`)

**Caveats**:

- Can reduce readability (harder to know where a method comes from).
- Avoid overusing; use sparingly for well‑known utilities.

**Example with custom class**:

```java
class Constants {
    public static final String APP_NAME = "MyApp";
    public static void log(String msg) { ... }
}

import static Constants.*;
String name = APP_NAME;
log("Started");
```
