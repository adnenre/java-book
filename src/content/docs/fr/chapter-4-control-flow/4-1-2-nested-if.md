---
title: if imbriqué
sidebar:
  order: 2
  label: 4.1.2 if imbriqué
---

Un **if imbriqué** est une instruction `if` à l’intérieur d’un autre bloc `if` ou `else`. Il permet de vérifier plusieurs conditions à différents niveaux.

**Exemple** :

```java
int age = 25;
boolean aPermis = true;

if (age >= 18) {
    System.out.println("Adulte");
    if (aPermis) {
        System.out.println("Peut conduire");
    } else {
        System.out.println("Ne peut pas conduire");
    }
} else {
    System.out.println("Mineur");
}
```

**if‑else if imbriqué** :

```java
int x = 10, y = 20;

if (x > 0) {
    if (y > 0) {
        System.out.println("Les deux sont positifs");
    } else {
        System.out.println("x positif, y non positif");
    }
} else {
    System.out.println("x non positif");
}
```

**Bonnes pratiques** :

- Évitez les imbrications profondes (plus de 2‑3 niveaux) pour la lisibilité.
- Envisagez d’extraire les conditions internes dans des méthodes séparées ou d’utiliser des opérateurs logiques (`&&`, `||`).

```java
// Au lieu d’une imbrication profonde :
if (x > 0 && y > 0) {
    System.out.println("Les deux sont positifs");
}
```
