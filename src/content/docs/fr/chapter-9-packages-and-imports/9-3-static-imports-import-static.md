---
title: Imports statiques (import static)
sidebar:
  order: 3
  label: 9.3 Imports statiques (import static)
---

L'**import statique** permet d'importer des membres statiques (champs et méthodes) d'une classe pour les utiliser sans le nom de la classe.

**Syntaxe** :

```java
import static nomPaquetage.NomClasse.membreStatique;
import static nomPaquetage.NomClasse.*;   // tous les membres statiques
```

**Exemple sans import statique** :

```java
double resultat = Math.sqrt(25);
System.out.println(Math.PI);
```

**Avec import statique** :

```java
import static java.lang.Math.sqrt;
import static java.lang.Math.PI;

double resultat = sqrt(25);
System.out.println(PI);
```

**Importer tous les membres statiques** :

```java
import static java.lang.Math.*;

double r = sqrt(25);
double aire = PI * r * r;
```

**Cas d'utilisation** :

- Constantes et fonctions mathématiques (`Math`, `StrictMath`)
- Frameworks de test (ex. `import static org.junit.Assert.*;`)

**Mises en garde** :

- Peut réduire la lisibilité (difficile de savoir d'où vient une méthode).
- Évitez l'utilisation excessive ; utilisez avec parcimonie pour des utilitaires bien connus.

**Exemple avec une classe personnalisée** :

```java
class Constantes {
    public static final String NOM_APP = "MonApp";
    public static void journaliser(String msg) { ... }
}

import static Constantes.*;
String nom = NOM_APP;
journaliser("Démarré");
```
