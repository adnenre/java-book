---
title: Méthodes (méthodes d’instance)
sidebar:
  order: 3
  label: 5.3 Méthodes (méthodes d’instance)
---

Les **méthodes** définissent le comportement d’un objet. Elles peuvent accéder aux variables d’instance et les modifier.

**Syntaxe** :

```java
typeRetour nomMethode(listeParametres) {
    // corps de la méthode
}
```

**Exemple** :

```java
class Rectangle {
    double largeur, hauteur;

    double calculerAire() {
        return largeur * hauteur;
    }

    void definirDimensions(double l, double h) {
        largeur = l;
        hauteur = h;
    }
}
```

**Appel de méthodes** :

```java
Rectangle rect = new Rectangle();
rect.definirDimensions(5, 10);
double aire = rect.calculerAire();
```

**Modificateurs de méthodes** :

- `public`, `private`, `protected` – contrôle d’accès
- `static` – appartient à la classe
- `abstract` – pas de corps, doit être surchargée
- `final` – ne peut pas être surchargée
- `synchronized` – sécurisée pour les threads

**Types de retour** :

- Type primitif ou référence
- `void` – aucune valeur de retour

**Paramètres** : Passés par valeur (primitifs) ou par référence (objets).
