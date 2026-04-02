---
title: Champs (variables d’instance)
sidebar:
  order: 2
  label: 5.2 Champs (variables d’instance)
---

Les **champs** (appelés aussi variables d’instance) stockent l’état d’un objet. Chaque objet possède sa propre copie de ces variables.

**Déclaration** :

```java
class Voiture {
    String modele;      // variable d’instance
    int annee;          // variable d’instance
    double prix;        // variable d’instance
}
```

**Initialisation** :

Les champs peuvent être initialisés lors de la déclaration ou dans les constructeurs.

```java
class Voiture {
    String modele = "Inconnu";
    int annee;

    Voiture(int annee) {
        this.annee = annee;
    }
}
```

**Valeurs par défaut** : S’ils ne sont pas initialisés, les champs reçoivent des valeurs par défaut (0, false, null, etc.).

**Accès** :

```java
Voiture maVoiture = new Voiture();
maVoiture.modele = "Tesla";
System.out.println(maVoiture.annee);
```

**Modificateurs de champs** :

- `public`, `private`, `protected` – contrôle d’accès
- `static` – appartient à la classe, pas à l’instance
- `final` – constante (ne peut pas être modifié)
- `transient` – exclu de la sérialisation
- `volatile` – utilisé dans les programmes multi‑threads
