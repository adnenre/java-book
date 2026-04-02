---
title: Comprendre la plateforme Java (JVM, bytecode)
sidebar:
  order: 7
  label: 1.7 Comprendre la plateforme Java (JVM, bytecode)
---

# Comprendre la plateforme Java (JVM, bytecode)

La **plateforme Java** est un environnement purement logiciel qui exécute les applications Java. Elle se compose de deux parties principales :

## Java Virtual Machine (JVM)

La JVM est le cœur de la plateforme. C’est une machine informatique abstraite qui fournit :

- **Exécution du bytecode** – interprète et/ou compile le bytecode en code natif.
- **Gestion de la mémoire** – ramasse‑miettes automatique.
- **Sécurité** – vérification du bytecode, isolation.
- **Abstraction de la plateforme** – isole le programme du système d’exploitation sous‑jacent.

Il existe différentes JVM pour Windows, Linux, macOS, etc., mais elles comprennent toutes le même format de bytecode.

## Bytecode

Le code source Java est compilé en **bytecode** – un ensemble d’instructions conçues pour être exécutées par la JVM. Le bytecode est indépendant de la plateforme, ce qui permet “Write Once, Run Anywhere”.

### Comment un programme Java s’exécute :

1. **Compilation** : `javac` convertit `.java` → `.class` (bytecode).
2. **Chargement des classes** : le chargeur de classes de la JVM charge le fichier `.class` en mémoire.
3. **Vérification du bytecode** : le vérificateur contrôle l’absence d’opérations illégales.
4. **Exécution** : l’interpréteur exécute le bytecode. Pour le code fréquemment exécuté (“points chauds”), le compilateur **Just‑In‑Time (JIT)** compile le bytecode en code machine natif pour améliorer les performances.

### Exemple de bytecode

Soit ce code :

```java
public class Demo {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        System.out.println(a + b);
    }
}
```

Après compilation, vous pouvez visualiser le bytecode avec `javap -c Demo` :

```bash
0: iconst_5
1: istore_1
2: bipush 10
3: istore_2
4: getstatic #2  // Field java/lang/System.out
5: iload_1
6: iload_2
7: iadd
8: invokevirtual #3  // Method println(I)V
9: return
```

Cela montre les opérations de bas niveau effectuées par la JVM.

## Implémentations de la JVM

- **HotSpot** (par défaut chez Oracle)
- **OpenJ9** (JVM efficace d’Eclipse)
- **GraalVM** (JVM haute performance et polyglotte)

Toutes sont compatibles avec le standard du bytecode Java.
