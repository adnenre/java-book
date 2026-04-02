---
title: Modificateurs d’accès (public, protected, default, private)
sidebar:
  order: 11
  label: 5.7 Modificateurs d’accès
---

Les modificateurs d’accès contrôlent la visibilité des classes, champs, méthodes et constructeurs.

| Modificateur    | Classe | Package | Sous‑classe | Monde |
| --------------- | ------ | ------- | ----------- | ----- |
| `private`       | ✅     | ❌      | ❌          | ❌    |
| default (aucun) | ✅     | ✅      | ❌          | ❌    |
| `protected`     | ✅     | ✅      | ✅          | ❌    |
| `public`        | ✅     | ✅      | ✅          | ✅    |

**Exemples** :

```java
public class CompteBancaire {           // accessible partout
    private double solde;               // uniquement dans cette classe
    String numeroCompte;                // default : accessible dans le package
    protected double tauxInteret;       // accessible dans les sous‑classes et le package
    public String proprietaire;         // accessible partout
}
```

**Modificateurs au niveau classe** : Une classe de premier niveau peut être `public` ou default (package‑private). Elle ne peut pas être `private` ou `protected`.

**Bonnes pratiques** :

- Gardez les champs `private` et fournissez des getters/setters publics si nécessaire (encapsulation).
- Utilisez `default` pour les détails d’implémentation internes au package.
- Utilisez `protected` pour les membres destinés à être hérités.
- Utilisez `public` uniquement pour l’API que le code externe doit utiliser.
