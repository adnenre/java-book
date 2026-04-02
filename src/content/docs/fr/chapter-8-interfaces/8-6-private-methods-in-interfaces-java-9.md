---
title: Méthodes privées dans les interfaces (Java 9+)
sidebar:
  order: 6
  label: 8.6 Méthodes privées dans les interfaces (Java 9+)
---

Java 9 a introduit les **méthodes privées** dans les interfaces. Elles peuvent être statiques ou non. Les méthodes privées aident à réduire la duplication de code entre les méthodes par défaut et statiques.

**Objectif** :

- Partager du code commun entre les méthodes par défaut.
- Partager du code commun entre les méthodes statiques.
- Cacher les détails d’implémentation des classes implémentantes.

**Syntaxe** :

```java
interface Calculatrice {
    default int additionner(int a, int b) {
        journaliser("Addition " + a + " + " + b);
        return a + b;
    }

    default int soustraire(int a, int b) {
        journaliser("Soustraction " + a + " - " + b);
        return a - b;
    }

    // méthode privée non statique
    private void journaliser(String message) {
        System.out.println("LOG : " + message);
    }

    // méthode privée statique
    private static void valider(int a, int b) {
        if (a < 0 || b < 0) {
            throw new IllegalArgumentException("Valeurs négatives non autorisées");
        }
    }
}
```

**Règles** :

- Les méthodes privées ne peuvent pas être accédées depuis l’extérieur de l’interface.
- Les méthodes privées non statiques peuvent être appelées depuis les méthodes par défaut et d’autres méthodes privées non statiques.
- Les méthodes privées statiques peuvent être appelées depuis les méthodes statiques et par défaut (mais pas l’inverse).
- Elles ne sont pas visibles par les classes implémentantes.

**Avantages** : Meilleure encapsulation et réutilisation du code au sein de l’interface.
