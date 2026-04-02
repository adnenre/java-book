---
title: Opérateurs relationnels
sidebar:
  order: 3
  label: 3.3 Opérateurs relationnels
---

Les opérateurs relationnels comparent deux valeurs et retournent un résultat booléen (`true` ou `false`). Ils sont utilisés dans les conditions (`if`, `while`, etc.).

| Opérateur | Description       | Exemple  |
| --------- | ----------------- | -------- |
| `<`       | Inférieur à       | `a < b`  |
| `<=`      | Inférieur ou égal | `a <= b` |
| `>`       | Supérieur à       | `a > b`  |
| `>=`      | Supérieur ou égal | `a >= b` |

**Exemples** :

```java
int age = 18;
if (age >= 18) {
    System.out.println("Adulte");
}

double note = 85.5;
if (note < 60) {
    System.out.println("Échec");
}
```

**Important** : Les opérateurs relationnels ne fonctionnent qu’avec les types numériques (y compris `char`). Pour les objets, utilisez des méthodes comme `compareTo()`.

```java
char c1 = 'A', c2 = 'B';
System.out.println(c1 < c2); // true (basé sur la valeur Unicode)
```
