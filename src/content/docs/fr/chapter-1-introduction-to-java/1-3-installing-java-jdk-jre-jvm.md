---
title: Installation de Java (JDK, JRE, JVM)
sidebar:
  order: 3
  label: 1.3 Installation de Java (JDK, JRE, JVM)
---

# Installation de Java (JDK, JRE, JVM)

Avant de pouvoir développer et exécuter des applications Java, vous devez installer l’environnement Java approprié.

## JVM – Java Virtual Machine

La **JVM** est le moteur qui exécute le bytecode Java. Elle est spécifique à la plateforme et fournit l’environnement d’exécution.

## JRE – Java Runtime Environment

Le **JRE** inclut la JVM ainsi que les bibliothèques de base et les autres composants nécessaires pour exécuter des programmes Java existants. Il ne contient **pas** les outils de développement comme le compilateur.

## JDK – Java Development Kit

Le **JDK** contient le JRE plus les outils de développement, tels que :

- `javac` – le compilateur Java (source → bytecode)
- `jar` – l’archiveur
- `javadoc` – le générateur de documentation
- `jdb` – le débogueur

### Comment installer

1. **Choisissez une distribution JDK** – Oracle JDK, OpenJDK, Adoptium, Amazon Corretto, etc.
2. **Téléchargez** l’installateur pour votre système d’exploitation depuis le site officiel (par ex. [adoptium.net](https://adoptium.net/)).
3. **Exécutez l’installateur** et suivez les instructions.
4. **Définissez les variables d’environnement** (optionnel mais recommandé) :
   - `JAVA_HOME` – chemin vers le répertoire d’installation du JDK.
   - Ajoutez `%JAVA_HOME%\bin` (Windows) ou `$JAVA_HOME/bin` (macOS/Linux) à votre `PATH`.

### Vérifier l’installation

Ouvrez un terminal/invite de commandes et exécutez :

```bash
java -version
javac -version
```

Vous devriez voir les informations de version confirmant que java (le lanceur) et javac (le compilateur) sont disponibles.
