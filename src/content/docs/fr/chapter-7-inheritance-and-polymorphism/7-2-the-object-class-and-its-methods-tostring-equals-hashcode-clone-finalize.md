---
title: La classe Object et ses méthodes (toString, equals, hashCode, clone, finalize)
sidebar:
  order: 2
  label: 7.2 La classe Object et ses méthodes
---

Toute classe en Java étend implicitement `java.lang.Object`. Ainsi, tous les objets héritent des méthodes de `Object`.

**Méthodes couramment surchargées** :

## toString()

Retourne une représentation textuelle de l’objet. Par défaut : `NomClasse@codehash`.

```java
@Override
public String toString() {
    return "Personne{nom='" + nom + "', age=" + age + "}";
}
```

## equals(Object obj)

Compare l’égalité des objets. Par défaut : égalité de référence (`==`).

```java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Personne p = (Personne) obj;
    return age == p.age && nom.equals(p.nom);
}
```

## hashCode()

Retourne un code de hachage entier. Doit être cohérent avec `equals` : si `a.equals(b)` alors `a.hashCode() == b.hashCode()`.

```java
@Override
public int hashCode() {
    return Objects.hash(nom, age);
}
```

## clone()

Crée et retourne une copie de l’objet. Nécessite l’implémentation de l’interface `Cloneable`.

```java
@Override
protected Object clone() throws CloneNotSupportedException {
    return super.clone(); // copie superficielle
}
```

## finalize()

Appelée avant le ramasse‑miettes (dépréciée depuis Java 9). Ne pas utiliser.

**Bonnes pratiques** :

- Surchargez toujours `toString()` pour une représentation significative.
- Surchargez `equals()` et `hashCode()` ensemble (ex. pour les collections comme `HashMap`).
- Préférez `Objects.equals()` et `Objects.hash()` pour éviter les vérifications de null.
