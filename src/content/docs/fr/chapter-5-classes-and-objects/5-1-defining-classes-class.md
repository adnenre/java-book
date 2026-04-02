---
title: Définition des classes (class)
sidebar:
  order: 1
  label: 5.1 Définition des classes (class)
---

Une classe est définie à l’aide du mot‑clé `class`, suivi du nom de la classe et d’un corps `{}` contenant les champs et les méthodes.

**Syntaxe** :

```java
class NomDeLaClasse {
    // champs
    // constructeurs
    // méthodes
}
```

**Exemple** :

```java
class Personne {
    String nom;
    int age;

    void parler() {
        System.out.println("Bonjour, je m'appelle " + nom);
    }
}
```

**Conventions de nommage** :

- Les noms de classes commencent par une majuscule (PascalCase).
- Utilisez des noms significatifs et descriptifs.

**Modificateurs de classe** :

- `public` – accessible partout (le plus courant)
- `abstract` – ne peut pas être instanciée
- `final` – ne peut pas avoir de sous‑classe
- `strictfp` – comportement strict des nombres flottants

```java
public class Employe {
    // ...
}
```
