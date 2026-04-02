---
title: Constructeurs paramétrés
sidebar:
  order: 6
  label: 5.4.2 Constructeurs paramétrés
---

Un **constructeur paramétré** accepte des arguments pour initialiser un objet avec des valeurs spécifiques.

**Exemple** :

```java
class Etudiant {
    String nom;
    int id;
    double note;

    // Constructeur paramétré
    Etudiant(String nom, int id, double note) {
        this.nom = nom;
        this.id = id;
        this.note = note;
    }
}

Etudiant e1 = new Etudiant("Alice", 101, 85.5);
Etudiant e2 = new Etudiant("Bob", 102, 92.0);
```

**Avantages** :

- Permet de créer des objets avec des états initiaux différents.
- Réduit le besoin de méthodes setter après la création.
- Rend les objets immédiatement utilisables.

**Plusieurs constructeurs paramétrés** : Utilisez la surcharge (listes de paramètres différentes).

```java
Etudiant(String nom, int id) {
    this(nom, id, 0.0);  // appel d’un autre constructeur
}
```
