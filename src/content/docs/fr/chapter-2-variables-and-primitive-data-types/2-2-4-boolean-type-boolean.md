---
title: Type booléen (boolean)
sidebar:
  order: 6
  label: 2.2.4 Type booléen (boolean)
---

# Type booléen

`boolean` représente l’une des deux valeurs : `true` ou `false`. Il est utilisé pour les expressions logiques et le contrôle de flux.

**Déclaration** :

```java
boolean javaEstAmusant = true;
boolean ilPleut = false;
```

**Utilisations courantes** :

- **Conditions** :

```java
if (javaEstAmusant) {
    System.out.println("Java est amusant !");
}
```

- **Contrôle de boucle** :

```java
boolean continuer = true;
while (continuer) {
    // faire quelque chose
    continuer = false; // condition d'arrêt
}
```

- **Valeurs de retour** des méthodes :

```java
public boolean estPair(int nombre) {
    return nombre % 2 == 0;
}
```

**Évaluation paresseuse (short‑circuit)** : `&&` et `||` n’évaluent que les opérandes nécessaires.

```java
int x = 5;
if (x > 0 && (10 / x) > 1) { // sûr : la seconde partie n'est évaluée que si x > 0
    // ...
}
```

**Remarque** : Java ne traite pas les entiers comme des booléens (contrairement au C/C++). Vous ne pouvez pas écrire `if (x)` ; vous devez écrire `if (x != 0)`.
