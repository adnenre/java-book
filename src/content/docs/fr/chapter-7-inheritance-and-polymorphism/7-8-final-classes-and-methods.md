---
title: Classes et méthodes finales
sidebar:
  order: 8
  label: 7.8 Classes et méthodes finales
---

Le mot‑clé `final` peut être appliqué aux classes et aux méthodes pour restreindre l’héritage et la surcharge.

## Classes finales

Une classe `final` ne peut pas être étendue (sous‑classée).

```java
final class ClasseImmuable {
    // ...
}
// class Enfant extends ClasseImmuable { } // erreur
```

**Cas d’utilisation** : Immutabilité (ex. `String`, `Integer`), sécurité, ou conception où l’héritage briserait les invariants.

## Méthodes finales

Une méthode `final` ne peut pas être surchargée par les sous‑classes.

```java
class Parent {
    final void nePeutPasSurcharger() {
        System.out.println("Cette méthode est finale");
    }
}

class Enfant extends Parent {
    // void nePeutPasSurcharger() { } // erreur
}
```

**Cas d’utilisation** : Empêcher la modification d’un comportement critique, performance (liaison précoce), ou garantir l’exactitude d’algorithmes.

## Comparaison

| Modificateur       | Peut être étendue ? | Peut être surchargée ? |
| ------------------ | ------------------- | ---------------------- |
| `final class`      | Non                 | N/A                    |
| classe non‑finale  | Oui                 | –                      |
| `final method`     | –                   | Non                    |
| méthode non‑finale | –                   | Oui                    |

**Remarque** : `final` n’affecte pas les méthodes statiques (elles sont masquées, pas surchargées). De plus, les méthodes `final` peuvent être surchargées (overloaded) avec des paramètres différents – c’est autorisé.
