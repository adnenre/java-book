---
title: Interfaces marqueurs (Serializable, Cloneable)
sidebar:
  order: 8
  label: 8.8 Interfaces marqueurs (Serializable, Cloneable)
---

Une **interface marqueur** est une interface sans méthode ni constante. Elle est utilisée pour signaler ou "marquer" une classe pour un comportement spécial de la JVM ou du compilateur.

**Exemples** :

- `java.io.Serializable` – indique qu’un objet peut être sérialisé (converti en flux d’octets).
- `java.lang.Cloneable` – indique que `Object.clone()` est autorisé (sinon lève `CloneNotSupportedException`).
- `java.util.RandomAccess` – indique qu’une liste supporte un accès aléatoire rapide.

**Utilisation de Serializable** :

```java
import java.io.Serializable;

class Personne implements Serializable {
    private static final long serialVersionUID = 1L;
    String nom;
    int age;
}
```

**Utilisation de Cloneable** :

```java
class Point implements Cloneable {
    int x, y;
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

Point p1 = new Point();
Point p2 = (Point) p1.clone(); // fonctionne car Cloneable est implémenté
```

**Alternatives modernes** :

- Les annotations (ex. `@FunctionalInterface`) ont largement remplacé les interfaces marqueurs.
- Cependant, `Serializable` et `Cloneable` restent largement utilisées.

**Points clés** :

- Les interfaces marqueurs sont un patron de conception, pas une fonctionnalité de langage.
- Elles fournissent une information de type vérifiable avec `instanceof`.
- Elles font partie des mécanismes de réflexion et sérialisation de Java.
