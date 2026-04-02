---
title: Masquage de méthode (méthodes statiques)
sidebar:
  order: 8
  label: 6.6 Masquage de méthode
---

Le **masquage de méthode** se produit lorsqu’une sous‑classe définit une méthode `static` avec la même signature qu’une méthode `static` de sa superclasse. C’est différent de la surcharge (qui s’applique aux méthodes d’instance).

**Différences clés** :

- Surcharge : méthodes d’instance – dispatch dynamique basé sur le type de l’objet.
- Masquage : méthodes statiques – dispatch basé sur le type de référence (à la compilation).

**Exemple** :

```java
class Parent {
    static void afficher() {
        System.out.println("Parent static");
    }
    void montrer() {
        System.out.println("Parent instance");
    }
}

class Enfant extends Parent {
    static void afficher() {   // masque Parent.afficher()
        System.out.println("Enfant static");
    }
    @Override
    void montrer() {              // surcharge Parent.montrer()
        System.out.println("Enfant instance");
    }
}
```

**Comportement des appels** :

```java
Parent p = new Enfant();
p.afficher(); // "Parent static"  (basé sur le type de référence)
p.montrer();  // "Enfant instance" (basé sur le type de l’objet)

Enfant e = new Enfant();
e.afficher(); // "Enfant static"
```

**Accès à la méthode masquée** : Utilisez le nom de la superclasse.

```java
Parent.afficher();  // appelle la version de Parent
Enfant.afficher();   // appelle la version de Enfant
```

**Bonnes pratiques** :

- Évitez de masquer les méthodes statiques ; cela peut prêter à confusion.
- Si nécessaire, utilisez des noms différents ou documentez clairement le comportement.
- Utilisez `@Override` uniquement pour les méthodes d’instance ; il ne s’applique pas aux méthodes statiques.
