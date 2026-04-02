---
title: Portée et durée de vie des variables
sidebar:
  order: 9
  label: 2.5 Portée et durée de vie des variables
---

# Portée et durée de vie des variables

**Portée** définit où une variable peut être accédée. **Durée de vie** est la durée pendant laquelle la variable existe en mémoire.

## Types de portée

1. **Portée de bloc** – les variables déclarées à l’intérieur d’un bloc `{}` ne sont visibles que dans ce bloc.

```java
{
    int x = 10;   // portée commence ici
    // x est accessible
}
// x n’est pas accessible ici
```

2. **Portée de méthode** – les paramètres et variables locales déclarés dans une méthode ne sont visibles que dans cette méthode.

```java
public void maMethode(int param) {   // la portée de param est toute la méthode
    int local = 5;                  // la portée de local est la méthode
    // les deux sont accessibles ici
}
```

3. **Portée de classe** – les variables d’instance (non statiques) sont accessibles dans toute la classe (sous réserve des modificateurs d’accès).

4. **Portée statique** – les variables statiques appartiennent à la classe et sont accessibles partout où la classe l’est.

**Exemple de portée de bloc** :

```java
public void demo() {
    int a = 1;
    if (a > 0) {
        int b = 2;        // la portée de b est uniquement le bloc if
        System.out.println(a + b);
    }
    // System.out.println(b); // erreur : b n’est pas dans la portée
}
```

**Masquage (shadowing)** : Une variable dans une portée interne peut masquer une variable dans une portée externe.

```java
int x = 5;
{
    int x = 10;   // masque le x externe
    System.out.println(x); // affiche 10
}
System.out.println(x); // affiche 5
```

## Durée de vie

- **Variables locales** – créées quand l’exécution entre dans leur bloc, détruites quand le bloc se termine.
- **Variables d’instance** – créées quand un objet est instancié, détruites quand l’objet est collecté par le garbage collector.
- **Variables statiques** – créées quand la classe est chargée, détruites quand la classe est déchargée (généralement à la fin du programme).

**Exemple** :

```java
public class DemoDureeVie {
    static int statique = 1;    // vit pendant tout le programme
    int instance = 2;           // vit par objet

    public void methode() {
        int local = 3;          // vit seulement pendant l’appel de la méthode
        // ...
    }
}
```
