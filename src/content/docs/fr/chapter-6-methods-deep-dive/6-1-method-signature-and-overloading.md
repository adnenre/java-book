---
title: Signature de méthode et surcharge
sidebar:
  order: 1
  label: 6.1 Signature de méthode et surcharge
---

## Signature de méthode

Une signature de méthode se compose de :

- Nom de la méthode
- Types et ordre des paramètres (nombre, types, séquence)

**Elle n’inclut PAS** :

- Le type de retour
- Les modificateurs d’accès
- Les exceptions levées

```java
public int calculerSomme(int a, double b) throws Exception { ... }
// Signature : calculerSomme(int, double)
```

## Surcharge de méthode

Définir plusieurs méthodes avec le **même nom** mais des **listes de paramètres différentes** (signatures différentes). Le seul type de retour ne suffit pas pour surcharger.

**Surcharge valide** :

```java
class Calculatrice {
    int ajouter(int a, int b) { return a + b; }
    int ajouter(int a, int b, int c) { return a + b + c; }
    double ajouter(double a, double b) { return a + b; }
}
```

**Surcharge invalide** (seul le type de retour diffère) :

```java
int traiter(int x) { ... }
double traiter(int x) { ... } // erreur de compilation
```

**Surcharge avec varargs** :

```java
void afficher(String s) { ... }
void afficher(String... args) { ... } // valide mais parfois ambigu
```

**Surcharge et promotion de type** : Java choisit la méthode la plus spécifique.

```java
void imprimer(int i) { System.out.println("int"); }
void imprimer(double d) { System.out.println("double"); }
imprimer(5);      // appelle la version int
imprimer(5.0);    // appelle la version double
```
