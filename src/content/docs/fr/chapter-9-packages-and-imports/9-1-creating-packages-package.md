---
title: Création de paquetages (package)
sidebar:
  order: 1
  label: 9.1 Création de paquetages (package)
---

Les paquetages et les modules sont les mécanismes de Java pour organiser le code, gérer les espaces de noms et contrôler la visibilité.

**Les paquetages** regroupent des classes et interfaces liées, évitent les conflits de noms et fournissent une protection d'accès.

**Les modules** (introduits en Java 9) ajoutent une couche d'encapsulation supplémentaire au‑dessus des paquetages, permettant des dépendances explicites et une encapsulation forte.

Un **paquetage** est un espace de noms qui regroupe des classes et interfaces liées. L'instruction `package` doit être la première ligne d'un fichier source (sauf commentaires).

**Syntaxe** :

```java
package com.exemple.monapp;

public class MaClasse {
// ...
}
```

**Conventions de nommage** :

- Utilisez un nom de domaine inversé (ex. `com.societe.projet`).
- Toutes les lettres minuscules.
- Les underscores sont autorisés mais peu courants.

**Structure de répertoires** doit correspondre à la hiérarchie du paquetage :

```bash
src/
└── com/
    └── example/
        └── myapp/
            └── MyClass.java
```

**Compilation** :

```bash
javac -d . src/com/exemple/monapp/MaClasse.java
```

L'option `-d .` crée des répertoires correspondant à la structure du paquetage.

**Exécution** :

```bash
java com.exemple.monapp.MaClasse
```

**Paquetage par défaut** (pas d'instruction `package`) – déconseillé sauf pour des petits exemples. Les classes du paquetage par défaut ne peuvent pas être importées.

**Avantages** :

- Évite les conflits de noms.
- Contrôle l'accès (package‑private).
- Organise les grandes bases de code.
