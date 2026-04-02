---
title: Varargs (arguments de longueur variable)
sidebar:
  order: 3
  label: 6.3 Varargs
---

Les **varargs** permettent à une méthode d’accepter zéro ou plusieurs arguments du même type. La syntaxe utilise des points de suspension (`...`) après le type.

**Syntaxe** :

```java
typeRetour nomMethode(Type... nomParametre) { ... }
```

En interne, le paramètre varargs est traité comme un tableau.

**Exemple** :

```java
int somme(int... nombres) {
    int total = 0;
    for (int n : nombres) {
        total += n;
    }
    return total;
}

System.out.println(somme(1, 2, 3));    // 6
System.out.println(somme());           // 0
System.out.println(somme(10));         // 10
```

**Règles** :

- Un seul paramètre varargs par méthode.
- Il doit être le dernier paramètre.

```java
void exemple(String prefixe, int... valeurs) { } // correct
// void exemple(int... valeurs, String prefixe) { } // erreur
```

**Surcharge avec varargs** – peut être ambiguë ; à utiliser avec précaution.

```java
void afficher(int... a) { }
void afficher(int a, int... b) { }
afficher(1); // ambigu ? Java choisit la plus spécifique
```

**Cas d’utilisation** : Journalisation, formatage, opérations mathématiques avec entrées variables.
