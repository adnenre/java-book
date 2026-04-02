---
title: Concaténation de chaînes (+)
sidebar:
  order: 10
  label: 3.10 Concaténation de chaînes (+)
---

L’opérateur `+` peut concaténer des chaînes. Utilisé avec d’autres types, Java convertit automatiquement les opérandes non‑chaînes en chaînes.

**Concaténation basique** :

```java
String prenom = "Jean";
String nom = "Dupont";
String nomComplet = prenom + " " + nom;
System.out.println(nomComplet); // Jean Dupont
```

**Concaténation avec d’autres types** :

```java
int age = 30;
String message = "J’ai " + age + " ans.";
System.out.println(message); // J’ai 30 ans.
```

**L’ordre compte** : l’évaluation se fait de gauche à droite.

```java
System.out.println(10 + 20 + " est la somme"); // 30 est la somme
System.out.println("La somme est " + 10 + 20); // La somme est 1020
```

**Utilisation de `+=` avec les chaînes** :

```java
String resultat = "";
resultat += "Bonjour";
resultat += " ";
resultat += "le monde";
System.out.println(resultat); // Bonjour le monde
```

**Performances** : Pour de nombreuses concaténations (surtout dans les boucles), préférez `StringBuilder` ou `StringBuffer` pour éviter de créer de nombreux objets `String` intermédiaires.

```java
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 100; i++) {
    sb.append(i);
}
String resultat = sb.toString();
```

**Remarque** : L’opérateur `+` pour les chaînes est implémenté en interne par le compilateur à l’aide de `StringBuilder` ou `StringBuffer` (sauf dans les boucles où il peut créer plusieurs objets).
