---
title: Valeurs par défaut des primitifs
sidebar:
  order: 10
  label: 2.6 Valeurs par défaut des primitifs
---

# Valeurs par défaut des primitifs

En Java, les champs (variables d’instance et statiques) sont automatiquement initialisés avec des valeurs par défaut si vous ne leur en assignez pas. **Les variables locales** (dans les méthodes) **ne sont pas** initialisées automatiquement – vous devez leur assigner une valeur avant de les utiliser.

## Valeurs par défaut pour les types primitifs

| Type      | Valeur par défaut        |
| --------- | ------------------------ |
| `byte`    | 0                        |
| `short`   | 0                        |
| `int`     | 0                        |
| `long`    | 0L                       |
| `float`   | 0.0f                     |
| `double`  | 0.0d                     |
| `char`    | `\u0000` (caractère nul) |
| `boolean` | `false`                  |

**Exemple** :

```java
public class DemoParDefaut {
    static int statiqueInt;        // par défaut 0
    boolean champBool;             // par défaut false
    char champChar;                // par défaut '\u0000'

    public static void main(String[] args) {
        int localInt;              // pas de défaut, doit être initialisée
        // System.out.println(localInt); // erreur de compilation
    }
}
```

**Pour les types référence** (objets, tableaux), la valeur par défaut est `null`.

```java
String str;   // par défaut null
```

**Important** : Initialisez toujours les variables locales avant de les utiliser. Le compilateur l’impose.

```java
public void methode() {
    int x;
    if (condition) {
        x = 10;
    }
    // System.out.println(x); // erreur : variable peut ne pas être initialisée
}
```
