---
title: Opérateurs unaires
sidebar:
  order: 8
  label: 3.8 Opérateurs unaires
---

Les opérateurs unaires agissent sur un seul opérande. Ils comprennent l’incrémentation, la décrémentation, le signe et la négation logique.

| Opérateur | Description              | Exemple        |
| --------- | ------------------------ | -------------- |
| `+`       | Plus unaire (sans effet) | `+a`           |
| `-`       | Moins unaire (négation)  | `-a`           |
| `++`      | Incrémentation de 1      | `a++` ou `++a` |
| `--`      | Décrémentation de 1      | `a--` ou `--a` |
| `!`       | NON logique              | `!flag`        |
| `~`       | Complément binaire       | `~a`           |

**Incrémentation/Décrémentation** :

- **Préfixée** (`++a`) : incrémente puis utilise la valeur.
- **Postfixée** (`a++`) : utilise la valeur puis incrémente.

```java
int x = 5;
System.out.println(++x); // 6 (x devient 6, puis affiché)
System.out.println(x++); // 6 (affiché, puis x devient 7)
System.out.println(x);   // 7
```

**Plus/Moins unaire** :

```java
int a = 10;
int b = -a; // b = -10
int c = +a; // c = 10 (le plus unaire ne fait rien)
```

**NON logique** :

```java
boolean flag = true;
System.out.println(!flag); // false
```
