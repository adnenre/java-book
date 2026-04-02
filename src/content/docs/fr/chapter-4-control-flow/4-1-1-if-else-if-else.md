---
title: if, else if, else
sidebar:
  order: 1
  label: 4.1.1 if, else if, else
---

L’instruction `if` exécute un bloc de code seulement si une condition est `true`. Optionnellement, `else` et `else if` fournissent des chemins alternatifs.

**Syntaxe** :

```java
if (condition) {
    // s’exécute si la condition est vraie
} else if (autreCondition) {
    // s’exécute si la première est fausse et l’autre vraie
} else {
    // s’exécute si toutes les conditions précédentes sont fausses
}
```

**Exemples** :

```java
int score = 85;

if (score >= 90) {
    System.out.println("Note : A");
} else if (score >= 80) {
    System.out.println("Note : B");
} else if (score >= 70) {
    System.out.println("Note : C");
} else {
    System.out.println("Note : F");
}
```

**Sans accolades** (autorisé pour une seule instruction, mais déconseillé) :

```java
if (x > 0)
    System.out.println("Positif");
```

**Important** : Les conditions doivent être des expressions booléennes.

```java
int x = 5;
// if (x) { ... } // erreur : int ne peut pas être converti en boolean
if (x != 0) { ... } // correct
```
