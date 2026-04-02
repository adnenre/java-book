---
title: Boucle do‑while
sidebar:
  order: 8
  label: 4.2.4 Boucle do‑while
---

La boucle `do‑while` exécute le bloc de code **une fois avant de vérifier la condition** (post‑test). La boucle continue tant que la condition est `true`.

**Syntaxe** :

```java
do {
    // corps de la boucle
} while (condition);
```

**Exemple** :

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

**Exécution garantie au moins une fois** :

```java
int x = 10;
do {
    System.out.println("Ceci s’exécute une fois même si la condition est fausse");
} while (x < 5);
```

**Cas d’utilisation** : Lorsque vous devez exécuter le corps de la boucle au moins une fois, par exemple afficher un menu et lire le choix utilisateur jusqu’à une option valide.

```java
int choix;
do {
    System.out.println("1. Option 1");
    System.out.println("2. Option 2");
    System.out.println("0. Quitter");
    choix = scanner.nextInt();
    // traiter le choix
} while (choix != 0);
```

**Remarque** : La condition `while` se termine par un point‑virgule.
