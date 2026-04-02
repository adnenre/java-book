---
title: Types à virgule flottante (float, double)
sidebar:
  order: 4
  label: 2.2.2 Types à virgule flottante (float, double)
---

Java fournit deux types pour les nombres avec partie fractionnaire.

| Type     | Taille   | Précision                  | Valeur par défaut |
| -------- | -------- | -------------------------- | ----------------- |
| `float`  | 4 octets | 6‑7 chiffres significatifs | `0.0f`            |
| `double` | 8 octets | 15 chiffres significatifs  | `0.0d`            |

Les littéraux **float** doivent se terminer par `f` ou `F` :

--codejava
float pi = 3.14159f;
--code

**double** est le type par défaut pour les littéraux décimaux :

--codejava
double e = 2.718281828459045;
--code

Vous pouvez également utiliser la notation scientifique :

--codejava
double avogadro = 6.022e23; // 6,022 × 10²³
float planck = 6.626e-34f; // 6,626 × 10⁻³⁴
--code

**Valeurs spéciales** :

- `Float.POSITIVE_INFINITY`, `Double.NEGATIVE_INFINITY`
- `Float.NaN`, `Double.NaN` (Not‑a‑Number)

**Attention aux comparaisons avec des flottants** :

--codejava
double resultat = 0.1 + 0.2;
System.out.println(resultat == 0.3); // false !
--code

En raison de la représentation binaire, utilisez une tolérance pour l’égalité :

--codejava
double epsilon = 1e-10;
if (Math.abs(resultat - 0.3) < epsilon) {
System.out.println("Approximativement égal");
}
--code

**Quand les utiliser** :

- `float` – applications sensibles à la mémoire (graphismes 3D, tableaux de millions d’éléments)
- `double` – par défaut pour la plupart des calculs (meilleure précision)
