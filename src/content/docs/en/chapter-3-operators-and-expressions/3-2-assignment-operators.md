---
title: Assignment operators
sidebar:
  order: 2
  label: 3.2 Assignment operators
---

Assignment operators assign a value to a variable. The basic assignment is `=`. Java also provides compound assignment operators that combine an operation with assignment.

| Operator | Description                     | Equivalent    |
| -------- | ------------------------------- | ------------- |
| `=`      | Simple assignment               | `a = b`       |
| `+=`     | Add and assign                  | `a = a + b`   |
| `-=`     | Subtract and assign             | `a = a - b`   |
| `*=`     | Multiply and assign             | `a = a * b`   |
| `/=`     | Divide and assign               | `a = a / b`   |
| `%=`     | Modulus and assign              | `a = a % b`   |
| `&=`     | Bitwise AND and assign          | `a = a & b`   |
| `\|=`    | Bitwise OR and assign           | `a = a \| b`  |
| `^=`     | Bitwise XOR and assign          | `a = a ^ b`   |
| `<<=`    | Left shift and assign           | `a = a << b`  |
| `>>=`    | Right shift and assign          | `a = a >> b`  |
| `>>>=`   | Unsigned right shift and assign | `a = a >>> b` |

**Examples**:

```java
int x = 5;
x += 3;      // x = 8
x *= 2;      // x = 16
x %= 5;      // x = 1

String s = "Hello";
s += " World"; // s = "Hello World"
```

**Important**: Compound assignments perform an implicit cast to the target type.

```java
byte b = 10;
b += 5;      // b = 15 (implicit cast, no error)
// b = b + 5; // error: int to byte requires cast
```
