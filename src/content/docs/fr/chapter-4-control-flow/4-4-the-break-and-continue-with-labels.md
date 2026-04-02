---
title: Break et continue avec étiquettes
sidebar:
  order: 10
  label: 4.4 Break et continue avec étiquettes
---

Les étiquettes étendent `break` et `continue` pour fonctionner avec des boucles imbriquées. Une étiquette est un identifiant suivi de deux points (`:`).

## break avec étiquette

Sort du bloc étiqueté (pas seulement de la boucle la plus interne).

```java
boucleExterne:
for (int i = 0; i < 3; i++) {
    System.out.println("Externe " + i);
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break boucleExterne;   // sort complètement de boucleExterne
        }
        System.out.println("  Interne " + j);
    }
}
```

## continue avec étiquette

Ignore l’itération courante de la boucle étiquetée et continue avec l’itération suivante de cette boucle.

```java
externe:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue externe;   // passe au i suivant, sans finir les j restants
        }
        System.out.println("i=" + i + ", j=" + j);
    }
}
```

## Blocs étiquetés (pas seulement les boucles)

Vous pouvez étiqueter n’importe quel bloc et utiliser `break` pour en sortir.

```java
bloc:
{
    int x = 10;
    if (x > 5) {
        break bloc;
    }
    System.out.println("Ceci ne s’affichera pas");
}
System.out.println("Après le bloc");
```

**Important** : Les étiquettes doivent être placées avant l’instruction (boucle ou bloc) à laquelle elles se réfèrent. On ne peut pas faire `break` ou `continue` vers une étiquette qui n’entoure pas l’instruction courante.
