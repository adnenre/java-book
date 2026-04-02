---
title: Méthodes par défaut (default)
sidebar:
  order: 4
  label: 8.4 Méthodes par défaut (default)
---

Introduites en Java 8, les **méthodes par défaut** permettent aux interfaces de fournir des implémentations concrètes sans casser le code existant. Elles sont définies avec le mot‑clé `default`.

**Objectif** :

- Faire évoluer les interfaces en ajoutant de nouvelles méthodes sans forcer toutes les classes implémentantes à fournir une implémentation.
- Fournir un comportement commun qui peut être surchargé si nécessaire.

**Syntaxe** :

```java
interface Vehicule {
    void demarrer();

    default void klaxonner() {
        System.out.println("Tut tut !");
    }
}
```

**Utilisation des méthodes par défaut** :

```java
class Voiture implements Vehicule {
    @Override
    public void demarrer() {
        System.out.println("Voiture qui démarre");
    }
    // klaxonner() est héritée (peut être surchargée optionnellement)
}

Voiture voiture = new Voiture();
voiture.demarrer();   // Voiture qui démarre
voiture.klaxonner();  // Tut tut !
```

**Surcharge des méthodes par défaut** :

```java
class VoitureElectrique implements Vehicule {
    @Override
    public void demarrer() {
        System.out.println("Voiture électrique démarre silencieusement");
    }
    @Override
    public void klaxonner() {
        System.out.println("Bip électrique");
    }
}
```

**Résolution de conflit** : Lorsqu’une classe implémente plusieurs interfaces avec des méthodes par défaut conflictuelles, la classe doit surcharger la méthode. Utilisez `InterfaceName.super.nomMethode()` pour appeler une méthode par défaut spécifique.

**Remarque** : Les méthodes par défaut ne peuvent pas surcharger les méthodes de `Object` (ex. `equals`, `hashCode`).
