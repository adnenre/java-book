---
title: Variables et identifiants
sidebar:
  order: 1
  label: 2.1 Variables et identifiants
---

## Variables

Une **variable** est un emplacement mémoire nommé qui contient une valeur. En Java, chaque variable a un **type** qui détermine le type de données qu’elle peut stocker.

**Syntaxe de déclaration** :

```java
type identifiant [ = valeur ];
```

Exemple :

```java
int age;
double salaire = 45000.50;
char note = 'A';
boolean actif = true;
```

## Identifiants

Les **identifiants** sont les noms donnés aux variables, méthodes, classes, packages, etc. Java impose des règles strictes pour les identifiants :

- Peuvent contenir des lettres, chiffres, underscores (`_`) et signes dollar (`$`).
- Ne doivent **pas** commencer par un chiffre.
- Sensibles à la casse (`age` et `Age` sont différents).
- Ne peuvent pas être un mot‑clé réservé (comme `int`, `class`, `public`).

**Identifiants valides** :

```java
int score;
double _prix;
String $nom;
int compteur1;
```

**Identifiants invalides** :

```java
int 1erePlace; // commence par un chiffre
double class; // 'class' est un mot‑clé
String mon-nom; // trait d'union non autorisé
```

**Conventions de nommage** (recommandées) :

- Variables et méthodes : `camelCase` (ex. `nomEtudiant`, `calculerTotal()`)
- Classes : `PascalCase` (ex. `Etudiant`, `CompteBancaire`)
- Constantes : `UPPER_SNAKE_CASE` (ex. `VALEUR_MAX`, `PI`)
