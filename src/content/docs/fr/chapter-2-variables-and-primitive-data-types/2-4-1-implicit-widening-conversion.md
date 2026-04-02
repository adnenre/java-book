---
title: Conversion implicite (élargissement)
sidebar:
  order: 8
  label: 2.4.1 Conversion implicite (élargissement)
---

La **conversion implicite**, également appelée **conversion par élargissement**, se produit automatiquement lorsqu’une valeur d’un type de données plus petit est assignée à une variable d’un type plus grand. Aucune perte de données n’est possible car le type cible peut contenir toutes les valeurs du type source.

## Conversions d’élargissement primitives

Les conversions suivantes sont effectuées automatiquement :

`byte` → `short` → `int` → `long` → `float` → `double`

`char` → `int` → `long` → `float` → `double`

**Exemples** :

--codejava
byte b = 10;
short s = b; // byte → short
int i = s; // short → int
long l = i; // int → long
float f = l; // long → float
double d = f; // float → double
--code

**char vers int** :

--codejava
char ch = 'A';
int code = ch; // char → int (65)
--code

## Contexte d’affectation

Lors d’une affectation, la conversion d’élargissement est automatique.

--codejava
int intVal = 100;
long longVal = intVal; // OK
double doubleVal = intVal; // OK
--code

## Promotion arithmétique

Dans les expressions, les opérandes sont promus vers un type commun avant l’opération :

- Si l’un des opérandes est `double`, l’autre est promu en `double`.
- Sinon, si l’un est `float`, promu en `float`.
- Sinon, si l’un est `long`, promu en `long`.
- Sinon, les deux sont promus en `int`.

**Exemples** :

--codejava
byte a = 10, b = 20;
int c = a + b; // a et b sont promus en int, résultat int

double d = a + 5.5; // a promu en double, résultat double
--code

## Appel de méthode

Lors d’un appel de méthode, les arguments sont élargis si nécessaire pour correspondre au type du paramètre.

--codejava
public void afficher(double valeur) {
System.out.println(valeur);
}

afficher(10); // int est élargi en double automatiquement
--code

## Avantages

- **Simplicité** – pas besoin de casts explicites pour les conversions sûres.
- **Sécurité** – aucune perte de données (sauf possible perte de précision lors de la conversion de `long` en `float` ou `double` due à la représentation en virgule flottante, mais Java considère quand même cela comme un élargissement).

**Remarque** : La conversion de `int` en `float` ou de `long` en `double` est considérée comme un élargissement, mais une perte de précision peut survenir car les types flottants ont une mantisse limitée. Java l’effectue néanmoins implicitement.
