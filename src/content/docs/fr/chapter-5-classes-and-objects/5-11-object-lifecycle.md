---
title: Cycle de vie d’un objet
sidebar:
  order: 15
  label: 5.11 Cycle de vie d’un objet
---

Un objet passe par plusieurs étapes, de la création à la destruction.

**1. Déclaration** – une variable de référence est créée sur la pile (pas encore d’objet).

```java
Personne p;  // variable de référence, null
```

**2. Instanciation** – la mémoire est allouée dans le tas (heap) avec `new`.

```java
p = new Personne();  // objet créé
```

**3. Initialisation** – le constructeur s’exécute, les champs sont initialisés.

**4. Utilisation** – l’objet est utilisé via sa référence.

```java
p.setNom("Alice");
String nom = p.getNom();
```

**5. Devenir inaccessible** – quand aucune référence ne pointe vers l’objet.

```java
p = null;        // l’objet devient inaccessible
// ou la méthode se termine, la référence locale sort de la portée
```

**6. Ramasse‑miettes** – la JVM libère la mémoire automatiquement (temps non déterministe).

**7. Finalisation (obsolète)** – historiquement, `finalize()` était appelé avant la collecte. Maintenant déconseillé.

**8. Récupération de mémoire** – la mémoire est retournée au tas pour réutilisation.

## Schéma
