---
title: Opérateur ternaire
sidebar:
  order: 7
  label: 3.7 Opérateur ternaire
---

L’opérateur ternaire `? :` est un raccourci pour une instruction `if‑else` qui retourne une valeur.

**Syntaxe** :

```java
condition ? expressionSiVrai : expressionSiFaux
```

**Exemples** :

```java
int age = 20;
String statut = (age >= 18) ? "Adulte" : "Mineur";
System.out.println(statut); // Adulte

int max = (a > b) ? a : b; // assigne la plus grande valeur

System.out.println((note >= 60) ? "Réussi" : "Échec");
```

**Ternaire imbriqué** (à utiliser avec parcimonie pour la lisibilité) :

```java
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";
```

**Important** : Les deux expressions doivent être de types compatibles (ou l’une doit pouvoir être affectée à l’autre). Le résultat est du type commun.

```java
// int et double : le résultat est double
double resultat = (x > 0) ? 10 : 2.5;
```
