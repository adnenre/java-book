---
title: Types entiers (byte, short, int, long)
sidebar:
  order: 3
  label: 2.2.1 Types entiers (byte, short, int, long)
---

# Types entiers

Java fournit quatre types entiers pour représenter des nombres entiers. Choisissez le type le plus petit qui correspond à votre plage pour économiser de la mémoire.

| Type    | Taille   | Plage            | Utilisation                                       |
| ------- | -------- | ---------------- | ------------------------------------------------- |
| `byte`  | 1 octet  | -128 à 127       | petits compteurs, entrées/sorties, données réseau |
| `short` | 2 octets | -32 768 à 32 767 | rarement utilisé, surtout pour compatibilité      |
| `int`   | 4 octets | -2³¹ à 2³¹‑1     | type entier par défaut, le plus courant           |
| `long`  | 8 octets | -2⁶³ à 2⁶³‑1     | grands nombres (horodatages, grands comptages)    |

**Littéraux** :

- Décimal : `int i = 100;`
- Octal (préfixe `0`) : `int octal = 012;` // décimal 10
- Hexadécimal (préfixe `0x`) : `int hex = 0x1A;` // décimal 26
- Binaire (préfixe `0b`) : `int bin = 0b1010;` // décimal 10
- Underscores : `int million = 1_000_000;`

Les **littéraux long** doivent se terminer par `L` ou `l` :

```java
long grand = 2_147_483_648L;   // dépasse la plage int
```

**Opérations** :

```java
int a = 10, b = 3;
int somme = a + b;      // 13
int produit = a * b;    // 30
int division = a / b;   // 3 (division entière tronque)
int reste = a % b;      // 1
```

Attention au dépassement : si le résultat dépasse la plage, il boucle silencieusement.

```java
int max = Integer.MAX_VALUE; // 2_147_483_647
int depassement = max + 1;   // devient -2_147_483_648
```
