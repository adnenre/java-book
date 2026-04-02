---
title: Passage de paramètres (passage par valeur)
sidebar:
  order: 2
  label: 6.2 Passage de paramètres (passage par valeur)
---

Java est **strictement par valeur**. Cela signifie qu’une copie de la valeur de l’argument est passée à la méthode.

## Avec les types primitifs

La méthode reçoit une copie de la valeur. Les modifications du paramètre n’affectent pas l’original.

```java
void incrementer(int x) {
    x++;
}
int a = 5;
incrementer(a);
System.out.println(a); // toujours 5
```

## Avec les types référence

La méthode reçoit une copie de la **référence** (l’adresse mémoire). La copie de la référence pointe vers le même objet.

- Modifier les **champs de l’objet** affecte l’objet original.
- Réaffecter le paramètre à un **nouvel objet** n’affecte PAS la référence originale.

```java
class Personne { String nom; }

void changerNom(Personne p) {
    p.nom = "Bob";   // modifie l’objet original
}

void reassigner(Personne p) {
    p = new Personne(); // la copie locale pointe maintenant vers un nouvel objet
    p.nom = "Charlie";
}

Personne alice = new Personne();
alice.nom = "Alice";
changerNom(alice);
System.out.println(alice.nom); // Bob

reassigner(alice);
System.out.println(alice.nom); // toujours Bob (référence originale inchangée)
```

**À retenir** : Vous ne pouvez pas échanger deux objets avec une méthode car Java copie les références, pas les objets eux‑mêmes.
