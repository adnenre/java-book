---
title: Accès au niveau du paquetage
sidebar:
  order: 4
  label: 9.4 Accès au niveau du paquetage
---

Java fournit quatre niveaux d'accès. **Package‑private** (par défaut, sans modificateur) est le niveau utilisé lorsqu'aucun modificateur explicite n'est spécifié. Il permet l'accès uniquement au sein du même paquetage.

| Modificateur | Classe | Paquetage | Sous‑classe (autre paquetage) | Monde |
| ------------ | ------ | --------- | ----------------------------- | ----- |
| `private`    | ✅     | ❌        | ❌                            | ❌    |
| (par défaut) | ✅     | ✅        | ❌                            | ❌    |
| `protected`  | ✅     | ✅        | ✅                            | ❌    |
| `public`     | ✅     | ✅        | ✅                            | ✅    |

**Exemple package‑private** :

```java
// Fichier : com/exemple/util/Aide.java
package com.exemple.util;
class Aide {    // aucun modificateur = package‑private
    void assister() { }
}

// Fichier : com/exemple/main/Main.java
package com.exemple.main;
import com.exemple.util.Aide; // erreur : Aide inaccessible (paquetage différent)
```

**Accès depuis le même paquetage** :

```java
// Les deux dans com.exemple.util
class Aide { void assister() { } }
class Utilisateur {
    void utiliser() {
        Aide h = new Aide(); // OK
        h.assister();        // OK
    }
}
```

**Protected vs default** : `protected` permet l'accès dans les sous‑classes même dans des paquetages différents.

**Objectif** : Package‑private est idéal pour les détails d'implémentation qui doivent être visibles au sein du paquetage mais pas à l'extérieur.

**Le système de modules (Java 9+) ajoute une autre couche** : Par défaut, les types ne sont pas exportés à moins d'être explicitement exportés dans `module-info.java`.
