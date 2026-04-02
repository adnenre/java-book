---
title: Default values of primitives
sidebar:
  order: 10
  label: 2.6 Default values of primitives
---

# Default values of primitives

In Java, fields (instance and static variables) are automatically initialized with default values if you don’t assign one. **Local variables** (inside methods) are **not** initialized automatically – you must assign a value before use.

## Default values for primitive types

| Type      | Default value             |
| --------- | ------------------------- |
| `byte`    | 0                         |
| `short`   | 0                         |
| `int`     | 0                         |
| `long`    | 0L                        |
| `float`   | 0.0f                      |
| `double`  | 0.0d                      |
| `char`    | `\u0000` (null character) |
| `boolean` | `false`                   |

**Example**:

```java
public class DefaultDemo {
    static int staticInt;        // default 0
    boolean boolField;           // default false
    char charField;              // default '\u0000'

    public static void main(String[] args) {
        int localInt;            // no default, must initialize
        // System.out.println(localInt); // compilation error
    }
}
```

**For reference types** (objects, arrays), the default value is `null`.

```java
String str;   // default null
```

**Important**: Always initialize local variables before using them. The compiler enforces this.

```java
public void method() {
    int x;
    if (condition) {
        x = 10;
    }
    // System.out.println(x); // error: variable might not have been initialized
}
```
