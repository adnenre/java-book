---
title: Importing classes (import)
sidebar:
  order: 2
  label: 9.2 Importing classes (import)
---

The `import` statement allows using classes from other packages without fully qualifying them. It comes after the `package` statement but before the class definition.

**Syntax**:

```java
import packageName.ClassName;
import packageName.\*; // imports all classes in package
```

**Examples**:

```java
package com.example.app;

import java.util.ArrayList;
import java.util.List;
import java.util.\*; // imports all java.util classes

public class MyApp {
List<String> list = new ArrayList<>(); // no need for java.util.ArrayList
}
```

**Fully qualified name** (no import):

```java
java.util.ArrayList<String> list = new java.util.ArrayList<>();
```

**Ambiguous imports**:

```java
import java.util.Date;
import java.sql.Date; // error: both imported – must use fully qualified name
```

**Static imports** (covered in 9.3) allow importing static members.

**Import does not affect performance** – it's just a compile‑time convenience.
