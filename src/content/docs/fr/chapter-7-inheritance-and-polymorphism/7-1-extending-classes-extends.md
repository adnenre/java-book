---
title: Extension de classes (extends)
sidebar:
  order: 1
  label: 7.1 Extension de classes (extends)
---

Le mot‑clé `extends` est utilisé pour créer une sous‑classe qui hérite d’une superclasse.

**Syntaxe** :

```java
class SousClasse extends Superclasse {
    // champs et méthodes supplémentaires
}
```

**Exemple** :

```java
class Animal {
    String nom;
    void manger() {
        System.out.println(nom + " mange");
    }
}

class Chien extends Animal {
    void aboyer() {
        System.out.println(nom + " aboie");
    }
}
```

**Utilisation** :

```java
Chien chien = new Chien();
chien.nom = "Rex";
chien.manger(); // hérité de Animal
chien.aboyer(); // défini dans Chien
```

**Qu’est‑ce qui est hérité ?**

- Tous les membres `public` et `protected` (champs et méthodes)
- Les membres `default` (package‑private) si la sous‑classe est dans le même package
- **Les membres privés ne sont PAS hérités** (mais peuvent être accédés indirectement via des méthodes publiques/protégées).

**Java supporte l’héritage simple** : une classe ne peut étendre qu’une seule superclasse directe. L’héritage multiple de classes n’est pas autorisé, mais l’implémentation de multiples interfaces est possible.

**Hiérarchie d’héritage** :

```java
class Vehicule { }
class Voiture extends Vehicule { }
class VoitureElectrique extends Voiture { }
```
