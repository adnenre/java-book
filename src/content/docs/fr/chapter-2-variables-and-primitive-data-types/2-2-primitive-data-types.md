---
title: Types de données primitifs
sidebar:
  order: 2
  label: 2.2 Types de données primitifs
---

# Types de données primitifs

Java possède huit **types de données primitifs** qui représentent des valeurs simples. Ce ne sont pas des objets et ils sont stockés directement en mémoire.

| Type      | Taille                 | Plage / Valeurs                                   |
| --------- | ---------------------- | ------------------------------------------------- |
| `byte`    | 1 octet                | -128 à 127                                        |
| `short`   | 2 octets               | -32 768 à 32 767                                  |
| `int`     | 4 octets               | -2³¹ à 2³¹‑1 (≈ ±2,1 milliards)                   |
| `long`    | 8 octets               | -2⁶³ à 2⁶³‑1                                      |
| `float`   | 4 octets               | ±3,4E‑38 à ±3,4E+38 (6‑7 chiffres significatifs)  |
| `double`  | 8 octets               | ±1,7E‑308 à ±1,7E+308 (15 chiffres significatifs) |
| `char`    | 2 octets               | 0 à 65 535 (caractères Unicode)                   |
| `boolean` | non défini précisément | `true` ou `false`                                 |

## Pourquoi des primitifs ?

- **Performance** : plus rapides que les objets car ils vivent sur la pile.
- **Simplicité** : représentent directement des nombres, caractères et booléens.

**Exemples** :

```java
byte b = 100;
short s = 30000;
int i = 2_000_000; // underscores pour la lisibilité
long l = 9_000_000_000L; // suffixe L pour long
float f = 3.14f; // suffixe f pour float
double d = 3.1415926535;
char c = 'A';
boolean flag = false;
```
