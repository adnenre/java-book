---
title: module‑info.java
sidebar:
  order: 7
  label: 9.6.1 module‑info.java
---

`module-info.java` est le fichier descripteur de module placé à la racine du répertoire source d'un module. Il définit le nom du module, ses dépendances et ses paquetages exportés.

**Structure de base** :

```java
module nom.du.module {
    // directives
}
```

**Directives courantes** :

| Directive             | Description                                                          | Exemple                                                               |
| --------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `requires`            | Déclare une dépendance vers un autre module                          | `requires java.base;` (java.base est implicite)                       |
| `requires transitive` | Dépendance également lisible par les modules qui requièrent celui‑ci | `requires transitive java.sql;`                                       |
| `exports`             | Rend un paquetage accessible à tous les autres modules               | `exports com.exemple.api;`                                            |
| `exports ... to`      | Exporte un paquetage uniquement à certains modules                   | `exports com.exemple.interne to com.exemple.test;`                    |
| `opens`               | Permet la réflexion profonde sur un paquetage (utilisé par Spring)   | `opens com.exemple.entites;`                                          |
| `uses`                | Déclare un service que ce module consomme                            | `uses com.exemple.spi.Service;`                                       |
| `provides ... with`   | Enregistre une implémentation de service                             | `provides com.exemple.spi.Service with com.exemple.impl.ServiceImpl;` |

**Exemple** :

```java
module com.exemple.monapp {
    requires java.sql;
    requires transitive java.logging;
    exports com.exemple.monapp.api;
    exports com.exemple.monapp.modele;
    opens com.exemple.monapp.interne to com.exemple.test;
    uses com.exemple.spi.Plugin;
    provides com.exemple.spi.Plugin with com.exemple.plugins.MonPlugin;
}
```

**java.base** est implicitement requis – pas besoin de le déclarer.

**Emplacement du fichier** :

```bash
src/
└── com.example.myapp/
    ├── module-info.java
    └── com/
        └── example/
            └── myapp/
                ├── api/
                └── internal/

```

**Compilation** :

```bash
javac -d mods/com.exemple.monapp src/com.exemple.monapp/module-info.java src/com.exemple.monapp/...
```
