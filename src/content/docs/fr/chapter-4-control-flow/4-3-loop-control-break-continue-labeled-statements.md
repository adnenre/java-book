---
title: Contrôle de boucle (break, continue, instructions étiquetées)
sidebar:
  order: 9
  label: 4.3 Contrôle de boucle (break, continue, étiquettes)
---

Java fournit `break` et `continue` pour contrôler l’exécution des boucles.

## break

Sort immédiatement de la boucle courante.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;   // sort de la boucle quand i == 5
    }
    System.out.println(i);
}
// Sortie : 0 1 2 3 4
```

## continue

Ignore le reste du code dans l’itération courante et passe à l’itération suivante.

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) {
        continue;   // saute l’affichage de 2
    }
    System.out.println(i);
}
// Sortie : 0 1 3 4
```

## Instructions étiquetées

Les étiquettes permettent à `break` et `continue` de sortir ou de sauter plusieurs boucles imbriquées.

**Syntaxe** :

```java
etiquette:
for (...) {
    for (...) {
        break etiquette;   // sort de la boucle externe
    }
}
```

**Exemple** :

```java
externe:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break externe;   // sort des deux boucles
        }
        System.out.println(i + ", " + j);
    }
}
```

**Utilisation de `continue` avec étiquettes** :

```java
externe:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 1) {
            continue externe;   // passe à l’itération suivante de la boucle externe
        }
        System.out.println(i + ", " + j);
    }
}
```
