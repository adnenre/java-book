---
title: Précédence et associativité des opérateurs
sidebar:
  order: 9
  label: 3.9 Précédence et associativité des opérateurs
---

La **précédence** des opérateurs détermine l’ordre d’évaluation. L’**associativité** détermine la direction (gauche‑à‑droite ou droite‑à‑gauche) lorsque les opérateurs ont la même précédence.

**Table de précédence (de la plus élevée à la plus faible)** :

| Précédence | Opérateurs                            | Associativité   |
| ---------- | ------------------------------------- | --------------- |
| 1          | `++` `--` `+` `-` `~` `!` (postfixés) | droite‑à‑gauche |
| 2          | `*` `/` `%`                           | gauche‑à‑droite |
| 3          | `+` `-`                               | gauche‑à‑droite |
| 4          | `<<` `>>` `>>>`                       | gauche‑à‑droite |
| 5          | `<` `<=` `>` `>=` `instanceof`        | gauche‑à‑droite |
| 6          | `==` `!=`                             | gauche‑à‑droite |
| 7          | `&`                                   | gauche‑à‑droite |
| 8          | `^`                                   | gauche‑à‑droite |
| 9          | `\|`                                  | gauche‑à‑droite |
| 10         | `&&`                                  | gauche‑à‑droite |
| 11         | `\|\|`                                | gauche‑à‑droite |
| 12         | `? :`                                 | droite‑à‑gauche |
| 13         | `=` `+=` `-=` etc.                    | droite‑à‑gauche |

**Exemples** :

```java
int a = 5 + 3 * 2; // 5 + (3*2) = 11
int b = (5 + 3) * 2; // (5+3)*2 = 16
```

**Associativité** :

```java
int c = 10 / 5 * 2; // (10/5)*2 = 4 (gauche‑à‑droite)
int d = a = b = 5; // a = (b = 5) (droite‑à‑gauche)
```

**Utilisez des parenthèses pour clarifier l’intention** :

```java
if ((x > 0) && (y < 10)) { ... }
```
