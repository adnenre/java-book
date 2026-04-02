---
title: Dépendances et exports des modules
sidebar:
  order: 8
  label: 9.6.2 Dépendances et exports des modules
---

Les modules déclarent explicitement leurs dépendances avec `requires` et contrôlent la visibilité avec `exports`. Cela garantit une configuration fiable et une encapsulation forte.

## Directive requires

Déclare qu'un module dépend d'un autre module.

```java
module com.exemple.app {
    requires com.exemple.lib;          // dépendance basique
    requires transitive com.exemple.utils; // dépendance transitive
}
```

**Dépendances transitives** : Si le module A `requires transitive` B, alors tout module qui requiert A lit automatiquement B.

## Directive exports

Rend les paquetages accessibles aux autres modules. Par défaut, aucun paquetage n'est exporté.

```java
module com.exemple.lib {
    exports com.exemple.lib.api;           // accessible à tous les modules
    exports com.exemple.lib.interne to com.exemple.app; // uniquement à un module spécifique
}
```

## Résolution des modules

Au démarrage, le système de modules vérifie :

- Tous les modules requis sont présents.
- Pas de cycles (sauf avec `requires static` pour les dépendances optionnelles).
- Pas de paquetages partagés (split packages).

## Exemple avec deux modules

**Module bibliothèque (`com.exemple.lib`)** :

```java
// com.exemple.lib/module-info.java
module com.exemple.lib {
    exports com.exemple.lib.api;
}

// com.exemple.lib/com/exemple/lib/api/Calculatrice.java
package com.exemple.lib.api;
public class Calculatrice {
    public int ajouter(int a, int b) { return a + b; }
}
```

**Module application (`com.exemple.app`)** :

```java
// com.exemple.app/module-info.java
module com.exemple.app {
    requires com.exemple.lib;
}

// com.exemple.app/com/exemple/app/Main.java
package com.exemple.app;
import com.exemple.lib.api.Calculatrice;
public class Main {
    public static void main(String[] args) {
        Calculatrice calc = new Calculatrice();
        System.out.println(calc.ajouter(5, 3));
    }
}
```

**Compilation et exécution** :

```bash
javac -d mods/com.exemple.lib src/com.exemple.lib/module-info.java src/com.exemple.lib/...
javac --module-path mods -d mods/com.exemple.app src/com.exemple.app/module-info.java src/com.exemple.app/...
java --module-path mods -m com.exemple.app/com.exemple.app.Main
```

## Chargement de services (uses/provides)

Alternative aux exports explicites pour les architectures de plugins.

```java
module com.exemple.spi {
    exports com.exemple.spi;
}
module com.exemple.impl {
    requires com.exemple.spi;
    provides com.exemple.spi.Service with com.exemple.impl.ServiceImpl;
}
module com.exemple.client {
    requires com.exemple.spi;
    uses com.exemple.spi.Service;
}
```
