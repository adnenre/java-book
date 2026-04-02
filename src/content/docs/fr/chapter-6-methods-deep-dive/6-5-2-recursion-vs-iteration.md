---
title: Récursion vs itération
sidebar:
  order: 7
  label: 6.5.2 Récursion vs itération
---

La récursion et l’itération peuvent toutes deux résoudre des problèmes répétitifs. Choisissez en fonction de la clarté et des contraintes de performance.

| Aspect             | Récursion                                                                          | Itération                                      |
| ------------------ | ---------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Mémoire**        | Utilise la pile (chaque appel ajoute un cadre)                                     | Utilise une mémoire fixe (variables de boucle) |
| **Performance**    | Surcoût des appels de fonction                                                     | Généralement plus rapide                       |
| **Risque**         | Dépassement de pile pour récursion profonde                                        | Pas de dépassement de pile                     |
| **Lisibilité**     | Élégant pour les problèmes en arbre (ex. système de fichiers, diviser pour régner) | Meilleur pour les problèmes linéaires simples  |
| **Taille du code** | Souvent plus court                                                                 | Généralement plus long                         |

**Exemple – factorielle (récursion vs itération)** :

```java
// Récursive
int factRec(int n) {
    if (n <= 1) return 1;
    return n * factRec(n - 1);
}

// Itérative
int factIter(int n) {
    int resultat = 1;
    for (int i = 2; i <= n; i++) {
        resultat *= i;
    }
    return resultat;
}
```

**Quand utiliser la récursion** :

- Parcours d’arbres/graphes
- Retour sur trace (ex. résolution de labyrinthe, N‑Dames)
- Diviser pour régner (tri fusion, tri rapide)
- Problèmes à définition récursive (Fibonacci, factorielle)

**Quand utiliser l’itération** :

- Boucles simples sur des tableaux/collections
- Code critique pour les performances
- Quand la profondeur est grande ou inconnue

**Approche hybride** : Utilisez la récursion pour la clarté, mais convertissez en itération avec une pile explicite si nécessaire pour les performances.
