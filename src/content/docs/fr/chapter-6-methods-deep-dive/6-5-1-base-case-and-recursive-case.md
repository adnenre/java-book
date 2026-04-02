---
title: Cas de base et cas récursif
sidebar:
  order: 6
  label: 6.5.1 Cas de base et cas récursif
---

Toute méthode récursive doit avoir deux parties :

## Cas de base

La condition qui arrête la récursion. Elle fournit une réponse directe pour la plus petite instance du problème.

## Cas récursif

La partie où la méthode s’appelle elle‑même avec une entrée plus petite ou plus simple, se rapprochant du cas de base.

**Exemple – fonction puissance** :

```java
int puissance(int base, int exposant) {
    // Cas de base : exposant == 0
    if (exposant == 0) {
        return 1;
    }
    // Cas récursif : base^exposant = base * base^(exposant-1)
    return base * puissance(base, exposant - 1);
}
```

**Cas de base multiples** :

```java
int fibonacci(int n) {
    if (n == 0) return 0;      // cas de base 1
    if (n == 1) return 1;      // cas de base 2
    return fibonacci(n - 1) + fibonacci(n - 2); // cas récursif
}
```

**Erreur courante** : L’absence de cas de base conduit à une récursion infinie et à `StackOverflowError`.

```java
int infini(int n) {
    return infini(n - 1); // pas de cas de base
}
```

**Conseils** :

- Définissez toujours un cas de base accessible.
- Assurez‑vous que le cas récursif réduit la taille du problème.
- Testez d’abord avec de petites entrées.
