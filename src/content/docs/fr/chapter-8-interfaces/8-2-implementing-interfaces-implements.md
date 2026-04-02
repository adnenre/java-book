---
title: Implémentation d’interfaces (implements)
sidebar:
  order: 2
  label: 8.2 Implémentation d’interfaces (implements)
---

Une classe implémente une interface à l’aide du mot‑clé `implements`. Elle doit fournir des implémentations concrètes pour toutes les méthodes abstraites de l’interface (sauf si la classe est abstraite).

**Syntaxe** :

```java
class NomClasse implements Interface1, Interface2, ... {
    // implémentations de toutes les méthodes abstraites
}
```

**Exemple** :

```java
interface Dessinable {
    void dessiner();
    void redimensionner(int facteur);
}

class Cercle implements Dessinable {
    @Override
    public void dessiner() {
        System.out.println("Dessiner un cercle");
    }

    @Override
    public void redimensionner(int facteur) {
        System.out.println("Redimensionner le cercle par facteur " + facteur);
    }
}
```

**Utilisation** :

```java
Cercle c = new Cercle();
c.dessiner();
c.redimensionner(2);

// Affectation polymorphe
Dessinable d = new Cercle();
d.dessiner();
```

**Important** : Les méthodes implémentées doivent être `public` (car les méthodes d’interface sont implicitement `public`). Le modificateur d’accès ne peut pas être réduit.

**Interfaces multiples** :

```java
interface Volant {
    void voler();
}
interface Nageant {
    void nager();
}
class Canard implements Volant, Nageant {
    public void voler() { System.out.println("Canard qui vole"); }
    public void nager() { System.out.println("Canard qui nage"); }
}
```
