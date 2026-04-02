---
title: Type caractère (char)
sidebar:
  order: 5
  label: 2.2.3 Type caractère (char)
---

`char` représente un caractère Unicode 16 bits. Il peut stocker tout caractère du standard Unicode (plus de 65 000 caractères).

**Plage** : 0 à 65 535 (non signé).

**Déclaration** :

```java
char lettre = 'A';
char chiffre = '9';
char symbole = '$';
```

**Séquences d’échappement** :

| Séquence | Signification     |
| -------- | ----------------- |
| `\n`     | retour à la ligne |
| `\t`     | tabulation        |
| `\'`     | guillemet simple  |
| `\"`     | guillemet double  |
| `\\`     | antislash         |

```java
char nouvelleLigne = '\n';
char guillemet = '\'';
```

**Représentation Unicode** :

```java
char omega = '\u03A9';   // oméga grec majuscule
char sourire = '\u263A'; // smiley blanc
```

**char comme type numérique** :

`char` peut être traité comme un entier car il stocke un code numérique. Vous pouvez effectuer des opérations arithmétiques :

```java
char ch = 'A';
ch++;                    // maintenant 'B'
int code = ch;           // 66
System.out.println(ch + 1); // affiche 67 (int)
```

**Comparaison** :

```java
if (ch >= 'A' && ch <= 'Z') {
    System.out.println("Lettre majuscule");
}
```
