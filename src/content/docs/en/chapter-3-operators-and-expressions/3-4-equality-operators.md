---
title: Equality operators
sidebar:
  order: 4
  label: 3.4 Equality operators
---

Equality operators compare two values for equality or inequality and return a boolean result.

| Operator | Description  | Example  |
| -------- | ------------ | -------- |
| `==`     | Equal to     | `a == b` |
| `!=`     | Not equal to | `a != b` |

**With primitives**: Compare actual values.

```java
int x = 5, y = 5;
System.out.println(x == y); // true
```

**With objects**: `==` compares references (whether they point to the same object), not content.

```java
String s1 = "hello";
String s2 = "hello";
String s3 = new String("hello");

System.out.println(s1 == s2); // true (same string literal pool)
System.out.println(s1 == s3); // false (different objects)
System.out.println(s1.equals(s3)); // true (content comparison)
```

**Important**: Always use `.equals()` for object content comparison, unless you specifically want reference equality.

**With `null`**: You can check for `null` using `==` or `!=`.

```java
String str = null;
if (str == null) {
    System.out.println("Null reference");
}
```
