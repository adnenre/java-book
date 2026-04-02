---
title: Casting explicite (rétrécissement)
sidebar:
  order: 9
  label: 2.4.2 Casting explicite (rétrécissement)
---

# Casting explicite (rétrécissement)

Le **casting explicite**, également appelé **conversion par rétrécissement**, est nécessaire lors de l’affectation d’une valeur d’un type plus grand à une variable d’un type plus petit. Cela peut entraîner une perte de données (dépassement, sous‑dépassement ou perte de précision). L’opérateur de cast `(type)` indique au compilateur que vous êtes conscient de la perte potentielle.

## Syntaxe

```java
typeCible nomVariable = (typeCible) expression;
```

## Exemples

**Troncature** (flottant vers entier) :

```java
double pi = 3.14159;
int intPi = (int) pi;   // intPi = 3 (partie fractionnaire supprimée)
```

**Dépassement** (valeur hors plage) :

```java
long grand = 300;
byte petit = (byte) grand;   // petit = 44 (300 % 256 = 44)
```

**Extension du signe** : Lors de la conversion d’un type signé, le bit de signe est préservé, ce qui peut produire des valeurs inattendues.

```java
byte b = -50;
int i = (int) b;    // i = -50 (pas de perte, élargissement)
// Rétrécissement en arrière :
byte b2 = (byte) i; // toujours -50
```

**char vers entier et retour** :

```java
int code = 65;
char ch = (char) code;   // ch = 'A'
```

## Casting dans les expressions

Lors du cast du résultat d’une expression, placez l’expression entre parenthèses :

```java
double a = 9.7, b = 2.3;
int resultat = (int) (a + b);   // resultat = 12 (a+b = 12,0 → tronqué)
```

## Problèmes potentiels

1. **Perte de précision** – convertir `double` en `float` ou `int` perd la partie fractionnaire.
2. **Dépassement** – la valeur peut boucler (ex. 300 → 44 lors du cast en `byte`).
3. **Valeurs inattendues** – l’extension du signe peut transformer des grandes valeurs positives en négatives.

## Quand utiliser le casting explicite

- Lorsque vous souhaitez intentionnellement tronquer un nombre flottant.
- Lorsque vous interagissez avec des API nécessitant un type plus petit et que vous savez que la valeur tient.
- Lors d’opérations de manipulation de bits ou de bas niveau.

## Vérification par le compilateur

Le compilateur empêche les affectations implicites par rétrécissement pour éviter les pertes accidentelles. Vous devez utiliser un cast pour passer outre.

```java
int i = 100;
byte b = i;        // erreur de compilation
byte b2 = (byte) i; // OK (mais peut perdre des données)
```
