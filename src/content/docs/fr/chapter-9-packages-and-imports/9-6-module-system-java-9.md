---
title: Système de modules (Java 9+)
sidebar:
  order: 6
  label: 9.6 Système de modules (Java 9+)
---

Le **Java Platform Module System (JPMS)** a été introduit en Java 9 (Projet Jigsaw). Il ajoute une modularité à un niveau supérieur aux paquetages.

**Concepts clés** :

- Un **module** est une collection nommée et auto‑descriptive de code et de données.
- Chaque module a un **descripteur de module** (`module-info.java`).
- Les modules déclarent explicitement quels paquetages ils **exportent** et quels modules ils **requièrent**.

**Avantages** :

- Encapsulation forte (les paquetages internes ne sont pas accessibles par défaut).
- Configuration fiable (pas de dépendances manquantes au démarrage).
- Évolutivité (peut créer des images d'exécution personnalisées avec `jlink`).

**Exemple de déclaration de module** (`module-info.java`) :

```java
module com.exemple.monapp {
    requires java.sql;
    requires transitive java.logging;
    exports com.exemple.monapp.api;
    exports com.exemple.monapp.util to com.exemple.test;
    uses com.exemple.spi.Service;
    provides com.exemple.spi.Service with com.exemple.impl.ServiceImpl;
}
```

**Compilation des modules** :

```bash
javac -d mods/com.exemple.monapp src/com.exemple.monapp/module-info.java src/com.exemple.monapp/...
```

**Exécution d'un module** :

```bash
java --module-path mods -m com.exemple.monapp/com.exemple.monapp.Main
```

**Module path vs classpath** : Les modules vont sur le module path ; les JAR traditionnels peuvent toujours être sur le classpath (modules automatiques).

**Directives courantes** :

- `requires` – dépendance de module.
- `requires transitive` – lisibilité implicite.
- `exports` – rend un paquetage accessible à d'autres modules.
- `opens` – ouvre un paquetage pour la réflexion profonde.
- `uses` / `provides` – chargement de services.
