---
title: Récursion
sidebar:
  order: 5
  label: 6.5 Récursion
---

La **récursion** se produit lorsqu’une méthode s’appelle elle‑même. C’est une technique pour résoudre des problèmes en les décomposant en sous‑problèmes plus petits et similaires.

**Exemple basique – factorielle** :

```java
int factorielle(int n) {
    if (n == 0) return 1;           // cas de base
    return n * factorielle(n - 1);  // appel récursif
}
```

**Comment cela fonctionne** :

`factorielle(4)` → `4 * factorielle(3)` → `4 * 3 * factorielle(2)` → ... → `4 * 3 * 2 * 1 * 1 = 24`

**Utilisation de la pile** : Chaque appel récursif ajoute un nouveau cadre à la pile d’appels. Une récursion profonde peut provoquer `StackOverflowError`.

**Exemples courants de récursion** :

- Suite de Fibonacci
- Recherche binaire
- Parcours d’arbres
- Liste de répertoires

**Exemple de Fibonacci** :

```java
int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

**Récursion terminale** : Java n’optimise pas la récursion terminale, mais vous pouvez convertir la récursion en itération pour les performances.
