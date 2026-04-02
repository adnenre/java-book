---
title: Retour de valeurs
sidebar:
  order: 4
  label: 6.4 Retour de valeurs
---

Les méthodes retournent des valeurs à l’aide du mot‑clé `return`. Le type de retour doit correspondre au type déclaré (ou être un sous‑type pour les objets).

**Retour basique** :

```java
int ajouter(int a, int b) {
    return a + b;
}
```

**Retour anticipé** (points de retour multiples) :

```java
int max(int a, int b) {
    if (a > b) return a;
    else return b;
}
```

**Retour d’objets** :

```java
Personne creerPersonne(String nom, int age) {
    Personne p = new Personne(nom, age);
    return p;
    // ou simplement : return new Personne(nom, age);
}
```

**Méthodes void** – utilisez `return;` pour sortir prématurément (optionnel).

```java
void afficherPositif(int x) {
    if (x <= 0) return;
    System.out.println(x);
}
```

**Retour de valeurs multiples** : Les méthodes Java ne peuvent retourner qu’une seule valeur. Pour en retourner plusieurs, utilisez :

- Un tableau
- Une collection
- Un objet personnalisé (record ou classe)

```java
int[] obtenirMinMax(int[] arr) {
    int min = arr[0], max = arr[0];
    for (int n : arr) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return new int[]{min, max};
}
```
