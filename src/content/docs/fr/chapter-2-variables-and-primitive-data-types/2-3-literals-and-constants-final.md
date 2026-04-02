---
title: Littéraux et constantes (final)
sidebar:
  order: 7
  label: 2.3 Littéraux et constantes (final)
---

# Littéraux et constantes

## Littéraux

Un **littéral** est une valeur fixe écrite directement dans le code source.

**Exemples** :

```java
int age = 25;               // littéral entier
double pi = 3.14159;        // littéral flottant
char note = 'A';            // littéral caractère
String nom = "Alice";       // littéral chaîne (un objet)
boolean flag = true;        // littéral booléen
```

**Formes de littéraux entiers** :

```java
int dec = 42;          // décimal
int oct = 052;         // octal (préfixe 0)
int hex = 0x2A;        // hexadécimal (préfixe 0x)
int bin = 0b101010;    // binaire (préfixe 0b)
```

**Underscores dans les littéraux** (Java 7+) :

```java
int million = 1_000_000;
long carteCredit = 1234_5678_9012_3456L;
```

## Constantes

Une **constante** est une variable dont la valeur ne peut pas être modifiée après initialisation. Déclarez‑la avec le mot‑clé `final`.

```java
final double PI = 3.141592653589793;
final int MAX_UTILISATEURS = 100;
```

**Convention** : les noms de constantes sont en majuscules avec des underscores.

**final vide (blank final)** : vous pouvez déclarer une variable `final` sans l’initialiser immédiatement, mais vous devez l’assigner exactement une fois.

```java
final int TAILLE;
TAILLE = 10; // autorisé une seule fois
```

Les **constantes static** sont souvent utilisées pour des valeurs immuables partagées :

```java
public class ConstantesMath {
    public static final double PI = 3.14159;
    public static final double E = 2.71828;
}
```

Elles peuvent être accédées via `ConstantesMath.PI` sans créer d’instance.
