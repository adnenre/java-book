---
title: Compilation et exécution de programmes Java (javac, java)
sidebar:
  order: 6
  label: 1.6 Compilation et exécution de programmes Java (javac, java)
---

# Compilation et exécution de programmes Java

Java utilise un processus en deux étapes : compilation en bytecode, puis exécution par interprétation/compilation JIT.

## Le compilateur : `javac`

Le **compilateur Java** (`javac`) traduit les fichiers sources `.java` en fichiers bytecode `.class`.

Utilisation de base :

```bash
javac MonProgramme.java
```

Si le programme comporte plusieurs classes, vous pouvez toutes les compiler :

```bash
javac *.java
```

Options courantes :

- `-d <répertoire>` – spécifie où placer les fichiers `.class` générés.
- `-classpath` / `-cp` – spécifie où trouver les bibliothèques requises.

## Le lanceur : `java`

Le **lanceur Java** (`java`) démarre la JVM et exécute le bytecode.

Utilisation de base :

```bash
java MonProgramme
```

Vous passez le **nom de la classe** (sans `.class`). La JVM cherche une méthode `public static void main(String[] args)` dans cette classe.

Pour exécuter un programme qui réside dans un package :

```bash
java com.exemple.MonProgramme
```

Vous pouvez passer des arguments en ligne de commande :

```bash
java MonProgramme arg1 arg2
```

Dans le programme, `args` contient `["arg1", "arg2"]`.

## Classpath

Le classpath indique à `javac` et `java` où trouver les classes définies par l’utilisateur et les bibliothèques. Il peut être défini via l’option `-cp` ou la variable d’environnement `CLASSPATH`.

Exemple :

```bash
javac -cp .:lib/* MonProgramme.java
java -cp .:lib/* MonProgramme
```

## Fichiers JAR

Les fichiers JAR (Java Archive) regroupent plusieurs classes et ressources. Vous pouvez exécuter un JAR exécutable avec :

```bash
java -jar monapp.jar
```

Cela nécessite que le manifeste du JAR spécifie la classe principale.
