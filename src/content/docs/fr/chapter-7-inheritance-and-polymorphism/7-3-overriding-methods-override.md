---
title: Surcharge de méthodes (@Override)
sidebar:
  order: 3
  label: 7.3 Surcharge de méthodes (@Override)
---

La **surcharge de méthode** se produit lorsqu’une sous‑classe fournit une implémentation spécifique d’une méthode déjà définie dans sa superclasse.

**Règles de surcharge** :

- Même nom de méthode, même liste de paramètres (signature).
- Même type de retour (ou type de retour covariant – sous‑type du type de retour original).
- Le niveau d’accès ne peut pas être plus restrictif (ex. `public` ne peut pas surcharger `protected`).
- Ne peut pas surcharger les méthodes `final`.
- Ne peut pas surcharger les méthodes `static` (elles sont masquées, pas surchargées).

**Utilisation de l’annotation `@Override`** (optionnelle mais recommandée) :

```java
class Animal {
    void faireSon() {
        System.out.println("Son d'animal");
    }
}

class Chat extends Animal {
    @Override
    void faireSon() {
        System.out.println("Miaou");
    }
}
```

**Type de retour covariant** :

```java
class Animal { }
class Chien extends Animal { }

class Refuge {
    Animal getAnimal() { return new Animal(); }
}

class RefugeChien extends Refuge {
    @Override
    Chien getAnimal() { return new Chien(); } // Chien est sous‑type de Animal
}
```

**Appel de la méthode surchargée depuis la sous‑classe** :

```java
class Enfant extends Parent {
    @Override
    void afficher() {
        super.afficher(); // appelle la version parent
        System.out.println("Version enfant");
    }
}
```

**Avantages** : Polymorphisme, réutilisation du code, extensibilité.
