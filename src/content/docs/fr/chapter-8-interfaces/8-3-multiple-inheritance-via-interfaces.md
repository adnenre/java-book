---
title: Héritage multiple via les interfaces
sidebar:
  order: 3
  label: 8.3 Héritage multiple via les interfaces
---

Java ne supporte pas l’héritage multiple de classes (une classe ne peut étendre qu’une seule superclasse), mais il supporte **l’héritage multiple de type** via les interfaces. Une classe peut implémenter n’importe quel nombre d’interfaces.

**Avantages** :

- Une classe peut adopter des comportements provenant de plusieurs sources.
- Évite le problème du diamant de l’héritage multiple de classes (résolution ambiguë des méthodes) car les interfaces n’ont pas d’état et les conflits de méthodes doivent être résolus par la classe implémentante.

**Exemple** :

```java
interface LecteurMusique {
    void jouer();
    void arreter();
}

interface LecteurVideo {
    void jouer();
    void afficher();
}

class AppareilIntelligent implements LecteurMusique, LecteurVideo {
    // Doit implémenter toutes les méthodes abstraites
    @Override
    public void jouer() {
        System.out.println("Lecture du média");
    }

    @Override
    public void arreter() {
        System.out.println("Arrêt de la musique");
    }

    @Override
    public void afficher() {
        System.out.println("Affichage de la vidéo");
    }
}
```

**Gestion des méthodes par défaut conflictuelles** (Java 8+) :
Si deux interfaces fournissent des méthodes par défaut avec la même signature, la classe implémentante doit surcharger la méthode (ou utiliser `super` pour choisir).

```java
interface A {
    default void afficher() { System.out.println("A"); }
}
interface B {
    default void afficher() { System.out.println("B"); }
}
class C implements A, B {
    @Override
    public void afficher() {
        A.super.afficher(); // choisit la méthode par défaut de A
        // ou B.super.afficher();
        // ou fournir une nouvelle implémentation
    }
}
```
