---
title: Ramasse‑miettes (garbage collection) et méthode finalize()
sidebar:
  order: 14
  label: 5.10 Ramasse‑miettes et méthode finalize()
---

Le **ramasse‑miettes (GC)** libère automatiquement la mémoire occupée par les objets qui ne sont plus accessibles. Le programmeur n’a pas besoin de libérer la mémoire manuellement.

**Quand un objet devient‑il éligible au GC ?**

- Quand il n’y a plus de référence vers lui.
- Quand la référence sort de la portée.
- Quand la référence est réaffectée.

```java
Personne p = new Personne();
p = null;  // objet éligible au GC
```

## Demander le ramasse‑miettes

Vous pouvez suggérer le GC avec `System.gc()` ou `Runtime.getRuntime().gc()`, mais la JVM peut ignorer la demande.

## Méthode finalize() (obsolète)

La méthode `finalize()` était appelée par le GC avant la destruction d’un objet. Elle a été **dépréciée** depuis Java 9 et supprimée/désactivée dans les versions ultérieures car elle est imprévisible et cause des problèmes de performance.

```java
// Obsolète – ne pas utiliser
@Override
protected void finalize() throws Throwable {
    // code de nettoyage (non fiable)
}
```

## Alternatives modernes

Utilisez `try‑with‑resources`, `Cleaner` ou des méthodes de nettoyage explicites.

```java
try (FileInputStream fis = new FileInputStream("fichier.txt")) {
    // nettoyage automatique des ressources
}
```

**Bonnes pratiques** :

- Ne comptez pas sur `finalize()`.
- Fermez les ressources explicitement.
- Mettez les références à null uniquement si nécessaire (ex. grands objets).
- Utilisez des références faibles pour les caches (`WeakHashMap`).
