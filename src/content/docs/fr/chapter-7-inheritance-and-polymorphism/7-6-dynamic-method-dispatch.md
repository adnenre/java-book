---
title: Résolution dynamique des méthodes
sidebar:
  order: 6
  label: 7.6 Résolution dynamique des méthodes
---

La **résolution dynamique des méthodes** est le mécanisme par lequel Java décide à l’exécution quelle méthode surchargée appeler. C’est le fondement du polymorphisme à l’exécution.

**Comment cela fonctionne** :

- Une variable de référence de superclasse peut référencer un objet de sous‑classe.
- Lorsqu’une méthode surchargée est appelée via cette référence, Java détermine le type réel de l’objet et invoque la version de la sous‑classe.

**Exemple** :

```java
class Forme {
    void dessiner() {
        System.out.println("Dessiner Forme");
    }
}

class Cercle extends Forme {
    @Override
    void dessiner() {
        System.out.println("Dessiner Cercle");
    }
}

class Rectangle extends Forme {
    @Override
    void dessiner() {
        System.out.println("Dessiner Rectangle");
    }
}

public class Main {
    public static void main(String[] args) {
        Forme f;
        f = new Cercle();
        f.dessiner(); // "Dessiner Cercle"

        f = new Rectangle();
        f.dessiner(); // "Dessiner Rectangle"
    }
}
```

**Pourquoi est‑ce puissant ?** Cela permet d’écrire du code qui travaille avec le type de la superclasse, mais qui se comporte correctement à l’exécution pour le type réel de l’objet.

**Exemple avec un tableau** :

```java
Forme[] formes = { new Cercle(), new Rectangle(), new Cercle() };
for (Forme forme : formes) {
    forme.dessiner(); // la bonne version est appelée pour chaque
}
```

**La résolution dynamique s’applique uniquement aux méthodes d’instance, pas aux méthodes statiques (liaison à la compilation) ni aux champs (accès basé sur le type de référence).**
