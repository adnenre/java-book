---
title: Membres statiques (champs statiques, méthodes statiques, blocs statiques)
sidebar:
  order: 12
  label: 5.8 Membres statiques
---

Les membres `static` appartiennent à la classe elle‑même, pas aux instances individuelles. Ils sont partagés entre tous les objets de la classe.

## Champs statiques

Une seule copie partagée par toutes les instances.

```java
class Compteur {
    static int compteur = 0;
    Compteur() {
        compteur++;
    }
}
Compteur c1 = new Compteur(); // compteur = 1
Compteur c2 = new Compteur(); // compteur = 2
System.out.println(Compteur.compteur); // Accès via le nom de la classe
```

## Méthodes statiques

Peuvent être appelées sans instance. Elles ne peuvent accéder directement qu’aux membres statiques.

```java
class UtilitairesMath {
    static int additionner(int a, int b) {
        return a + b;
    }
}
int somme = UtilitairesMath.additionner(5, 3);
```

## Blocs statiques

Exécutés lors du premier chargement de la classe. Utilisés pour l’initialisation statique.

```java
class BaseDonnees {
    static String url;
    static {
        url = "jdbc:mysql://localhost:3306/bd";
        System.out.println("Bloc statique exécuté");
    }
}
```

**Ordre d’exécution** : Les blocs statiques s’exécutent dans l’ordre d’apparition, avant tout constructeur ou appel de méthode statique.

**Utilisations courantes** :

- Constantes : `public static final double PI = 3.14159;`
- Méthodes fabriques : `public static Voiture creerParDefaut() { ... }`
- Classes utilitaires (ex. `Math`, `Collections`)
