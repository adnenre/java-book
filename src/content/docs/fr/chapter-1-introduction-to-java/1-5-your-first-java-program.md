---
title: Votre premier programme Java
sidebar:
  order: 5
  label: 1.5 Votre premier programme Java
---

# Votre premier programme Java

Créons le classique programme “Hello, World!”.

## Étape 1 : Créer un fichier

Créez un fichier nommé `HelloWorld.java` avec le contenu suivant :

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Explication** :

- `public class HelloWorld` – déclare une classe nommée `HelloWorld`. Le nom du fichier doit correspondre au nom de la classe (respect de la casse).
- `public static void main(String[] args)` – le point d’entrée de toute application Java. La JVM appelle cette méthode au démarrage du programme.
- `System.out.println(...)` – affiche l’argument sur la sortie standard (console).

## Étape 2 : Compiler

Ouvrez un terminal dans le même dossier et exécutez :

```bash
javac HelloWorld.java
```

Cela produit `HelloWorld.class` – le fichier bytecode.

## Étape 3 : Exécuter

Exécutez le bytecode avec le lanceur `java` :

```bash
java HelloWorld
```

**Sortie** :

```bash
Hello, World!
```

Remarque : vous n’incluez **pas** l’extension `.class` lors de l’exécution.

## Étape 4 : Expérimenter

Essayez de modifier le message, d’ajouter plusieurs instructions d’affichage ou même d’utiliser des variables.
