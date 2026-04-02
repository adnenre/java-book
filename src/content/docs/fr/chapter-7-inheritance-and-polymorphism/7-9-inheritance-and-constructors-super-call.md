---
title: Héritage et constructeurs (appel super())
sidebar:
  order: 9
  label: 7.9 Héritage et constructeurs (appel super())
---

Lorsqu’un objet d’une sous‑classe est créé, les constructeurs de toutes les superclasses sont appelés dans l’ordre depuis le sommet de la hiérarchie jusqu’à la sous‑classe.

**Règles de l’enchaînement des constructeurs** :

- La première instruction de chaque constructeur doit être un appel à `super(...)` ou `this(...)` (autre constructeur de la même classe).
- Si aucun appel explicite n’est présent, le compilateur insère `super()` (constructeur sans paramètre du parent).
- Si la classe parent n’a pas de constructeur sans paramètre, vous **devez** appeler explicitement un `super(...)` paramétré.

**Exemple** :

```java
class GrandParent {
    GrandParent() {
        System.out.println("Constructeur GrandParent");
    }
}

class Parent extends GrandParent {
    Parent(String nom) {
        // super() implicite appelle GrandParent()
        System.out.println("Constructeur Parent : " + nom);
    }
}

class Enfant extends Parent {
    Enfant() {
        super("NomEnfant"); // appel explicite à Parent(String)
        System.out.println("Constructeur Enfant");
    }
}
```

**Sortie lors de `new Enfant();`** :

```
Constructeur GrandParent
Constructeur Parent : NomEnfant
Constructeur Enfant
```

**Important** : Si une classe définit un constructeur (même paramétré), le constructeur par défaut sans paramètre n’est pas automatiquement fourni. Donc si vous étendez une telle classe, vous devez appeler explicitement un constructeur existant.

```java
class Base {
    Base(int x) { }
}
class Derivee extends Base {
    Derivee() {
        super(10); // obligatoire
    }
}
```

**Ordre d’initialisation des champs** :

1. Initialiseurs statiques et champs statiques de la superclasse
2. Initialiseurs statiques et champs statiques de la sous‑classe
3. Initialiseurs d’instance et champs d’instance de la superclasse
4. Constructeur de la superclasse
5. Initialiseurs d’instance et champs d’instance de la sous‑classe
6. Constructeur de la sous‑classe
