---
title: Surcharge des constructeurs
sidebar:
  order: 7
  label: 5.4.3 Surcharge des constructeurs
---

La **surcharge des constructeurs** consiste à définir plusieurs constructeurs avec des listes de paramètres différentes. Le constructeur approprié est appelé en fonction des arguments passés.

**Exemple** :

```java
class Produit {
    String nom;
    double prix;
    int quantite;

    // Constructeur 1 : sans paramètre
    Produit() {
        this("Inconnu", 0.0, 0);
    }

    // Constructeur 2 : nom seulement
    Produit(String nom) {
        this(nom, 0.0, 0);
    }

    // Constructeur 3 : nom et prix
    Produit(String nom, double prix) {
        this(nom, prix, 0);
    }

    // Constructeur 4 : tous les paramètres
    Produit(String nom, double prix, int quantite) {
        this.nom = nom;
        this.prix = prix;
        this.quantite = quantite;
    }
}
```

**Utilisation** :

```java
Produit p1 = new Produit();
Produit p2 = new Produit("Ordinateur");
Produit p3 = new Produit("Téléphone", 599.99);
Produit p4 = new Produit("Tablette", 299.99, 5);
```

**Avantages** :

- Offre une flexibilité dans la création d’objets.
- Permet des valeurs par défaut tout en offrant une initialisation complète.
- Utilise `this()` pour éviter la duplication de code.
