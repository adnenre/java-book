---
title: Le mot‑clé new et la création d’objets
sidebar:
  order: 10
  label: 5.6 Le mot‑clé new et la création d’objets
---

Le mot‑clé `new` est utilisé pour créer un objet (instancier une classe). Il alloue de la mémoire dans le tas (heap) et retourne une référence vers l’objet nouvellement créé.

**Syntaxe** :

```java
NomClasse nomObjet = new NomClasse(arguments);
```

**Étapes** :

1. La mémoire est allouée pour l’objet.
2. Le constructeur approprié est appelé.
3. Une référence vers l’objet est retournée.

**Exemple** :

```java
Etudiant e = new Etudiant("Alice", 20);
```

**Objets multiples** :

```java
Point p1 = new Point(0, 0);
Point p2 = new Point(5, 10);
```

**Objets anonymes** : Créés sans stocker de référence.

```java
new Point(3, 4).afficher();  // méthode appelée directement, objet éligible au GC après
```

**Création de tableaux** :

```java
int[] nombres = new int[10];        // tableau de primitifs
Point[] points = new Point[5];      // tableau de références (null initialement)
points[0] = new Point(1, 2);        // assigne un objet à un élément du tableau
```
