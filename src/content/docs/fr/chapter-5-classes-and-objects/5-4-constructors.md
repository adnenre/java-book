---
title: Constructeurs
sidebar:
  order: 4
  label: 5.4 Constructeurs
---

Un **constructeur** est une méthode spéciale qui initialise un objet lors de sa création. Il porte le même nom que la classe et n’a pas de type de retour (pas même `void`).

**Syntaxe** :

```java
class NomClasse {
    NomClasse(parametres) {
        // code d’initialisation
    }
}
```

**Exemple** :

```java
class Livre {
    String titre;
    String auteur;

    // Constructeur
    Livre(String t, String a) {
        titre = t;
        auteur = a;
    }
}
```

**Appel d’un constructeur** : Avec le mot‑clé `new`.

```java
Livre monLivre = new Livre("1984", "Orwell");
```

**Points clés** :

- Les constructeurs peuvent être surchargés (listes de paramètres différentes).
- Si aucun constructeur n’est défini, Java fournit un constructeur par défaut sans paramètre.
- Les constructeurs ne peuvent pas être `static`, `final` ou `abstract`.
- Ils peuvent appeler d’autres constructeurs avec `this()`.
