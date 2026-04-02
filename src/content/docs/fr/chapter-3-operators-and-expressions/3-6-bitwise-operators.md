---
title: Opérateurs binaires
sidebar:
  order: 6
  label: 3.6 Opérateurs binaires
---

Les opérateurs binaires travaillent sur les types entiers (`byte`, `short`, `int`, `long`) au niveau des bits.

| Opérateur | Description                 | Exemple   |
| --------- | --------------------------- | --------- |
| `&`       | ET binaire                  | `a & b`   |
| `\|`      | OU binaire                  | `a \| b`  |
| `^`       | OU exclusif binaire         | `a ^ b`   |
| `~`       | Complément binaire (unaire) | `~a`      |
| `<<`      | Décalage gauche             | `a << b`  |
| `>>`      | Décalage droit signé        | `a >> b`  |
| `>>>`     | Décalage droit non signé    | `a >>> b` |

**Exemples** :

```java
int a = 0b1010; // 10
int b = 0b1100; // 12

System.out.println(a & b); // 0b1000 (8)
System.out.println(a | b); // 0b1110 (14)
System.out.println(a ^ b); // 0b0110 (6)
System.out.println(~a);    // complément binaire (complément à deux)

System.out.println(a << 1); // 0b10100 (20) (décalage gauche de 1 = multiplication par 2)
System.out.println(a >> 1); // 0b0101 (5) (décalage droit signé = division par 2, signe préservé)
```

**Opérateurs de décalage** :

- `<<` décale à gauche, remplit avec des zéros.
- `>>` décale à droite, préserve le bit de signe (décalage arithmétique).
- `>>>` décale à droite, remplit toujours avec des zéros (décalage logique).

```java
int n = -16;
System.out.println(n >> 2);  // -4 (extension du signe)
System.out.println(n >>> 2); // grand nombre positif (décalage non signé)
```

**Utilisations** : indicateurs (flags), E/S de bas niveau, cryptographie, opérations critiques pour les performances.
