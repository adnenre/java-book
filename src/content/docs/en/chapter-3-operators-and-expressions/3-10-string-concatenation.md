---
title: String concatenation (+)
sidebar:
  order: 10
  label: 3.10 String concatenation (+)
---

The `+` operator can concatenate strings. When used with other types, Java automatically converts non‑string operands to strings.

**Basic concatenation**:

```java
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName;
System.out.println(fullName); // John Doe
```

**Concatenation with other types**:

```java
int age = 30;
String message = "I am " + age + " years old.";
System.out.println(message); // I am 30 years old.
```

**Order matters**: evaluation is left‑to‑right.

```java
System.out.println(10 + 20 + " is sum"); // 30 is sum
System.out.println("Sum is " + 10 + 20); // Sum is 1020
```

**Using `+=` with strings**:

```java
String result = "";
result += "Hello";
result += " ";
result += "World";
System.out.println(result); // Hello World
```

**Performance**: For many concatenations (especially in loops), prefer `StringBuilder` or `StringBuffer` to avoid creating many intermediate `String` objects.

```java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 100; i++) {
    sb.append(i);
}
String result = sb.toString();
```

**Note**: The `+` operator for strings is implemented internally using `StringBuilder` or `StringBuffer` by the compiler (except in loops where it may create multiple objects).
