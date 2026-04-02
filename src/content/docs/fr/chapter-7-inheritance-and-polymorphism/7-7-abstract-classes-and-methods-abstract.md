---
title: Classes et méthodes abstraites (abstract)
sidebar:
  order: 7
  label: 7.7 Classes et méthodes abstraites (abstract)
---

Une **classe abstraite** ne peut pas être instanciée. Elle peut contenir des **méthodes abstraites** (sans corps) et des méthodes concrètes.

**Méthode abstraite** :

- Déclarée avec le mot‑clé `abstract`.
- N’a pas de corps (se termine par un point‑virgule).
- Doit être implémentée par la première sous‑classe concrète.

**Syntaxe** :

```java
abstract class Animal {
    abstract void faireSon(); // pas de corps
    void dormir() {           // méthode concrète
        System.out.println("Dort");
    }
}
```

**La sous‑classe concrète doit implémenter les méthodes abstraites** :

```java
class Chien extends Animal {
    @Override
    void faireSon() {
        System.out.println("Aboie");
    }
}
```

**Points clés** :

- Les classes abstraites peuvent avoir des constructeurs (appelés lors de l’instanciation de la sous‑classe).
- Elles peuvent avoir des champs, des méthodes concrètes, des méthodes statiques, etc.
- Ne peuvent pas être instanciées : `new Animal();` // erreur.
- Si une sous‑classe n’implémente pas toutes les méthodes abstraites, elle doit aussi être déclarée `abstract`.

**Pourquoi utiliser des classes abstraites ?**

- Fournir une base commune avec du code partagé et imposer certaines méthodes.
- Définir un modèle pour les sous‑classes.

**Classe abstraite vs Interface** (bref) : Une classe abstraite peut avoir un état (champs) et fournir une implémentation partielle ; les interfaces (avant Java 8) étaient purement abstraites. Java 8+ permet des méthodes par défaut/statiques dans les interfaces.
