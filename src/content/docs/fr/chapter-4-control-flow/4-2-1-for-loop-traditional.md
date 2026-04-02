---
title: Boucle for (traditionnelle)
sidebar:
  order: 5
  label: 4.2.1 Boucle for (traditionnelle)
---

La boucle `for` traditionnelle répète un bloc de code un nombre spécifié de fois. Elle se compose de trois parties : initialisation, condition et mise à jour.

**Syntaxe** :

```java
for (initialisation; condition; miseAJour) {
    // corps de la boucle
}
```

**Exemple** : afficher les nombres de 0 à 4

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

**Variables multiples** :

```java
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println(i + " " + j);
}
```

**Boucle infinie** :

```java
for (;;) {
    // boucle infinie, utiliser break pour sortir
}
```

**Omission de parties** :

```java
int i = 0;
for (; i < 5; ) {
    System.out.println(i);
    i++;
}
```

**Portée** : les variables déclarées dans l’initialisation sont locales à la boucle.

```java
for (int i = 0; i < 5; i++) { }
// System.out.println(i); // erreur : i n’est pas dans la portée
```
