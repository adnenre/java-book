---
title: Le mot‑clé super
sidebar:
  order: 4
  label: 7.4 Le mot‑clé super
---

Le mot‑clé `super` fait référence à la superclasse immédiate. Il est utilisé à deux fins :

## 1. Accéder aux champs et méthodes de la superclasse

Lorsqu’une sous‑classe surcharge une méthode ou masque un champ, `super` permet d’accéder à la version de la superclasse.

```java
class Parent {
    String nom = "Parent";
    void afficher() {
        System.out.println("Parent afficher");
    }
}

class Enfant extends Parent {
    String nom = "Enfant";
    void afficher() {
        super.afficher();                 // appelle la méthode parent
        System.out.println(super.nom);    // accède au champ parent
        System.out.println(this.nom);     // champ enfant
    }
}
```

## 2. Appeler le constructeur de la superclasse

L’appel `super()` doit être la première instruction dans un constructeur. Il invoque le constructeur de la classe parent.

```java
class Parent {
    Parent(String message) {
        System.out.println("Parent : " + message);
    }
}

class Enfant extends Parent {
    Enfant(String msg) {
        super(msg);   // doit être en premier
        System.out.println("Constructeur enfant");
    }
}
```

**Important** : Si un constructeur n’appelle pas explicitement `super()` ou `this()`, le compilateur insère `super()` (appel au constructeur sans paramètre du parent). Si le parent n’a pas de constructeur sans paramètre, vous devez appeler explicitement un `super()` paramétré.

```java
class Parent {
    Parent(int x) { }
}
class Enfant extends Parent {
    Enfant() {
        super(10); // obligatoire
    }
}
```
