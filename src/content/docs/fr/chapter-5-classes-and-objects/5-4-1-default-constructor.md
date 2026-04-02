---
title: Constructeur par défaut
sidebar:
  order: 5
  label: 5.4.1 Constructeur par défaut
---

Si vous ne définissez aucun constructeur dans une classe, Java fournit automatiquement un **constructeur par défaut** sans paramètre. Il initialise les champs à leurs valeurs par défaut (0, false, null, etc.).

**Exemple** :

```java
class Chien {
    String nom;
    int age;
    // Aucun constructeur défini – Java ajoute un constructeur par défaut
}

Chien monChien = new Chien();  // Appelle le constructeur par défaut
System.out.println(monChien.nom); // null
System.out.println(monChien.age);  // 0
```

**Important** : Si vous définissez **un quelconque** constructeur (même paramétré), le constructeur par défaut n’est **pas** fourni.

```java
class Chat {
    String nom;
    Chat(String n) {
        nom = n;
    }
    // Pas de constructeur par défaut
}

// Chat c = new Chat(); // Erreur : pas de constructeur par défaut
Chat c = new Chat("Moustache"); // OK
```

Pour avoir à la fois un constructeur par défaut et un paramétré, définissez explicitement le constructeur par défaut.
