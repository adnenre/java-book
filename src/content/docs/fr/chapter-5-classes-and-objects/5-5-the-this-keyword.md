---
title: Le mot‑clé this
sidebar:
  order: 9
  label: 5.5 Le mot‑clé this
---

Le mot‑clé `this` fait référence à l’instance d’objet courante. Il est utilisé pour :

1. Distinguer les variables d’instance des paramètres portant le même nom.
2. Appeler un autre constructeur depuis un constructeur (`this(...)`).
3. Passer l’objet courant comme argument.
4. Retourner l’objet courant depuis une méthode.

**1. Résoudre les conflits de noms** :

```java
class Personne {
    String nom;
    Personne(String nom) {
        this.nom = nom;  // this.nom fait référence à la variable d’instance
    }
}
```

**2. Appeler un autre constructeur** :

```java
class Rectangle {
    int largeur, hauteur;
    Rectangle() {
        this(0, 0);  // appelle le constructeur paramétré
    }
    Rectangle(int l, int h) {
        largeur = l;
        hauteur = h;
    }
}
```

**3. Passer l’objet courant** :

```java
class Processeur {
    void traiter(Personne p) { ... }
}

class Personne {
    void soumettre() {
        Processeur proc = new Processeur();
        proc.traiter(this);  // passe l’objet Personne courant
    }
}
```

**4. Retourner l’objet courant (chaînage de méthodes)** :

```java
class Compteur {
    int compteur;
    Compteur incrementer() {
        compteur++;
        return this;
    }
}
Compteur c = new Compteur().incrementer().incrementer(); // chaînage
```
