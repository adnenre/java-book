---
title: Définition d’interfaces (interface)
sidebar:
  order: 1
  label: 8.1 Définition d’interfaces (interface)
---

Une **interface** en Java est un contrat qui définit ce qu’une classe peut faire sans préciser comment. Elle contient des méthodes abstraites (jusqu’à Java 8 qui a ajouté des méthodes par défaut et statiques). Les interfaces permettent l’abstraction, l’héritage multiple de type et le polymorphisme.

# Definition d'interface

Une interface est définie à l’aide du mot‑clé `interface`. Elle peut contenir :

- Des méthodes abstraites (implicitement `public abstract`)
- Des champs constants (implicitement `public static final`)
- Des méthodes par défaut (Java 8+)
- Des méthodes statiques (Java 8+)
- Des méthodes privées (Java 9+)

**Syntaxe** :

```java
interface Dessinable {
    // constante
    int COULEUR = 0xFF0000;  // public static final

    // méthode abstraite (pas de corps)
    void dessiner();

    // méthode par défaut (Java 8)
    default void afficher() {
        System.out.println("Affichage");
    }

    // méthode statique (Java 8)
    static void info() {
        System.out.println("Interface Dessinable");
    }
}
```

**Caractéristiques** :

- Tous les champs sont implicitement `public static final`.
- Toutes les méthodes abstraites sont implicitement `public abstract` (pas besoin d’écrire ces modificateurs).
- Les interfaces ne peuvent pas être instanciées directement.
- Une interface peut étendre plusieurs interfaces.

**Exemple avec seulement des méthodes abstraites (traditionnel)** :

```java
interface Animal {
    void manger();
    void dormir();
}
```
