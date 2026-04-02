---
title: Instruction switch (traditionnelle et améliorée avec flèches, yield)
sidebar:
  order: 3
  label: 4.1.3 Instruction switch
---

L’instruction `switch` sélectionne un bloc de code parmi plusieurs en fonction de la valeur d’une expression.

## Switch traditionnel (fall‑through)

Utilise `case` et `break` pour éviter l’exécution en cascade.

```java
int jour = 3;
switch (jour) {
    case 1:
        System.out.println("Lundi");
        break;
    case 2:
        System.out.println("Mardi");
        break;
    case 3:
        System.out.println("Mercredi");
        break;
    default:
        System.out.println("Autre jour");
}
```

Sans `break`, l’exécution continue au `case` suivant (fall‑through).

## Switch amélioré (Java 14+)

Utilise des flèches `->` (pas de fall‑through) et peut retourner une valeur avec `yield`.

**Syntaxe avec flèche** :

```java
switch (jour) {
    case 1 -> System.out.println("Lundi");
    case 2 -> System.out.println("Mardi");
    case 3 -> System.out.println("Mercredi");
    default -> System.out.println("Autre jour");
}
```

**Étiquettes multiples** :

```java
switch (jour) {
    case 1, 2, 3 -> System.out.println("Jour de semaine");
    case 6, 7 -> System.out.println("Weekend");
    default -> System.out.println("Invalide");
}
```

**Utilisation de `yield` pour retourner une valeur** :

```java
String resultat = switch (jour) {
    case 1, 2, 3, 4, 5 -> "Jour de semaine";
    case 6, 7 -> "Weekend";
    default -> "Invalide";
};
```

Ou avec un bloc :

```java
int nbLettres = switch (jour) {
    case 1 -> {
        System.out.println("Lundi");
        yield 6;   // retourne 6
    }
    case 2 -> {
        System.out.println("Mardi");
        yield 7;
    }
    default -> 0;
};
```
