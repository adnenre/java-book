---
title: Polymorphisme (compilation vs exécution)
sidebar:
  order: 5
  label: 7.5 Polymorphisme (compilation vs exécution)
---

Le **polymorphisme** signifie "plusieurs formes". Java supporte deux types :

## Polymorphisme à la compilation (statique)

Réalisé par **surcharge de méthodes**. La méthode à appeler est déterminée à la compilation en fonction des types d’arguments.

```java
class Calculatrice {
    int ajouter(int a, int b) { return a + b; }
    double ajouter(double a, double b) { return a + b; }
}
// L’appel est résolu à la compilation
```

## Polymorphisme à l’exécution (dynamique)

Réalisé par **surcharge de méthodes (overriding)**. La méthode à appeler est déterminée à l’exécution en fonction du type réel de l’objet, pas du type de référence.

```java
Animal a = new Chien();
a.faireSon(); // la méthode faireSon() de Chien est appelée à l’exécution
```

**Différence clé** :

| Aspect               | Compilation             | Exécution                                 |
| -------------------- | ----------------------- | ----------------------------------------- |
| Aussi appelé         | Surcharge (overloading) | Surcharge (overriding)                    |
| Moment de résolution | Compilation             | Exécution                                 |
| Signature            | Doit différer           | Doit être identique                       |
| Performance          | Plus rapide             | Légèrement plus lent (dispatch dynamique) |

**Exemple combinant les deux** :

```java
class Parent {
    void print(int x) { System.out.println("Parent int : " + x); } // surchargé
    void print(double x) { System.out.println("Parent double : " + x); }
    void afficher() { System.out.println("Parent afficher"); }
}

class Enfant extends Parent {
    @Override
    void afficher() { System.out.println("Enfant afficher"); }
    // Surcharge dans l’enfant
    void print(String s) { System.out.println("Enfant string : " + s); }
}

Parent p = new Enfant();
p.print(10);       // compilation : Parent.print(int)
p.afficher();      // exécution : Enfant.afficher()
// p.print("bonjour"); // erreur : Parent n’a pas de print(String)
```
