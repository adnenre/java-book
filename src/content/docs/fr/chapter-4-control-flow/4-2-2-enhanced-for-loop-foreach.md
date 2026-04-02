---
title: Boucle for améliorée (for‑each)
sidebar:
  order: 6
  label: 4.2.2 Boucle for améliorée (for‑each)
---

La boucle `for` améliorée (appelée aussi boucle **for‑each**) simplifie l’itération sur les tableaux et les collections. Elle est en lecture seule (ne peut pas modifier la collection pendant l’itération).

**Syntaxe** :

```java
for (type variable : tableauOuCollection) {
    // corps de la boucle
}
```

**Exemples** :

```java
int[] nombres = {1, 2, 3, 4, 5};
for (int num : nombres) {
    System.out.println(num);
}
```

**Avec des collections** :

```java
List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");
for (String nom : noms) {
    System.out.println(nom);
}
```

**Limitations** :

- Ne peut pas modifier le tableau/collection sous‑jacent (sauf via la variable, mais cela n’affecte pas la source).
- Ne peut pas accéder directement à l’index courant.

```java
// Pour modifier les éléments, utilisez une boucle for traditionnelle
for (int i = 0; i < nombres.length; i++) {
    nombres[i] *= 2;
}
```
