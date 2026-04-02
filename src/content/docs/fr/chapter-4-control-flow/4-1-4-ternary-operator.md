---
title: Opérateur ternaire
sidebar:
  order: 4
  label: 4.1.4 Opérateur ternaire
---

L’opérateur ternaire `? :` est un raccourci pour une instruction `if‑else` qui retourne une valeur. Il a déjà été couvert dans la section 3.7, mais il est présenté ici dans le contexte des instructions conditionnelles.

**Syntaxe** :

```java
condition ? expressionSiVrai : expressionSiFaux
```

**Exemples** :

```java
int age = 20;
String statut = (age >= 18) ? "Adulte" : "Mineur";

int max = (a > b) ? a : b;

System.out.println((note >= 60) ? "Réussi" : "Échec");
```

**Ternaire imbriqué** (à utiliser avec parcimonie pour la lisibilité) :

```java
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";
```

**Quand l’utiliser** : pour des affectations conditionnelles simples. Pour une logique complexe, utilisez `if‑else`.

**Important** : Les deux expressions doivent être de types compatibles (ou l’une doit pouvoir être affectée à l’autre).

```java
double resultat = (x > 0) ? 10 : 2.5; // int et double → double
```
