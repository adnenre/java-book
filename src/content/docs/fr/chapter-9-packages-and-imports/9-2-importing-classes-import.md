---
title: Importation de classes (import)
sidebar:
  order: 2
  label: 9.2 Importation de classes (import)
---

L'instruction `import` permet d'utiliser des classes d'autres paquetages sans les qualifier complètement. Elle vient après l'instruction `package` mais avant la définition de la classe.

**Syntaxe** :

```java
import nomPaquetage.NomClasse;
import nomPaquetage.*;   // importe toutes les classes du paquetage
```

**Exemples** :

```java
package com.exemple.app;

import java.util.ArrayList;
import java.util.List;
import java.util.*;      // importe toutes les classes de java.util

public class MonApp {
    List<String> liste = new ArrayList<>(); // pas besoin de java.util.ArrayList
}
```

**Nom pleinement qualifié** (sans import) :

```java
java.util.ArrayList<String> liste = new java.util.ArrayList<>();
```

**Imports ambigus** :

```java
import java.util.Date;
import java.sql.Date;   // erreur : les deux sont importés – utiliser le nom pleinement qualifié
```

**Les imports statiques** (couverts en 9.3) permettent d'importer des membres statiques.

**L'import n'affecte pas les performances** – c'est seulement une commodité à la compilation.
