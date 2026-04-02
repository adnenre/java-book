---
title: Interfaces fonctionnelles et @FunctionalInterface
sidebar:
  order: 7
  label: 8.7 Interfaces fonctionnelles et @FunctionalInterface
---

Une **interface fonctionnelle** est une interface qui contient exactement une méthode abstraite. Elles sont le fondement des expressions lambda (introduites en Java 8).

**Exemples** :

```java
@FunctionalInterface
interface Runnable {
    void run();  // une méthode abstraite
}

@FunctionalInterface
interface Comparator<T> {
    int compare(T o1, T o2);
}
```

**L’annotation `@FunctionalInterface`** (optionnelle mais recommandée) garantit que l’interface reste fonctionnelle (erreur de compilation si une deuxième méthode abstraite est ajoutée).

**Les méthodes par défaut et statiques ne comptent pas** :

```java
@FunctionalInterface
interface MaFonction {
    int appliquer(int x);               // abstraite
    default void journaliser() { }      // par défaut – OK
    static void aider() { }             // statique – OK
}
```

**Utilisation avec les expressions lambda** :

```java
MaFonction carre = (x) -> x * x;
System.out.println(carre.appliquer(5)); // 25
```

**Interfaces fonctionnelles intégrées courantes (java.util.function)** :

| Interface           | Méthode abstraite   |
| ------------------- | ------------------- |
| `Predicate<T>`      | `boolean test(T t)` |
| `Function<T,R>`     | `R apply(T t)`      |
| `Consumer<T>`       | `void accept(T t)`  |
| `Supplier<T>`       | `T get()`           |
| `BiFunction<T,U,R>` | `R apply(T t, U u)` |

**Exemple** :

```java
Predicate<Integer> estPair = n -> n % 2 == 0;
System.out.println(estPair.test(4)); // true
```
