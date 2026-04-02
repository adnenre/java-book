---
title: Opérateurs d’affectation
sidebar:
  order: 2
  label: 3.2 Opérateurs d’affectation
---

Les opérateurs d’affectation assignent une valeur à une variable. L’affectation de base est `=`. Java fournit également des opérateurs composés qui combinent une opération avec l’affectation.

| Opérateur | Description                             | Équivalent    |
| --------- | --------------------------------------- | ------------- |
| `=`       | Affectation simple                      | `a = b`       |
| `+=`      | Addition et affectation                 | `a = a + b`   |
| `-=`      | Soustraction et affectation             | `a = a - b`   |
| `*=`      | Multiplication et affectation           | `a = a * b`   |
| `/=`      | Division et affectation                 | `a = a / b`   |
| `%=`      | Modulo et affectation                   | `a = a % b`   |
| `&=`      | ET binaire et affectation               | `a = a & b`   |
| `\|=`     | OU binaire et affectation               | `a = a \| b`  |
| `^=`      | OU exclusif binaire et affectation      | `a = a ^ b`   |
| `<<=`     | Décalage gauche et affectation          | `a = a << b`  |
| `>>=`     | Décalage droit et affectation           | `a = a >> b`  |
| `>>>=`    | Décalage droit non signé et affectation | `a = a >>> b` |

**Exemples** :

```java
int x = 5;
x += 3;      // x = 8
x *= 2;      // x = 16
x %= 5;      // x = 1

String s = "Bonjour";
s += " le monde"; // s = "Bonjour le monde"
```

**Important** : Les opérateurs composés effectuent un cast implicite vers le type cible.

```java
byte b = 10;
b += 5;      // b = 15 (cast implicite, pas d’erreur)
// b = b + 5; // erreur : int vers byte nécessite un cast
```
