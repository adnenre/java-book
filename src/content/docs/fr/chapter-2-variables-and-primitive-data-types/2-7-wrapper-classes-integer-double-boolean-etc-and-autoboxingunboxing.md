---
title: Classes wrapper (Integer, Double, Boolean, etc.) et autoboxing/unboxing
sidebar:
  order: 11
  label: 2.7 Classes wrapper et autoboxing/unboxing
---

# Classes wrapper et autoboxing/unboxing

Java fournit des **classes wrapper** pour chaque type primitif, permettant de traiter les primitifs comme des objets.

| Primitif  | Classe wrapper |
| --------- | -------------- |
| `byte`    | `Byte`         |
| `short`   | `Short`        |
| `int`     | `Integer`      |
| `long`    | `Long`         |
| `float`   | `Float`        |
| `double`  | `Double`       |
| `char`    | `Character`    |
| `boolean` | `Boolean`      |

## Pourquoi des wrappers ?

- **Les collections** (comme `ArrayList`) ne peuvent stocker que des objets, pas des primitifs.
- **Méthodes** qui nécessitent des objets (ex. réflexion, génériques).
- **Méthodes utilitaires** : parsing, conversion, etc.

## Autoboxing

Conversion automatique d’un primitif vers son wrapper.

```java
Integer i = 10;            // autoboxing: int → Integer
Double d = 3.14;           // autoboxing: double → Double
```

## Unboxing

Conversion automatique d’un wrapper vers son primitif.

```java
int num = i;               // unboxing: Integer → int
double pi = d;             // unboxing: Double → double
```

## Exemple avec collections

```java
List<Integer> nombres = new ArrayList<>();
nombres.add(5);            // autoboxing int → Integer
int premier = nombres.get(0); // unboxing Integer → int
```

## Mise en cache (caching)

Les wrappers mettent en cache les valeurs fréquemment utilisées pour les performances :

- `Integer` met en cache les valeurs de -128 à 127 par défaut (extensible via propriété système).
- Mise en cache similaire pour `Byte`, `Short`, `Long`, `Character` (0–127).

```java
Integer a = 100;
Integer b = 100;
System.out.println(a == b); // true (tous deux du cache)

Integer c = 200;
Integer d = 200;
System.out.println(c == d); // false (objets différents)
```

## Comparaison

Utilisez `.equals()` pour comparer les valeurs, pas `==` (qui compare les références).

```java
Integer x = 1000;
Integer y = 1000;
System.out.println(x.equals(y)); // true
System.out.println(x == y);       // false
```

## Considérations de performance

L’autoboxing/unboxing peut créer des objets supplémentaires, soyez vigilant dans les boucles critiques.

```java
Integer somme = 0;
for (int i = 0; i < 1000; i++) {
    somme += i;   // crée de nombreux objets Integer
}
```

Préférez les primitifs pour les calculs.
