---
---

title: Conversion de type et casting
sidebar:
order: 8
label: 2.4 Conversion de type et casting

---

## Conversion de type

Convertir une valeur d’un type de données à un autre.

- **Implicite (élargissement)** : automatique, sans perte de données (petit type → grand type)
- **Explicite (rétrécissement)** : manuel, peut entraîner une perte d’information

## Conversion implicite (élargissement)

Java convertit automatiquement les types plus petits vers les types plus grands lorsqu’il n’y a pas de perte possible.

**Conversions d’élargissement primitives** :

`byte` → `short` → `int` → `long` → `float` → `double`

`char` → `int` → `long` → `float` → `double`

**Exemples** :

```java
int valeurInt = 100;
long valeurLong = valeurInt;      // automatique
float valeurFloat = valeurLong;   // automatique
double valeurDouble = valeurFloat;
```

**Contexte d’affectation** :

```java
byte b = 10;
int i = b;   // OK
```

**Promotion arithmétique** :

```java
byte a = 5, b = 6;
int resultat = a + b;   // résultat est int
```

Dans les expressions, `byte`, `short`, `char` sont promus en `int` avant l’arithmétique.

## Casting explicite (rétrécissement)

Lors de la conversion d’un type plus grand vers un type plus petit, vous devez utiliser un **opérateur de cast** `(type)`. Des informations peuvent être perdues (dépassement, perte de précision).

```java
double d = 9.78;
int i = (int) d;      // i = 9 (partie fractionnaire tronquée)
```

**Problèmes potentiels** :

- **Dépassement** : lorsque la valeur dépasse la plage cible
- **Perte de précision** : pour les flottants vers entiers
- **Extension du signe** : pour les types signés

```java
long grand = 300;
byte b = (byte) grand;   // b = 44 (dépassement : 300 % 256 = 44)
```

**Casting entre types compatibles** :

```java
int intVal = 65;
char ch = (char) intVal;    // ch = 'A'
```

**Casting avec expressions** :

```java
float f = 3.14f;
int i = (int) (f * 2);       // parenthèses nécessaires
```
