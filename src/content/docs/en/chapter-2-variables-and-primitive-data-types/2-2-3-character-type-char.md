---
title: Character type (char)
sidebar:
  order: 5
  label: 2.2.3 Character type (char)
---

`char` represents a single 16‑bit Unicode character. It can store any character from the Unicode standard (over 65,000 characters).

**Range**: 0 to 65,535 (unsigned).

**Declaration**:

```java
char letter = 'A';
char digit = '9';
char symbol = '$';
```

**Escape sequences**:

| Sequence | Meaning      |
| -------- | ------------ |
| `\n`     | newline      |
| `\t`     | tab          |
| `\'`     | single quote |
| `\"`     | double quote |
| `\\`     | backslash    |

```java
char newline = '\n';
char quote = '\'';
```

**Unicode representation**:

```java
char omega = '\u03A9'; // Greek capital omega
char smiley = '\u263A'; // white smiley face
```

**char as a numeric type**:

`char` can be treated as an integer because it stores a numeric code. You can perform arithmetic:

```java
char ch = 'A';
ch++; // now 'B'
int code = ch; // 66
System.out.println(ch + 1); // prints 67 (int)
```

**Comparison**:

```java
if (ch >= 'A' && ch <= 'Z') {
  System.out.println("Uppercase letter");
}
```
