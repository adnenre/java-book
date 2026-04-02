---
title: Mot‑clé final (variables, méthodes, classes)
sidebar:
  order: 13
  label: 5.9 Mot‑clé final
---

Le mot‑clé `final` restreint la modification. Sa signification dépend de l’endroit où il est appliqué.

## Variables final

Ne peuvent pas être réaffectées après initialisation. Ce sont des constantes.

```java
final double PI = 3.14159;
PI = 3.14; // erreur de compilation

// final vide (blank final) – initialisé dans le constructeur
final int TAILLE_MAX;
MaClasse() {
    TAILLE_MAX = 100;
}
```

## Méthodes final

Ne peuvent pas être surchargées par les sous‑classes.

```java
class Parent {
    final void afficher() {
        System.out.println("Ne peut pas être surchargée");
    }
}
class Enfant extends Parent {
    // void afficher() { } // erreur : ne peut pas surcharger
}
```

## Classes final

Ne peuvent pas être étendues (sous‑classées).

```java
final class ClasseImmuable {
    // ...
}
// class SousClasse extends ClasseImmuable { } // erreur
```

**Cas d’utilisation** :

- Variables `final` : pour de vraies constantes (souvent `static final`)
- Méthodes `final` : pour empêcher la rupture de logique interne
- Classes `final` : pour l’immutabilité (ex. `String`, `Integer`)

**Remarque** : `final` ne rend pas les objets immuables ; seule la référence est fixe.
