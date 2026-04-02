---
title: Opérateurs arithmétiques
sidebar:
  order: 1
  label: 3.1 Opérateurs arithmétiques
---

Les opérateurs arithmétiques effectuent des opérations mathématiques sur les types numériques.

| Opérateur | Description    | Exemple |
| --------- | -------------- | ------- |
| `+`       | Addition       | `a + b` |
| `-`       | Soustraction   | `a - b` |
| `*`       | Multiplication | `a * b` |
| `/`       | Division       | `a / b` |
| `%`       | Modulo (reste) | `a % b` |

**Exemples** :

```java
int a = 10, b = 3;
System.out.println(a + b); // 13
System.out.println(a - b); // 7
System.out.println(a * b); // 30
System.out.println(a / b); // 3 (division entière)
System.out.println(a % b); // 1
```

**Division avec des flottants** :

```java
double x = 10.0, y = 3.0;
System.out.println(x / y); // 3.3333333333333335
```

**Division par zéro** :

- La division entière par zéro lève `ArithmeticException`.
- La division flottante par zéro donne `Infinity` ou `NaN`.

```java
// int zeroDiv = 10 / 0; // lève ArithmeticException
double inf = 10.0 / 0.0; // Infinity
```

**Modulo avec nombres négatifs** :
Le signe du résultat est celui du dividende.

```java
System.out.println(10 % 3);  // 1
System.out.println(10 % -3); // 1
System.out.println(-10 % 3); // -1
```
