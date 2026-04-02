---
title: Boucle while
sidebar:
  order: 7
  label: 4.2.3 Boucle while
---

La boucle `while` répète un bloc de code tant que la condition est `true`. La condition est vérifiée **avant** chaque itération (pré‑test).

**Syntaxe** :

```java
while (condition) {
    // corps de la boucle
}
```

**Exemple** :

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

**Boucle infinie** :

```java
while (true) {
    // boucle infinie, utiliser break pour sortir
}
```

**Lecture d’entrée jusqu’à une sentinelle** :

```java
Scanner scanner = new Scanner(System.in);
int somme = 0;
int saisie;
while ((saisie = scanner.nextInt()) != -1) {
    somme += saisie;
}
System.out.println("Somme : " + somme);
```

**Important** : Assurez‑vous que la condition de la boucle devienne éventuellement `false` pour éviter les boucles infinies.
