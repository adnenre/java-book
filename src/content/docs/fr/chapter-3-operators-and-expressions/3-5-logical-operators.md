---
title: Opérateurs d’égalité
sidebar:
  order: 4
  label: 3.4 Opérateurs d’égalité
---

Les opérateurs d’égalité comparent deux valeurs pour l’égalité ou l’inégalité et retournent un résultat booléen.

| Opérateur | Description  | Exemple  |
| --------- | ------------ | -------- |
| `==`      | Égal à       | `a == b` |
| `!=`      | Différent de | `a != b` |

**Avec les primitifs** : Comparent les valeurs réelles.

```java
int x = 5, y = 5;
System.out.println(x == y); // true
```

**Avec les objets** : `==` compare les références (si elles pointent vers le même objet), pas le contenu.

```java
String s1 = "bonjour";
String s2 = "bonjour";
String s3 = new String("bonjour");

System.out.println(s1 == s2); // true (même pool de littéraux)
System.out.println(s1 == s3); // false (objets différents)
System.out.println(s1.equals(s3)); // true (comparaison de contenu)
```

**Important** : Utilisez toujours `.equals()` pour comparer le contenu des objets, sauf si vous voulez spécifiquement l’égalité de référence.

**Avec `null`** : Vous pouvez vérifier `null` avec `==` ou `!=`.

```java
String str = null;
if (str == null) {
    System.out.println("Référence nulle");
}
```
