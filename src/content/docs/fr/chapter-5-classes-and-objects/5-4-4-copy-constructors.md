---
title: Constructeurs de copie
sidebar:
  order: 8
  label: 5.4.4 Constructeurs de copie
---

Un **constructeur de copie** crée un nouvel objet en copiant l’état d’un autre objet de la même classe. Java ne fournit pas de constructeur de copie par défaut ; vous devez l’écrire vous‑même.

**Exemple** :

```java
class Point {
    int x, y;

    // Constructeur normal
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Constructeur de copie
    Point(Point autre) {
        this.x = autre.x;
        this.y = autre.y;
    }
}
```

**Utilisation** :

```java
Point p1 = new Point(10, 20);
Point p2 = new Point(p1);  // p2 est une copie de p1
```

**Copie profonde vs copie superficielle** : Pour les objets contenant des références, vous pouvez avoir besoin d’une copie profonde.

```java
class Adresse {
    String ville;
    Adresse(Adresse autre) {
        this.ville = autre.ville;
    }
}

class Personne {
    String nom;
    Adresse adresse;

    // Constructeur de copie profonde
    Personne(Personne autre) {
        this.nom = autre.nom;
        this.adresse = new Adresse(autre.adresse); // copie de l’objet imbriqué
    }
}
```

**Alternatives** : Utilisez la méthode `clone()` ou des méthodes fabriques, mais les constructeurs de copie sont souvent plus clairs.
