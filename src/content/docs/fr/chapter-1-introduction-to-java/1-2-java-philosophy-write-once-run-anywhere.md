---
title: Philosophie de Java (Write once, run anywhere)
sidebar:
  order: 2
  label: 1.2 Philosophie de Java (Write once, run anywhere)
---

La philosophie centrale de Java est **“Write Once, Run Anywhere”** (WORA). Cela signifie qu’un programme Java compilé sur une plateforme peut s’exécuter sur n’importe quelle autre plateforme supportant Java, sans recompilation.

**Fonctionnement** :

1. Le **code source** (`.java`) est compilé en **bytecode** (fichiers `.class`).
2. Le bytecode est exécuté par la **Java Virtual Machine (JVM)**.
3. Il existe différentes implémentations de la JVM pour chaque système d’exploitation (Windows, macOS, Linux, etc.), mais toutes comprennent le même bytecode.

**Avantages** :

- **Portabilité** – les applications peuvent être développées sur un OS et déployées sur un autre.
- **Sécurité** – la JVM vérifie le bytecode avant exécution, empêchant les opérations dangereuses.
- **Orienté réseau** – le code peut être distribué facilement sur les réseaux (applets, applications web).

**Limitations** :

- La surcharge de la JVM peut affecter les performances, bien que la compilation Just‑In‑Time (JIT) atténue ce problème.
- Certaines bibliothèques natives spécifiques à la plateforme peuvent nécessiter des builds distincts.

Néanmoins, WORA reste le fondement du succès de Java, permettant tout, des serveurs d’entreprise aux applications Android (qui utilisent une JVM modifiée appelée Dalvik/ART).
