---
title: Méthodes statiques dans les interfaces
sidebar:
  order: 5
  label: 8.5 Méthodes statiques dans les interfaces
---

Java 8 autorise les **méthodes statiques** dans les interfaces. Elles appartiennent à l’interface elle‑même, pas aux classes implémentantes.

**Syntaxe** :

```java
interface UtilitairesMath {
    static int additionner(int a, int b) {
        return a + b;
    }
}
```

**Utilisation** :

```java
int somme = UtilitairesMath.additionner(5, 3);  // appel sur l’interface, pas sur une instance
```

**Règles importantes** :

- Les méthodes statiques ne peuvent pas être surchargées par les classes implémentantes.
- Elles ne sont pas héritées par les classes implémentantes (contrairement aux méthodes par défaut).
- Elles ne peuvent être accédées qu’en utilisant le nom de l’interface.

```java
class MaMath implements UtilitairesMath {
    // Ne peut pas surcharger additionner()
    void test() {
        // additionner(1,2); // erreur : appel impossible via la classe
        UtilitairesMath.additionner(1,2); // correct
    }
}
```

**Cas d’utilisation** :

- Méthodes utilitaires liées à l’interface (ex. méthodes fabriques, fonctions d’aide).
- Regrouper des méthodes statiques associées sans avoir besoin d’une classe utilitaire séparée.

**Remarque** : Les méthodes statiques dans les interfaces ne peuvent pas être appelées depuis une instance de la classe implémentante.
