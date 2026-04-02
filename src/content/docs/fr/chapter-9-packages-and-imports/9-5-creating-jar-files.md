---
title: Création de fichiers jar
sidebar:
  order: 5
  label: 9.5 Création de fichiers jar
---

Un fichier **JAR (Java Archive)** regroupe des classes Java compilées, des métadonnées et des ressources dans un seul fichier. Il utilise le format ZIP.

**Commandes de base** :

**Créer un JAR** :

```bash
jar cf monapp.jar -C bin/ .
```

- `c` – créer une archive
- `f` – spécifier le nom du fichier
- `-C` – changer de répertoire avant d'ajouter des fichiers

**Afficher le contenu** :

```bash
jar tf monapp.jar
```

- `t` – table des matières

**Extraire** :

```bash
jar xf monapp.jar
```

- `x` – extraire

**Créer un JAR exécutable** (avec une classe principale) :

1. Créez un fichier manifeste `manifest.txt` :

```
Main-Class: com.exemple.Main
```

2. Construisez le JAR avec le manifeste :

```bash
jar cfm monapp.jar manifest.txt -C bin/ .
```

- `m` – inclure les informations du manifeste

**Exécuter un JAR exécutable** :

```bash
java -jar monapp.jar
```

**Utiliser `jar` avec `--main-class` (Java 9+)** :

```bash
jar --create --file monapp.jar --main-class com.exemple.Main -C bin/ .
```

**Options courantes** :

| Option   | Description                                               |
| -------- | --------------------------------------------------------- |
| `-v`     | sortie verbeuse                                           |
| `-C dir` | changer de répertoire                                     |
| `-e`     | spécifier la classe principale (alternative au manifeste) |

**Maven/Gradle** gèrent généralement la création de JAR automatiquement.
